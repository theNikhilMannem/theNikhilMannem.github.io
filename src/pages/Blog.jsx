
import * as React from 'react'
import ReactMarkdown from 'react-markdown'
import { Accordion, AccordionSummary, AccordionDetails, Typography, Box } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const modules = import.meta.glob('../posts/*.md', { as: 'raw' })

export default function Blog(){
  const [posts, setPosts] = React.useState([])

  React.useEffect(()=>{
    (async () => {
      const loaded = await Promise.all(
        Object.entries(modules).map(async ([path, loader]) => {
          const content = await loader()
          const filename = path.split('/').pop().replace('.md','')
          return { path, filename, content }
        })
      )
      loaded.sort((a,b)=> b.filename.localeCompare(a.filename))
      setPosts(loaded)
    })()
  }, [])

  return (
    <Box>
      <Typography variant="h4" gutterBottom>Blog</Typography>
      {posts.length === 0 ? <Typography>Loading posts…</Typography> : null}
      {posts.map((p, i)=>(
        <Accordion key={i} defaultExpanded={i===0} sx={{ mb: 2 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">{p.filename}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ReactMarkdown>{p.content}</ReactMarkdown>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  )
}
