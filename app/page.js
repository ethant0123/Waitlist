'use client';

import { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { firestore } from '../firebase'; // Adjust the path if needed
import { Container, Typography, TextField, Button, Grid, Paper, Box, Snackbar, Alert } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Define your Material-UI theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#4a90e2', // Soft Blue
    },
    secondary: {
      main: '#7b8d8e', // Soft Gray
    },
    background: {
      default: '#f4f4f4', // Light Gray
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h3: {
      fontSize: '3rem', // Increased font size for the main heading
    },
    body1: {
      fontSize: '1.25rem', // Slightly larger body text
    },
    h6: {
      fontSize: '1.5rem', // Increased font size for section titles
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '25px',
          textTransform: 'none',
          padding: '12px 24px', // Slightly larger padding for buttons
          boxShadow: 'none',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: '25px',
          boxShadow: 'none',
        },
      },
    },
  },
});

export default function Page() {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    try {
      if (!email) {
        setError('Please enter a valid email.');
        return;
      }
      await addDoc(collection(firestore, 'waitlist'), { email });
      setSuccess(true);
      setEmail('');
    } catch (err) {
      setError('Failed to save email. Please try again.');
      console.error('Error adding document: ', err);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Box 
        sx={{ 
          minHeight: '100vh', 
          display: 'flex', 
          flexDirection: 'column',
          background: '#f4f4f4', // Light gray background
          color: '#333', // Dark gray text
          padding: 3 // Added padding for spacing
        }}
      >
        <Box 
          sx={{ 
            flexGrow: 1, 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center', 
            alignItems: 'center',
            paddingBottom: 4, // Adjusted padding to move content down
            paddingTop: 4, // Adjusted padding to move content down
          }}
        >
          <Container maxWidth="md" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingBottom: 4 }}>
            {/* Hero Section */}
            <Box sx={{ textAlign: 'center', mb: 3, maxWidth: '1000px' }}> {/* Increased maxWidth to prevent text wrapping */}
              <Typography variant="h3" gutterBottom>
                Join Our Waitlist for Early Access
              </Typography>
              <Typography variant="body1" paragraph>
                Sign up to be among the first to experience our innovative app.
              </Typography>
              <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                <TextField
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  variant="outlined"
                  fullWidth
                  sx={{ mb: 2 }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Join Waitlist
                </Button>
              </form>
              {success && (
                <Snackbar open={success} autoHideDuration={6000} onClose={() => setSuccess(false)}>
                  <Alert onClose={() => setSuccess(false)} severity="success">
                    Thank you for joining the waitlist!
                  </Alert>
                </Snackbar>
              )}
              {error && (
                <Snackbar open={!!error} autoHideDuration={6000} onClose={() => setError('')}>
                  <Alert onClose={() => setError('')} severity="error">
                    {error}
                  </Alert>
                </Snackbar>
              )}
            </Box>

            {/* Features Section */}
            <Box sx={{ py: 4, width: '100%' }}>
              <Container>
                <Grid container spacing={4} justifyContent="center">
                  <Grid item xs={12} md={4}>
                    <Paper sx={{ p: 4, textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: 'white', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '10px' }}>
                      <Typography variant="h6" gutterBottom>
                        Create
                      </Typography>
                      <Typography>
                        Build a custom profile showcasing your skills and interests.
                      </Typography>
                    </Paper>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Paper sx={{ p: 4, textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: 'white', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '10px' }}>
                      <Typography variant="h6" gutterBottom>
                        Explore
                      </Typography>
                      <Typography>
                        Browse through profiles to find your ideal teammate or partner.
                      </Typography>
                    </Paper>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Paper sx={{ p: 4, textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: 'white', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '10px' }}>
                      <Typography variant="h6" gutterBottom>
                        Connect
                      </Typography>
                      <Typography>
                        Engage with users who share similar interests.
                      </Typography>
                    </Paper>
                  </Grid>
                </Grid>
              </Container>
            </Box>
          </Container>
        </Box>

        {/* Footer */}
        <Box sx={{ py: 4, backgroundColor: '#333', color: 'white', textAlign: 'center', width: '100%' }}>
          <Typography variant="body2">
            &copy; 2024 SyncUp. All rights reserved.
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
