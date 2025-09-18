// import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import Paper from '@mui/material/Paper';
// import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { AuthContext } from '../context/AuthContext';
// import { Snackbar } from '@mui/material';
// import { useNavigate } from 'react-router-dom';

// const defaultTheme = createTheme();

// export default function Authentication() {
//   const [username, setUsername] = React.useState('');
//   const [password, setPassword] = React.useState('');
//   const [name, setName] = React.useState('');
//   const [role, setRole] = React.useState('student'); // Default role
//   const [error, setError] = React.useState('');
//   const [message, setMessage] = React.useState('');
//   const [formState, setFormState] = React.useState(0); // 0 = Login, 1 = Register
//   const [open, setOpen] = React.useState(false);

//   const navigate = useNavigate();
//   const { handleRegister, handleLogin } = React.useContext(AuthContext);

//     const handleAuth = async (e) => {
//         e.preventDefault(); // ✅ stop page reload
//         try {
//             if (formState === 0) {
//             // Login
//             await handleLogin(username, password);

//             const userRole = JSON.parse(localStorage.getItem('user'))?.role || role;

//             if (userRole === 'student') navigate('/student-dashboard', { replace: true });
//             else if (userRole === 'teacher') navigate('/teacher-dashboard', { replace: true });
//             } else {
//             // Registration logic...
//                 const result = await handleRegister(name, username, password, role);

//                 console.log("Register response:", result);

//                 setMessage(result);
//                 setOpen(true);
//                 setError('');

//                 // Reset form to login
//                 setFormState(0);
//                 setUsername('');
//                 setPassword('');
//                 setName('');
//                 setRole('student');
//             }
//         } catch (err) {
//             console.log(err);
//             const msg = err?.response?.data?.message || 'Error occurred';
//             setError(msg);
//         }
//     };


//   return (
//     <ThemeProvider theme={defaultTheme}>
//       <Grid container component="main" sx={{ height: '100vh' }}>
//         <CssBaseline />
//         {/* <Grid
//           item
//           xs={false}
//           sm={4}
//           md={7}
//           sx={{
//             backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
//             backgroundRepeat: 'no-repeat',
//             backgroundColor: (t) =>
//               t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//           }}
//         /> */}
//         <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
//           <Box sx={{ my: 8, mx: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//             <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//               <LockOutlinedIcon />
//             </Avatar>

//             {/* Toggle Buttons */}
//             <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
//               <Button variant={formState === 0 ? 'contained' : 'outlined'} onClick={() => setFormState(0)}>
//                 Sign In
//               </Button>
//               <Button variant={formState === 1 ? 'contained' : 'outlined'} onClick={() => setFormState(1)}>
//                 Sign Up
//               </Button>
//             </Box>

//             <Box component="form" noValidate sx={{ mt: 1 }}>
//               {formState === 1 && (
//                 <>
//                   <TextField
//                     margin="normal"
//                     required
//                     fullWidth
//                     id="name"
//                     label="Full Name"
//                     name="name"
//                     value={name}
//                     autoFocus
//                     onChange={(e) => setName(e.target.value)}
//                   />

//                   {/* Role Selector */}
//                   <TextField
//                     select
//                     margin="normal"
//                     required
//                     fullWidth
//                     label="Select Role"
//                     value={role}
//                     onChange={(e) => setRole(e.target.value)}
//                     SelectProps={{ native: true }}
//                   >
//                     <option value="student">Student</option>
//                     <option value="teacher">Teacher</option>
//                   </TextField>
//                 </>
//               )}

//               <TextField
//                 margin="normal"
//                 required
//                 fullWidth
//                 id="username"
//                 label="Username"
//                 name="username"
//                 value={username}
//                 autoFocus
//                 onChange={(e) => setUsername(e.target.value)}
//               />

//               <TextField
//                 margin="normal"
//                 required
//                 fullWidth
//                 name="password"
//                 label="Password"
//                 value={password}
//                 type="password"
//                 onChange={(e) => setPassword(e.target.value)}
//                 id="password"
//               />

//               {error && <p style={{ color: 'red' }}>{error}</p>}

//               <Button
//                 type="button"
//                 fullWidth
//                 variant="contained"
//                 sx={{ mt: 3, mb: 2 }}
//                 onClick={handleAuth}
//               >
//                 {formState === 0 ? 'Login' : 'Register'}
//               </Button>
//             </Box>
//           </Box>
//         </Grid>
//       </Grid>

//       <Snackbar open={open} autoHideDuration={4000} message={message} />
//     </ThemeProvider>
//   );
// }




