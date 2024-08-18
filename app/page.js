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
      main: '#3f51b5', // Indigo
    },
    secondary: {
      main: '#f50057', // Pink
    },
    background: {
      default: '#f5f5f5',
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
          background: 'linear-gradient(to right, #6a1b9a, #ab47bc)', // Purple gradient
          color: 'white'
        }}
      >
        <Box 
          sx={{ 
            flexGrow: 1, 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center', 
            alignItems: 'center' 
          }}
        >
          <Container maxWidth="md" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {/* Hero Section */}
            <Box sx={{ textAlign: 'center', mb: 4 }}>
              <Typography variant="h3" gutterBottom>
                Join the Exclusive Waitlist for Our Exciting New App!
              </Typography>
              <Typography variant="h6" paragraph>
                Be the first to experience the future of connecting with like-minded professionals.
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
            <Box sx={{ py: 8, color: 'white', flexGrow: 1 }}>
              <Container>
                <Grid container spacing={4} justifyContent="center">
                  <Grid item xs={12} md={4}>
                    <Paper sx={{ p: 3, textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: 'rgba(255, 255, 255, 0.8)', boxShadow: 3 }}>
                      <Typography variant="h6" gutterBottom>
                        Create
                      </Typography>
                      <Typography>
                        Create custom profile displaying your skills and interests.
                      </Typography>
                    </Paper>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Paper sx={{ p: 3, textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: 'rgba(255, 255, 255, 0.8)', boxShadow: 3 }}>
                      <Typography variant="h6" gutterBottom>
                        Explore
                      </Typography>
                      <Typography>
                        Swipe on other users' profiles to match with the perfect teammate/partner.
                      </Typography>
                    </Paper>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Paper sx={{ p: 3, textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: 'rgba(255, 255, 255, 0.8)', boxShadow: 3 }}>
                      <Typography variant="h6" gutterBottom>
                        Connect
                      </Typography>
                      <Typography>
                        Message and interact with real people with similar interests.
                      </Typography>
                    </Paper>
                  </Grid>
                </Grid>
              </Container>
            </Box>
          </Container>
        </Box>

        {/* Footer */}
        <Box sx={{ py: 2, backgroundColor: '#000', color: 'white', textAlign: 'center', width: '100%' }}>
          <Typography variant="body2">
            &copy; 2024 SyncUp. All rights reserved.
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
