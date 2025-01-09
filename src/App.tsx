import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Server from './components/Server';
import Contact from './components/Contact';
import Login from './components/Auth/Login';
import { Container, AppBar, Toolbar, Typography, Button } from '@mui/material';

const App: React.FC = () => {
    return (
        <Router>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" style={{ flexGrow: 1 }}>
                        My React App
                    </Typography>
                    <Button color="inherit" href="/">Home</Button>
                    <Button color="inherit" href="/aboutus">About Us</Button>
                    <Button color="inherit" href="/server">Server</Button>
                    <Button color="inherit" href="/contact">Contact</Button>
                    <Button color="inherit" href="/login">Login</Button>
                </Toolbar>
            </AppBar>
            <Container>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/aboutus" component={AboutUs} />
                    <Route path="/server" component={Server} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/login" component={Login} />
                </Switch>
            </Container>
        </Router>
    );
};

export default App;