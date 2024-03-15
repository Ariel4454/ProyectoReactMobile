// En tu archivo Footer.tsx
import React from 'react';
import { Box, Typography } from '@mui/material';
import '../assets/styles/Footer.css';

interface FooterProps {
    footerOptions: {
        options: string[]; 
    } | null;
}

const Footer: React.FC<FooterProps> = ({ footerOptions }) => {
    if (!footerOptions) {
        return null; 
    }

    return (
        <footer className="footerContainer">
            {footerOptions.options.map((option, index) => (
                <Box key={index} className="footerColumn">
                    <Box className="iconBoxFooter">
                        {index === 0 && <img src="./icons/home.png" alt="Icono" className="iconFooter iconActive" />}
                        {index === 1 && <img src="./icons/caja.png" alt="Icono" className="iconFooter" />}
                        {index === 2 && <img src="./icons/signo.png" alt="Icono" className="iconFooter" />}
                        {index === 3 && <img src="./icons/perfil.png" alt="Icono" className="iconFooter" />}
                    </Box>
                    <Box className="textBoxFooter">
                        <Typography variant="body2" className="footerText textActive">{option}</Typography>
                    </Box>
                </Box>
            ))}
        </footer>
    );
};

export default Footer;
