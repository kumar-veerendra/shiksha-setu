import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AuthContext } from '../context/AuthContext';
import { Snackbar } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const defaultTheme = createTheme();

export default function Authentication() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [name, setName] = React.useState('');
  const [role, setRole] = React.useState('student'); // Default role
  const [error, setError] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [formState, setFormState] = React.useState(0); // 0 = Login, 1 = Register
  const [open, setOpen] = React.useState(false);

  const navigate = useNavigate();
  const { handleRegister, handleLogin } = React.useContext(AuthContext);

    const handleAuth = async (e) => {
        e.preventDefault(); // ✅ stop page reload
        try {
            if (formState === 0) {
            // Login
            await handleLogin(username, password);

            const userRole = JSON.parse(localStorage.getItem('user'))?.role || role;

            if (userRole === 'student') navigate('/student-dashboard', { replace: true });
            else if (userRole === 'teacher') navigate('/teacher-dashboard', { replace: true });
            } else {
            // Registration logic...
                const result = await handleRegister(name, username, password, role);

                console.log("Register response:", result);

                setMessage(result);
                setOpen(true);
                setError('');

                // Reset form to login
                setFormState(0);
                setUsername('');
                setPassword('');
                setName('');
                setRole('student');
            }
        } catch (err) {
            console.log(err);
            const msg = err?.response?.data?.message || 'Error occurred';
            setError(msg);
        }
    };


  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box sx={{ my: 8, mx: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>

            {/* Toggle Buttons */}
            <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
              <Button variant={formState === 0 ? 'contained' : 'outlined'} onClick={() => setFormState(0)}>
                Sign In
              </Button>
              <Button variant={formState === 1 ? 'contained' : 'outlined'} onClick={() => setFormState(1)}>
                Sign Up
              </Button>
            </Box>

            <Box component="form" noValidate sx={{ mt: 1 }}>
              {formState === 1 && (
                <>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    label="Full Name"
                    name="name"
                    value={name}
                    autoFocus
                    onChange={(e) => setName(e.target.value)}
                  />

                  {/* Role Selector */}
                  <TextField
                    select
                    margin="normal"
                    required
                    fullWidth
                    label="Select Role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    SelectProps={{ native: true }}
                  >
                    <option value="student">Student</option>
                    <option value="teacher">Teacher</option>
                  </TextField>
                </>
              )}

              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                value={username}
                autoFocus
                onChange={(e) => setUsername(e.target.value)}
              />

              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                value={password}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                id="password"
              />

              {error && <p style={{ color: 'red' }}>{error}</p>}

              <Button
                type="button"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleAuth}
              >
                {formState === 0 ? 'Login' : 'Register'}
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>

      <Snackbar open={open} autoHideDuration={4000} message={message} />
    </ThemeProvider>
  );
}
