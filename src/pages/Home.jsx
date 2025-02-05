import { useState } from 'react';
import {
    AppBar,
    Toolbar,
    Button,
    Typography,
    Container,
    Box,
    Paper,
    Grid,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText,
    useMediaQuery,
    useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useSelector } from 'react-redux';
import GoogleAuth from '../components/GoogleAuth';
import Counter from '../components/Counter';
import UserForm from '../components/UserForm';
import RichTextEditorComponent from '../components/RichTextEditor';
import { useNavigate } from 'react-router-dom';
import { animated, useSpring } from '@react-spring/web';

const Home = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md')); // Detect mobile screens
    const [drawerOpen, setDrawerOpen] = useState(false); // State for drawer
    const authenticated = useSelector((state) => state.user.authenticated);
    const userName = useSelector((state) => state.user.name);
    const navigate = useNavigate();

    const handleSignIn = () => {
        authenticated ? navigate('/dashboard') : alert('Please sign in to access the dashboard.');
    };

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    // Navigation items
    const navItems = [
        { label: 'Counter', href: '#counter', color: 'black' },
        { label: 'User Form', href: '#user-form' },
        { label: 'Rich Text Editor', href: '#rich-text-editor' },
        { label: 'Dashboard', onClick: handleSignIn },
    ];

    // Animation for AppBar
    const appBarAnimation = useSpring({
        from: { opacity: 0, transform: 'translateY(-20px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
        config: { tension: 300, friction: 20 },
    });

    // Animation for Drawer
    const drawerAnimation = useSpring({
        from: { transform: 'translateX(-100%)' },
        to: { transform: drawerOpen ? 'translateX(0%)' : 'translateX(-100%)' },
        config: { tension: 300, friction: 20 },
    });

    // Animation for Sections (Counter, User Form, Rich Text Editor)
    const sectionAnimation = useSpring({
        from: { opacity: 0, transform: 'translateY(20px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
        config: { tension: 300, friction: 20 },
    });

    return (
        <div>
            {/* AppBar with Fade-in Animation */}
            <animated.div style={appBarAnimation}>
                <AppBar position="sticky">
                    <Toolbar>
                        {/* Hamburger Menu for Mobile */}
                        {isMobile && (
                            <IconButton
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                onClick={toggleDrawer(true)}
                                sx={{ mr: 2 }}
                            >
                                <MenuIcon />
                            </IconButton>
                        )}

                        {/* App Title */}
                        <Typography variant="h6" sx={{ flexGrow: 1 }} fontSize={isMobile ? '12px' : 'normal'}>
                            Hello, {authenticated ? userName : 'User'}
                        </Typography>

                        {/* Navigation Items for Desktop */}
                        {!isMobile && (
                            <Box sx={{ display: 'flex' }}>
                                {navItems.map((item, index) => (
                                    <Button
                                        key={index}
                                        color="inherit"
                                        href={item.href}
                                        onClick={item.onClick}
                                        sx={{ mx: 1 }}
                                    >
                                        {item.label}
                                    </Button>
                                ))}
                                <GoogleAuth />
                            </Box>
                        )}

                        {/* Google Auth for Mobile */}
                        {isMobile && <GoogleAuth />}
                    </Toolbar>
                </AppBar>
            </animated.div>

            {/* Drawer with Slide-in Animation */}
            <animated.div style={drawerAnimation}>
                <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
                    <Box
                        sx={{ width: 250 }}
                        role="presentation"
                        onClick={toggleDrawer(false)}
                        onKeyDown={toggleDrawer(false)}
                    >
                        <List>
                            {navItems.map((item, index) => (
                                <ListItem
                                    key={index}
                                    button
                                    component="a"
                                    href={item.href}
                                    onClick={item.onClick}
                                >
                                    <ListItemText primary={item.label} />
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                </Drawer>
            </animated.div>

            {/* Main Content with Section Animations */}
            <Container>
                {/* Counter Section */}
                <animated.div style={sectionAnimation}>
                    <Grid container spacing={3} sx={{ pt: 10 }} id="counter">
                        <Grid item xs={12}>
                            <Paper elevation={3} sx={{ p: 2, borderRadius: 5 }}>
                                <Counter />
                            </Paper>
                        </Grid>
                    </Grid>
                </animated.div>

                {/* User Form Section */}
                <animated.div style={sectionAnimation}>
                    <Grid container spacing={3} sx={{ pt: 10 }} id="user-form">
                        <Grid item xs={12}>
                            <Paper elevation={3} sx={{ p: 2, my: 5, borderRadius: 5 }}>
                                <UserForm />
                            </Paper>
                        </Grid>
                    </Grid>
                </animated.div>

                {/* Rich Text Editor Section */}
                <animated.div style={sectionAnimation}>
                    <Grid container spacing={3} sx={{ my: 5 }}>
                        <Grid item xs={12} id="rich-text-editor">
                            <Paper elevation={3} sx={{ p: 2, borderRadius: 5 }}>
                                <RichTextEditorComponent />
                            </Paper>
                        </Grid>
                    </Grid>
                </animated.div>
            </Container>
        </div>
    );
};

export default Home;