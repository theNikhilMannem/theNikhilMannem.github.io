
import * as React from 'react'
import { Box, TextField, Button, Typography, Stack, Alert } from '@mui/material'

export default function Contact(){
  const [sent, setSent] = React.useState(false)
  return (
    <Box>
      <Typography variant="h4" gutterBottom>Contact Me</Typography>
      {sent && <Alert severity="success" sx={{ mb:2 }}>Thanks! Your message has been sent.</Alert>}
      <Box component="form" action="https://formspree.io/f/xpzvgyzo" method="POST" onSubmit={()=>setSent(true)} sx={{ maxWidth: 600 }}>
        <Stack spacing={2}>
          <TextField name="name" label="Your name" required />
          <TextField type="email" name="email" label="Your email" required />
          <TextField name="message" label="Your message" required multiline rows={5} />
          <Button type="submit" color="secondary" variant="contained">Send</Button>
        </Stack>
      </Box>
    </Box>
  )
}
