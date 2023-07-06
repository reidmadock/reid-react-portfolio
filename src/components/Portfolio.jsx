import * as React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Project from './Project';

const defaultTheme = createTheme();

export default function Portfolio() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <main>
        <Typography gutterBottom variant="h5" component="h2">
          Click a project to view it on GitHub 
        </Typography>
        {/* Hero unit */}
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {/* Bring in projects from project component */}
            <Project />
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}