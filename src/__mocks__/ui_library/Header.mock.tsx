import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export interface HeaderProps {
  onLogout: () => void;
  title?: string;
}

export const Header = ({ onLogout, title = 'Logistics' }: HeaderProps) => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        {title}
      </Typography>
      <Box>
        <Button color="inherit" variant="text" onClick={onLogout}>
          Logout
        </Button>
      </Box>
    </Toolbar>
  </AppBar>
);
