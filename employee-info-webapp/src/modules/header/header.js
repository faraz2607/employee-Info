import * as React from 'react';
import  { useState }  from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from "@material-ui/styles";
import PricingDialog from '../dialog/pricingDialog';

const useStyles = makeStyles((theme) => ({
  subToolbar: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  }
}))

export default function ButtonAppBar() {
  const classes = useStyles();
  const [isCustomDialog, setCustomDialog] = useState(false)
  const handleOpenDialog = () => {
    setCustomDialog(true)
  }
  const handleCloseCustomDialog = () => {
    setCustomDialog(false)
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{background: "#00bcff"}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <PricingDialog 
            open={isCustomDialog} 
            close={handleCloseCustomDialog}
          />
          <div className={classes.subToolbar}>
            <Button color="inherit" onClick={handleOpenDialog}>Pricing</Button>
            <Button color="inherit">Login</Button>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}