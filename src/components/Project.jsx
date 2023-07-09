import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import projects from './projects.json';
import { CardActionArea } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

const cards = projects;

export default function Portfolio() {

  return (
  <>
    {cards.map((card, index) => (
      <Grid item key={card} xs={12} sm={6} md={4}>
        <CardActionArea href={projects[index].github} target='_blank'>
          <Card
            sx={{ height: '100%', display: 'flex', flexDirection: 'column'}}
          >
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="h5" component="h2">
                <GitHubIcon /> {projects[index].name}
              </Typography>

            </CardContent>
            <CardMedia
              component="div"
              sx={{
                // 16:9
                pt: '76.25%',
              }}
              image={projects[index].img}
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography>
                Click to view on GitHub!
              </Typography>
            </CardContent>
          </Card>
        </CardActionArea>
      </Grid>
    ))}
  </>
  );
}