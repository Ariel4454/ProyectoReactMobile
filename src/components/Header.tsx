import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import '../assets/styles/Header.css'; 

interface InfoHeader {
  company: string;
}

interface HeaderProps {
  infoHeader: InfoHeader | null;
}

const Header: React.FC<HeaderProps> = ({ infoHeader }) => {
  return (
    <AppBar position="static" className="header">
      <Toolbar>
        <img src="./images/Banco-Pichincha.png" alt="Logo" className="logo" />
        <Typography variant="h6" className="title">
          {infoHeader && infoHeader.company}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
