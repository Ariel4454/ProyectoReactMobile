import React from 'react';
import { Box, Typography } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility'; 
import '../assets/styles/SliderBox.css'; 

interface SliderBoxProps {
  title: string;
  numberid: string;
  subtitle1: string;
  subtitle2?: string; 
}

const SliderBox: React.FC<SliderBoxProps> = ({ title, numberid, subtitle1, subtitle2 }) => {
  return (
    <Box className="sliderBox">
        <Box className="rowInfo">
            <Box className="column1">
                <Typography variant="h6" className="title" >{title}</Typography>
                <Typography variant="body1" className="numberid">Nro. {numberid}</Typography>
            </Box>
            <Box className="column2">
                <VisibilityIcon className="visibilityIcon" /> {/* Icono de visibilidad */}
                <Typography variant="body2" className="subtitle">{subtitle1}</Typography>
            </Box>
        </Box>
        <Box className="rowButton">
            {subtitle2 && <Typography variant="body2" className="subtitle2">{subtitle2}</Typography>}
        </Box>
    </Box>
  );
};

export default SliderBox;