import * as React from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

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

  // Auto-hide success message
  React.useEffect(() => {
    if (open) {
      const timer = setTimeout(() => setOpen(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [open]);

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-5">
            <div className="card shadow-lg border-0">
              <div className="card-body p-5">
                {/* Header with Icon */}
                <div className="text-center mb-4">
                  <div className="d-inline-flex align-items-center justify-content-center bg-primary text-white rounded-circle mb-3" 
                       style={{ width: '60px', height: '60px' }}>
                    <i className="fas fa-lock fa-lg"></i>
                  </div>
                  <h2 className="text-dark fw-bold">
                    {formState === 0 ? 'Welcome Back' : 'Create Account'}
                  </h2>
                  <p className="text-muted">
                    {formState === 0 ? 'Sign in to your account' : 'Sign up for a new account'}
                  </p>
                </div>

                {/* Toggle Buttons */}
                <div className="d-flex gap-2 mb-4">
                  <button
                    type="button"
                    className={`btn flex-fill ${formState === 0 ? 'btn-primary' : 'btn-outline-primary'}`}
                    onClick={() => setFormState(0)}
                  >
                    Sign In
                  </button>
                  <button
                    type="button"
                    className={`btn flex-fill ${formState === 1 ? 'btn-primary' : 'btn-outline-primary'}`}
                    onClick={() => setFormState(1)}
                  >
                    Sign Up
                  </button>
                </div>

                {/* Success Message */}
                {open && message && (
                  <div className="alert alert-success alert-dismissible fade show" role="alert">
                    <i className="fas fa-check-circle me-2"></i>
                    {message}
                    <button 
                      type="button" 
                      className="btn-close" 
                      onClick={() => setOpen(false)}
                      aria-label="Close"
                    ></button>
                  </div>
                )}

                {/* Error Message */}
                {error && (
                  <div className="alert alert-danger" role="alert">
                    <i className="fas fa-exclamation-triangle me-2"></i>
                    {error}
                  </div>
                )}

                {/* Form */}
                <form onSubmit={handleAuth}>
                  {formState === 1 && (
                    <>
                      <div className="mb-3">
                        <label htmlFor="name" className="form-label fw-medium">
                          Full Name <span className="text-danger">*</span>
                        </label>
                        <div className="input-group">
                          <span className="input-group-text bg-light">
                            <i className="fas fa-user text-muted"></i>
                          </span>
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your full name"
                            required
                          />
                        </div>
                      </div>

                      <div className="mb-3">
                        <label htmlFor="role" className="form-label fw-medium">
                          Select Role <span className="text-danger">*</span>
                        </label>
                        <div className="input-group">
                          <span className="input-group-text bg-light">
                            <i className="fas fa-user-tag text-muted"></i>
                          </span>
                          <select
                            className="form-select"
                            id="role"
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            required
                          >
                            <option value="student">Student</option>
                            <option value="teacher">Teacher</option>
                          </select>
                        </div>
                      </div>
                    </>
                  )}

                  <div className="mb-3">
                    <label htmlFor="username" className="form-label fw-medium">
                      Username <span className="text-danger">*</span>
                    </label>
                    <div className="input-group">
                      <span className="input-group-text bg-light">
                        <i className="fas fa-at text-muted"></i>
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter your username"
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="password" className="form-label fw-medium">
                      Password <span className="text-danger">*</span>
                    </label>
                    <div className="input-group">
                      <span className="input-group-text bg-light">
                        <i className="fas fa-lock text-muted"></i>
                      </span>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        required
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary btn-lg w-100 fw-medium"
                  >
                    <i className={`fas ${formState === 0 ? 'fa-sign-in-alt' : 'fa-user-plus'} me-2`}></i>
                    {formState === 0 ? 'Sign In' : 'Create Account'}
                  </button>
                </form>

                {/* Footer */}
                <div className="text-center mt-4">
                  <small className="text-muted">
                    {formState === 0 ? "Don't have an account? " : "Already have an account? "}
                    <button
                      type="button"
                      className="btn btn-link p-0 text-decoration-none"
                      onClick={() => setFormState(formState === 0 ? 1 : 0)}
                    >
                      {formState === 0 ? 'Sign up here' : 'Sign in here'}
                    </button>
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .min-vh-100 {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }
        
        .card {
          border-radius: 15px;
          backdrop-filter: blur(10px);
        }
        
        .form-control, .form-select {
          border: 1px solid #e3e6f0;
          border-radius: 8px;
          padding: 12px 15px;
          font-size: 14px;
          transition: all 0.3s ease;
        }
        
        .form-control:focus, .form-select:focus {
          border-color: #667eea;
          box-shadow: 0 0 0 0.2rem rgba(102, 126, 234, 0.25);
        }
        
        .input-group-text {
          border: 1px solid #e3e6f0;
          border-right: none;
          border-radius: 8px 0 0 8px;
        }
        
        .input-group .form-control, 
        .input-group .form-select {
          border-left: none;
          border-radius: 0 8px 8px 0;
        }
        
        .btn-primary {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border: none;
          border-radius: 8px;
          padding: 12px 24px;
          font-weight: 600;
          transition: all 0.3s ease;
        }
        
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
        }
        
        .btn-outline-primary {
          border: 2px solid #667eea;
          border-radius: 8px;
          color: #667eea;
          font-weight: 600;
          transition: all 0.3s ease;
        }
        
        .btn-outline-primary:hover {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-color: #667eea;
          transform: translateY(-1px);
        }
        
        .alert {
          border-radius: 8px;
          border: none;
        }
        
        .gap-2 {
          gap: 0.5rem !important;
        }
        
        .rounded-circle {
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
        }
        
        /* Smooth transitions for form state changes */
        .registration-fields {
          max-height: 0;
          opacity: 0;
          overflow: hidden;
          transform: translateY(-20px);
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .registration-fields.show {
          max-height: 300px;
          opacity: 1;
          transform: translateY(0);
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        /* Form container transitions */
        .form-container {
          transition: opacity 0.3s ease-in-out;
        }
        
        .form-container.transitioning {
          opacity: 0.7;
        }
        
        /* Header transitions */
        .text-center {
          transition: opacity 0.3s ease-in-out;
        }
        
        .text-center.transitioning {
          opacity: 0.8;
        }
        
        /* Button transition improvements */
        .btn {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        /* Prevent flash of content */
        .registration-fields > * {
          transition: opacity 0.4s ease-in-out;
        }
        
        .registration-fields:not(.show) > * {
          opacity: 0;
        }
        
        .registration-fields.show > * {
          opacity: 1;
        }
        
        @media (max-width: 576px) {
          .card-body {
            padding: 2rem 1.5rem !important;
          }
          
          .registration-fields.show {
            max-height: 350px;
          }
        }
      `}</style>
    </div>
  );
}