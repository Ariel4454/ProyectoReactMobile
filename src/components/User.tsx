import React from 'react';
import { Box, Typography } from '@mui/material';
import '../assets/styles/User.css';

interface UserInfo {
  name: string;
  lastEntry: string;
}

interface UserProps {
  userInfo: UserInfo | null;
}

const User: React.FC<UserProps> = ({ userInfo }) => {
  if (!userInfo) return null;

  const { name, lastEntry } = userInfo;
  const firstInitial = name.charAt(0).toUpperCase(); 

  return (
    <Box className="userContainer">
      <Box className="userBox userIcon">{firstInitial}</Box>
      <Box className="userBox userName">
        <Typography variant="h5" className='titleUser'>Hola {name}</Typography>
        <Typography variant="body1" className='bodyContent'>{`Ultimo ingreso: ${lastEntry}`}</Typography>
      </Box>
    </Box>
  );
};

export default User;
