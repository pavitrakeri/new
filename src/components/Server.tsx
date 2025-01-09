import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { Typography, Container, TextField, Button } from '@mui/material';

const Server: React.FC = () => {
    const { user } = useAuth();
    const [serverContent, setServerContent] = useState<string>('');
    const [image, setImage] = useState<string | null>(null);

    useEffect(() => {
        const savedContent = localStorage.getItem('serverContent');
        const savedImage = localStorage.getItem('serverImage');
        if (savedContent) {
            setServerContent(savedContent);
        }
        if (savedImage) {
            setImage(savedImage);
        }
    }, []);

    const handleUpdateContent = () => {
        localStorage.setItem('serverContent', serverContent);
        if (image) {
            localStorage.setItem('serverImage', image);
        }
        console.log('Server content updated:', serverContent);
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <Container>
            <Typography variant="h2" gutterBottom>
                Server Page
            </Typography>
            <Typography variant="body1">Welcome, {user ? user.username : 'Guest'}</Typography>
            <Typography variant="body1">{serverContent}</Typography>
            {image && <img src={image} alt="Server" style={{ maxWidth: '100%', marginTop: '20px' }} />}
            {user && user.role === 'admin' && (
                <>
                    <TextField
                        label="Server Content"
                        multiline
                        rows={4}
                        value={serverContent}
                        onChange={(e) => setServerContent(e.target.value)}
                        variant="outlined"
                        fullWidth
                        margin="normal"
                    />
                    <input
                        accept="image/*"
                        type="file"
                        onChange={handleImageChange}
                        style={{ marginTop: '20px' }}
                    />
                    <Button variant="contained" color="primary" onClick={handleUpdateContent} style={{ marginTop: '20px' }}>
                        Update Content
                    </Button>
                </>
            )}
        </Container>
    );
};

export default Server;