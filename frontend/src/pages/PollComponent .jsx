import React, { useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, IconButton, FormControlLabel, Radio, RadioGroup, LinearProgress, Typography } from '@mui/material';
import PollIcon from '@mui/icons-material/Poll';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

const PollComponent = ({ socketRef, username, userRole, meetingCode  }) => {
    // Poll states
    const [showPollModal, setShowPollModal] = useState(false);
    const [showCreatePoll, setShowCreatePoll] = useState(false);
    const [activePoll, setActivePoll] = useState(null);
    const [pollQuestion, setPollQuestion] = useState("");
    const [pollOptions, setPollOptions] = useState(["", ""]);
    const [userVote, setUserVote] = useState(null);
    const [pollResults, setPollResults] = useState({});
    const [newPollNotification, setNewPollNotification] = useState(0);

    const isInstructor = userRole === 'instructor' || userRole === 'teacher';

    // Socket event listeners
    useEffect(() => {
        if (!socketRef.current) return;

        // Listen for new polls
        socketRef.current.on('poll-created', (poll) => {
            setActivePoll(poll);
            setPollResults(poll.votes || {});
            setUserVote(null);
            setNewPollNotification(prev => prev + 1);
            if (!showPollModal) {
                // Auto-open poll for students
                if (!isInstructor) {
                    setShowPollModal(true);
                }
            }
        });

        // Listen for vote updates
        socketRef.current.on('poll-vote', (voteData) => {
            setPollResults(prev => ({
                ...prev,
                [voteData.userId]: voteData
            }));
        });

        // Listen for poll end
        socketRef.current.on('poll-ended', (pollId) => {
            if (activePoll && activePoll.id === pollId) {
                setTimeout(() => {
                    setActivePoll(null);
                    setUserVote(null);
                    setPollResults({});
                }, 5000); // Show results for 5 seconds
            }
        });

        return () => {
            if (socketRef.current) {
                socketRef.current.off('poll-created');
                socketRef.current.off('poll-vote');
                socketRef.current.off('poll-ended');
            }
        };
    }, [socketRef.current, activePoll, isInstructor, showPollModal]);

    // Poll functions
    const addPollOption = () => {
        if (pollOptions.length < 6) {
            setPollOptions([...pollOptions, ""]);
        }
    };

    const removePollOption = (index) => {
        if (pollOptions.length > 2) {
            setPollOptions(pollOptions.filter((_, i) => i !== index));
        }
    };

    const updatePollOption = (index, value) => {
        const newOptions = [...pollOptions];
        newOptions[index] = value;
        setPollOptions(newOptions);
    };

    const createPoll = () => {
        if (!pollQuestion.trim() || pollOptions.some(opt => !opt.trim())) {
            alert("Please fill in all fields");
            return;
        }

        const poll = {
            id: Date.now(),
            question: pollQuestion.trim(),
            options: pollOptions.filter(opt => opt.trim()),
            createdBy: username,
            createdAt: Date.now(),
            votes: {}
        };

        const path = window.location.href; // <-- add this

         console.log("Teacher creating poll:", poll, "Path:", path);

        // Emit poll to all participants with the path
        socketRef.current.emit('create-poll', { path, ...poll });
        
        // Set as active poll for instructor
        setActivePoll(poll);
        setPollResults({});
        
        // Reset form
        setPollQuestion("");
        setPollOptions(["", ""]);
        setShowCreatePoll(false);
        setShowPollModal(true);
    };

   const votePoll = (optionIndex) => {
        if (!activePoll || userVote !== null) return;

        setUserVote(optionIndex);

        const path = window.location.href; // current meeting URL

        // Emit vote to server with path
        socketRef.current.emit('vote-poll', {
            path,
            pollId: activePoll.id,
            optionIndex,
            userId: socketRef.current.id,
            username
        });
    };


   const endPoll = () => {
        if (activePoll && isInstructor) {
            const path = window.location.href; // get current room URL
            socketRef.current.emit('end-poll', path);
        }
    };


    const openPollModal = () => {
        setShowPollModal(true);
        setNewPollNotification(0);
    };

    // Calculate poll results
    const calculateResults = () => {
        if (!activePoll || !pollResults) return {};
        
        const totalVotes = Object.keys(pollResults).length;
        const results = {};
        
        activePoll.options.forEach((option, index) => {
            const votes = Object.values(pollResults).filter(vote => vote.optionIndex === index).length;
            results[index] = {
                votes: votes,
                percentage: totalVotes > 0 ? Math.round((votes / totalVotes) * 100) : 0
            };
        });
        
        return results;
    };

    const results = calculateResults();

    return (
        <>
            {/* Poll Button - Show for everyone, but different behavior */}
            <IconButton 
                onClick={isInstructor ? () => setShowCreatePoll(true) : openPollModal} 
                style={{ color: isInstructor ? "yellow" : "white" }}
                title={isInstructor ? "Create Poll" : "View Poll"}
            >
                <PollIcon />
                {newPollNotification > 0 && !isInstructor && (
                    <span style={{
                        position: 'absolute',
                        top: -5,
                        right: -5,
                        backgroundColor: 'red',
                        color: 'white',
                        borderRadius: '50%',
                        width: 20,
                        height: 20,
                        fontSize: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        {newPollNotification}
                    </span>
                )}
            </IconButton>

            {/* View/Participate in Poll Modal */}
            <Dialog 
                open={showPollModal} 
                onClose={() => setShowPollModal(false)}
                maxWidth="sm"
                fullWidth
            >
                <DialogTitle>
                    {activePoll ? 'Live Poll' : 'No Active Poll'}
                </DialogTitle>

                <DialogContent>
                    {activePoll ? (
                        <div>
                            <Typography variant="h6" gutterBottom>
                                {activePoll.question}
                            </Typography>
                            
                            {userVote === null && !isInstructor ? (
                                // Show voting options for students
                                <div>
                                    <Typography variant="subtitle2" gutterBottom>
                                        Choose your answer:
                                    </Typography>
                                    <RadioGroup>
                                        {activePoll.options.map((option, index) => (
                                            <FormControlLabel
                                                key={index}
                                                value={index}
                                                control={<Radio />}
                                                label={option}
                                                onClick={() => votePoll(index)}
                                                style={{ cursor: 'pointer', marginBottom: '8px' }}
                                            />
                                        ))}
                                    </RadioGroup>
                                </div>
                            ) : (
                                // Show results (for instructor or after voting)
                                <div>
                                    <Typography variant="subtitle1" gutterBottom>
                                        Poll Results:
                                    </Typography>
                                    {activePoll.options.map((option, index) => (
                                        <div key={index} style={{ marginBottom: '15px' }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <Typography variant="body1">
                                                    {option} {userVote === index ? '(Your vote)' : ''}
                                                </Typography>
                                                <Typography variant="body2">
                                                    {results[index]?.percentage || 0}% ({results[index]?.votes || 0} votes)
                                                </Typography>
                                            </div>
                                            <LinearProgress
                                                variant="determinate"
                                                value={results[index]?.percentage || 0}
                                                style={{ 
                                                    marginTop: '5px', 
                                                    height: '8px', 
                                                    borderRadius: '4px',
                                                    backgroundColor: '#f0f0f0'
                                                }}
                                            />
                                        </div>
                                    ))}
                                    <Typography variant="caption" color="textSecondary">
                                        Total votes: {Object.keys(pollResults).length}
                                    </Typography>
                                </div>
                            )}
                            
                            {isInstructor && (
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    onClick={endPoll}
                                    style={{ marginTop: '15px' }}
                                    fullWidth
                                >
                                    End Poll
                                </Button>
                            )}
                        </div>
                    ) : (
                        <Typography>
                            No active poll at the moment.
                        </Typography>
                    )}
                </DialogContent>

                <DialogActions>
                    <Button onClick={() => setShowPollModal(false)}>Close</Button>
                </DialogActions>

            </Dialog>

            {/* Create Poll Modal - Only for instructors */}
            {isInstructor && (
                <Dialog 
                    open={showCreatePoll} 
                    onClose={() => setShowCreatePoll(false)}
                    maxWidth="sm"
                    fullWidth
                >
                    <DialogTitle>Create New Poll</DialogTitle>
                    <DialogContent>
                        <TextField
                            fullWidth
                            label="Poll Question"
                            value={pollQuestion}
                            onChange={(e) => setPollQuestion(e.target.value)}
                            margin="normal"
                            multiline
                            rows={2}
                            placeholder="Enter your question here..."
                        />
                        
                        <Typography variant="subtitle2" style={{ marginTop: '16px', marginBottom: '8px' }}>
                            Options:
                        </Typography>
                        
                        {pollOptions.map((option, index) => (
                            <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                                <TextField
                                    fullWidth
                                    label={`Option ${index + 1}`}
                                    value={option}
                                    onChange={(e) => updatePollOption(index, e.target.value)}
                                    size="small"
                                    placeholder={`Enter option ${index + 1}`}
                                />
                                {pollOptions.length > 2 && (
                                    <IconButton 
                                        onClick={() => removePollOption(index)} 
                                        color="error"
                                        size="small"
                                        style={{ marginLeft: '8px' }}
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                )}
                            </div>
                        ))}
                        
                        {pollOptions.length < 6 && (
                            <Button
                                startIcon={<AddIcon />}
                                onClick={addPollOption}
                                style={{ marginTop: '8px' }}
                                variant="outlined"
                                size="small"
                            >
                                Add Option
                            </Button>
                        )}
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => setShowCreatePoll(false)}>Cancel</Button>
                        <Button 
                            onClick={createPoll} 
                            variant="contained"
                            disabled={!pollQuestion.trim() || pollOptions.some(opt => !opt.trim())}
                        >
                            Create Poll
                        </Button>
                    </DialogActions>
                </Dialog>
            )}
        </>
    );
};

export default PollComponent;