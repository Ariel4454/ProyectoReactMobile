import React from 'react';
import { Box, Typography } from '@mui/material';
import CustomSlider from './CustomSlider';
import '../assets/styles/Content.css';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


interface TitleInfo {
  titles: string[];
  options: string[];
}

interface InfoSlider {
  title: string;
  numberid: string;
  subtitle1: string;
  subtitle2: string;
}

interface InfoCuentas {
  title: string;
  description: string;
}

interface ContentProps {
  title: TitleInfo | null;
  infoSlider: InfoSlider | null;
  infoCuentas: InfoCuentas | null; 
}

const Content: React.FC<ContentProps> = ({ title, infoSlider, infoCuentas }) => {
  if (!title || !infoSlider) return null;

  return (
    <div className="contentContainer">
      <Box className="contentBody">
        <Box className="titleBox">
          <Typography variant="h5" className="title">{title.titles[0]}</Typography>
        </Box>
        <Box className="slider">
          <CustomSlider
            title={infoSlider.title}
            numberid={infoSlider.numberid}
            subtitle1={infoSlider.subtitle1}
            subtitle2={infoSlider.subtitle2}
          />
        </Box>
        <Box className="containerInfo">
          <Box className="infoContainer">
            <Box className="col1">
              <img src="./icons/billete-de-banco.png" alt="Custom Icon" className="customIcon" />
            </Box>
            <Box className="col2">
              <Typography variant="h6" className="titleInfo">{infoCuentas?.title}</Typography>
              <Typography variant="body2" className="textInfo">{infoCuentas?.description}</Typography>
            </Box>
            <Box className="col3">
              <ArrowForwardIosIcon className="arrowIcon" />
            </Box>
          </Box>
        </Box>
        <Box className="titleBox">
          <Typography variant="h5" className="title">{title.titles[3]}</Typography>
        </Box>
        <Box className="operationsContainer">
            <Box className="opCol1">
                <Box className="iconBox">
                    <img src="./icons/flechas.png" alt="Custom Icon" className="operationsIcon" />
                </Box>
                <Box className="textIcon">
                    <Typography variant="h6" className="operationsTitle">{title.options[0]}</Typography>
                </Box>
            </Box>
            <Box className="opCol1">
                <Box className="iconBox">
                    <img src="./icons/foco.png" alt="Custom Icon" className="operationsIcon" />
                </Box>
                <Box className="textIcon">
                    <Typography variant="h6" className="operationsTitle">{title.options[1]}</Typography>
                </Box>
            </Box>
            <Box className="opCol1">
                <Box className="iconBox">
                    <img src="./icons/tarjeta.png" alt="Custom Icon" className="operationsIcon" />
                </Box>
                <Box className="textIcon">
                    <Typography variant="h6" className="operationsTitle">{title.options[2]}</Typography>
                </Box>
            </Box>
            <Box className="opCol1">
                <Box className="iconBox notificationDot">
                    <img src="./icons/menu.png" alt="Custom Icon" className="operationsIcon" />
                </Box>
                <Box className="textIcon">
                    <Typography variant="h6" className="operationsTitle">{title.options[3]}</Typography>
                </Box>
            </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Content;
