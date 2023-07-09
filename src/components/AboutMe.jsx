import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const defaultTheme = createTheme();

export default function SignUp() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="md" >
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
            <Paper sx={ {padding: '.3rem' }}>
                <Paper elevation={3} sx={{ margin: 1, backgroundColor: '#93b5c6', borderRadius: '16px', padding: '16px', minWidth: 'lg'}}>
                <Typography component="h2" variant="h5" mb={".5rem"} fontSize={'2rem'}>
                    About Me
                </Typography>

                </Paper>
                <Paper elevation={3} sx={{ margin: 1, backgroundColor: '#93b5c6', borderRadius: '16px', padding: '16px', minWidth: 'lg'}}>

                <Typography component="p" variant="p1" fontSize={'1.2rem'}>
                    Hi my name is Reid, and I am a developer. I like making different kinds of projects in all kinds of languages.
                    I am mainly focused on web development at the moment, but I enjoy tickering with all kinds of different languages, libraries, and technologies.
                </Typography>
                </Paper>
            </Paper>
        </Box>
      </Container>
    </ThemeProvider>
  );
}