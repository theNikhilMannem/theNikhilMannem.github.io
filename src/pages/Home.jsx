
import * as React from 'react'
import { Box, Typography, Stack, Button } from '@mui/material'
import { motion } from 'framer-motion'
import '../styles/gradient.css'

export default function Home(){
  return (
    <Box>
      <Box className="gradient-bg" sx={{ borderRadius: 3, mb: 4, overflow:'hidden', position:'relative' }}>
        <svg xmlns="http://www.w3.org/2000/svg"><defs><filter id="goo"><feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"/><feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo"/><feBlend in="SourceGraphic" in2="goo" /></filter></defs></svg>
        <div className="gradients-container">
          <div className="g1" />
          <div className="g2" />
          <div className="g3" />
          <div className="g4" />
          <div className="g5" />
          <div className="interactive" />
        </div>
        <div className="hero-overlay">
          <Stack spacing={2} alignItems="center">
            <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{duration:.6}}>
              <Typography variant="h2" sx={{ color:'common.white', textShadow:'0 6px 24px rgba(0,0,0,.25)' }}>
                Full‑stack Dev · React wizard
              </Typography>
            </motion.div>
            <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.2}}>
              <Typography variant="h6" sx={{ color:'common.white', opacity:.9 }}>
                Spring Boot padawan · iOS newbie · Labrador dad 🐶
              </Typography>
            </motion.div>
            <Stack direction="row" spacing={2} sx={{ pt: 2 }}>
              <Button size="large" color="primary" variant="contained" href="#projects">See Projects</Button>
              <Button size="large" color="secondary" variant="contained" href="/blog">Read Blog</Button>
            </Stack>
          </Stack>
        </div>
      </Box>

      <Box id="about" sx={{ maxWidth: 900, mx:'auto' }}>
        <Typography variant="h4" gutterBottom>About Me</Typography>
        <Typography variant="body1">
          I’m passionate about building things that matter. From React dashboards to Spring Boot services
          and now diving into iOS dev — I’m all in. Proud dad to a Labrador named Dollar 🐶.
        </Typography>
      </Box>
    </Box>
  )
}
