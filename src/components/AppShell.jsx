
import * as React from 'react'
import { AppBar, Toolbar, Container, Box, Button, IconButton, Typography, Stack } from '@mui/material'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'

export default function AppShell({ children, mode, setMode }){
  const location = useLocation()
  const toggleMode = () => setMode(prev => prev === 'light' ? 'dark' : 'light')

  return (
    <Box sx={{ display:'flex', flexDirection: 'column', minHeight:'100vh', bgcolor:'background.default' }}>
      <Box component="header" sx={{ position:'sticky', top:0, zIndex: 2, boxShadow:1 }}>
        <AppBar position="sticky" color="transparent" enableColorOnDark sx={{ backdropFilter:'blur(8px)', bgcolor: 'background.paper' }}>
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow:1, fontWeight:800 }}>Nikhil Mannem</Typography>
            <Stack direction="row" spacing={1}>
              <Button component={RouterLink} to="/" color={location.pathname==='/'?'primary':'inherit'}>Home</Button>
              <Button component={RouterLink} to="/projects" color={location.pathname==='/projects'?'primary':'inherit'}>Projects</Button>
              <Button component={RouterLink} to="/blog" color={location.pathname==='/blog'?'primary':'inherit'}>Blog</Button>
              <Button component={RouterLink} to="/contact" color={location.pathname==='/contact'?'primary':'inherit'}>Contact</Button>
              <Button href="/resume.pdf" target="_blank" rel="noopener" color="secondary" variant="outlined">Resume</Button>
              <IconButton href="https://github.com/theNikhilMannem" target="_blank" rel="noopener" aria-label="GitHub"><GitHubIcon/></IconButton>
              <IconButton href="https://linkedin.com/in/theNikhilMannem" target="_blank" rel="noopener" aria-label="LinkedIn"><LinkedInIcon/></IconButton>
              <IconButton onClick={toggleMode} aria-label="Toggle theme">{mode==='dark'?<Brightness7Icon/>:<Brightness4Icon/>}</IconButton>
            </Stack>
          </Toolbar>
        </AppBar>
      </Box>
      <Container component="main" sx={{ py: 6, flexGrow:1 }}>
        {children}
      </Container>
      <Box component="footer" sx={{ py: 4, textAlign:'center', opacity:.7 }}>
        <Typography variant="body2">Built with ❤️ by Nikhil Mannem · Hosted on GitHub Pages</Typography>
      </Box>
    </Box>
  )
}
