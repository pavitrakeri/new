import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useHistory } from 'react-router-dom';
import { Container, TextField, Button, Typography, Alert } from '@mui/material';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const { login } = useAuth();
    const history = useHistory();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await login(email, password);
            history.push('/server');
        } catch (err) {
            setError('Invalid username or password');
        }
    };

    return (
        <Container>
            <Typography variant="h2" gutterBottom>
                Login
            </Typography>
            {error && <Alert severity="error">{error}</Alert>}
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Username"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    variant="outlined"
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    variant="outlined"
                    fullWidth
                    margin="normal"
                />
                <Button type="submit" variant="contained" color="primary">
                    Login
                </Button>
            </form>
        </Container>
    );
};

export default Login;