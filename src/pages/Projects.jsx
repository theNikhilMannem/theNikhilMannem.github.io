
import * as React from 'react'
import { Grid, Card, CardContent, CardActions, Typography, Button } from '@mui/material'

const data = [
  { title: 'React GitHub Finder', description: 'A tool to search and explore GitHub users.', link: 'https://github.com/theNikhilMannem/github-finder' },
  { title: 'iOS Puppy App', description: 'WIP app to track pet habits and logs.', link: 'https://github.com/theNikhilMannem' }
]

export default function Projects(){
  return (
    <div>
      <Typography variant="h4" gutterBottom>Projects</Typography>
      <Grid container spacing={3}>
        {data.map((p, idx)=>(
          <Grid item xs={12} md={6} key={idx}>
            <Card>
              <CardContent>
                <Typography variant="h6">{p.title}</Typography>
                <Typography variant="body2" sx={{ opacity:.8 }}>{p.description}</Typography>
              </CardContent>
              <CardActions>
                <Button href={p.link} target="_blank" rel="noopener">View on GitHub</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}
