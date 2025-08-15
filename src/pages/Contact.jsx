import * as React from 'react'
import { Box, TextField, Button, Typography, Stack, Alert, CircularProgress } from '@mui/material'

export default function Contact() {
  const [sent, setSent] = React.useState(false)
  const [error, setError] = React.useState(false)
  const [sending, setSending] = React.useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSent(false)
    setError(false)
    setSending(true)

    const formData = new FormData(e.target)
    try {
      const response = await fetch('https://formspree.io/f/xldlvopj', {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      })

      const data = await response.json()
      if (data.ok || response.ok) {
        setSent(true)
        e.target.reset()
        // Automatically hide success alert after 3 seconds
        setTimeout(() => setSent(false), 3000)
      } else {
        setError(true)
      }
    } catch (err) {
      setError(true)
    } finally {
      setSending(false)
    }
  }

  return (
    <Box>
      <Typography variant="h4" gutterBottom>Contact Me</Typography>

      {sent && <Alert severity="success" sx={{ mb: 2 }}>Thanks! Your message has been sent.</Alert>}
      {error && <Alert severity="error" sx={{ mb: 2 }}>Oops! Something went wrong.</Alert>}

      <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 600 }}>
        <Stack spacing={2}>
          <TextField name="name" label="Your name" required />
          <TextField type="email" name="email" label="Your email" required />
          <TextField name="message" label="Your message" required multiline rows={5} />
          <Button type="submit" color="secondary" variant="contained" disabled={sending}>
            {sending ? <CircularProgress size={24} color="inherit" /> : 'Send'}
          </Button>
        </Stack>
      </Box>
    </Box>
  )
}
