import React from 'react';
import { Typography, Container } from '@mui/material';

const AboutUs: React.FC = () => {
    return (
        <Container>
            <Typography variant="h2" gutterBottom>
                About Us
            </Typography>
            <Typography variant="body1">
                Welcome to our application! We are dedicated to providing the best service possible.
            </Typography>
            <Typography variant="body1">
                Our team is composed of experienced professionals who are passionate about technology and innovation.
            </Typography>
        </Container>
    );
};

export default AboutUs;