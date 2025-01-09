import React from 'react';
import { Typography, Container, TextField, Button } from '@mui/material';

const Contact: React.FC = () => {
    return (
        <Container>
            <Typography variant="h2" gutterBottom>
                Contact
            </Typography>
            <Typography variant="body1">
                If you have any questions, feel free to reach out to us!
            </Typography>
            <TextField
                label="Your Email"
                type="email"
                variant="outlined"
                fullWidth
                margin="normal"
            />
            <TextField
                label="Your Message"
                multiline
                rows={4}
                variant="outlined"
                fullWidth
                margin="normal"
            />
            <Button variant="contained" color="primary">
                Send Message
            </Button>
        </Container>
    );
};

export default Contact;