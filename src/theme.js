
import { createTheme } from '@mui/material/styles';

export const getTheme = (mode = 'light') => createTheme({
  palette: {
    mode,
    primary: { main: '#1565c0', light: '#5e92f3', dark: '#003c8f', contrastText: '#fff' },
    secondary: { main: '#d32f2f', light: '#ff6659', dark: '#9a0007', contrastText: '#fff' },
    background: { default: mode === 'light' ? '#f7f9fc' : '#0b1020', paper: mode === 'light' ? '#ffffff' : '#101730' }
  },
  shape: { borderRadius: 14 },
  typography: { fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif', h1:{fontWeight:800}, h2:{fontWeight:750}, h3:{fontWeight:700}, button:{ textTransform:'none', fontWeight:700 }},
  components: { MuiButton:{ defaultProps:{ size:'medium', variant:'contained' }, styleOverrides:{ root:{ borderRadius:12 }}}, MuiCard:{ styleOverrides:{ root:{ borderRadius:18 }}}}
});
