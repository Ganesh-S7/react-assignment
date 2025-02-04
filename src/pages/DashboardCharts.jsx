import { useSelector } from 'react-redux';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, PieChart, Pie, Cell } from 'recharts';
import { Box, Typography, Paper, Button, useMediaQuery, useTheme } from '@mui/material';
import GoogleAuth from '../components/GoogleAuth';
import { useNavigate } from 'react-router-dom';

const COLORS = ['#8884d8', '#82ca9d', '#ffc658'];

const DashboardCharts = () => {
    const user = useSelector((state) => state.user);
    const navigate = useNavigate();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Detect mobile screens

    // Mock data for user profile trends
    const barData = [
        { name: 'Total Users', value: user.authenticated ? 2 : 0 },
        { name: 'Active Users', value: user.authenticated ? 1 : 0 },
    ];

    const pieData = [
        { name: 'Authenticated', value: user.authenticated ? 1 : 0 },
        { name: 'Guest Users', value: user.authenticated ? 0 : 1 },
    ];

    return (
        user.authenticated ? (
            <>
                {/* Top Bar with Back Button and Welcome Message */}
                <Box sx={{ position: 'relative', p: 2 }}>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => navigate('/')}
                        sx={{ my: 1, position: 'absolute', width: isMobile ? '90px' : 'normal', fontSize: isMobile ? '7px' : 'normal' }}
                    >
                        Back to Home
                    </Button>
                    <Typography
                        variant={isMobile ? 'body1' : 'h6'}
                        sx={{
                            position: 'absolute',
                            right: '5%',
                            top: '50%',
                        }}
                    >
                        Welcome, {user.name}
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{
                            position: 'absolute',
                            right: '5%',
                            top: '170%',
                            transform: 'translateY(-50%)',
                            fontSize: isMobile ? 12 : 14,
                        }}
                    >
                        ID: {user.id}
                    </Typography>
                </Box>

                {/* Dashboard Content */}
                <Box sx={{ textAlign: 'center', mt: 5 }}>
                    <Typography variant={isMobile ? 'h5' : 'h3'} gutterBottom>
                        Dashboard
                    </Typography>
                    <Typography variant={isMobile ? 'body2' : 'h6'} gutterBottom sx={{ mb: isMobile ? 4 : 10 }}>
                        User Profile Trends
                    </Typography>

                    {/* Bar Chart */}
                    <Box sx={{ width: '100%', height: isMobile ? 200 : 300, margin: '0 auto' }}>
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={barData}>
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Bar dataKey="value" fill="#8884d8" />
                            </BarChart>
                        </ResponsiveContainer>
                    </Box>

                    {/* Pie Chart */}
                    <Box sx={{ width: '100%', height: isMobile ? 200 : 300, margin: '0 auto', mt: 4 }}>
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={pieData}
                                    dataKey="value"
                                    outerRadius={isMobile ? 60 : 100}
                                    fill="#82ca9d"
                                    label={({ name, value }) => `${name}: ${value}`}
                                >
                                    {pieData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                    </Box>
                </Box>
            </>
        ) : (
            <Paper elevation={3} sx={{ p: 4, textAlign: 'center', borderRadius: 3 }}>
                <Typography variant="h6" gutterBottom>
                    Please sign in to view the Dashboard.
                </Typography>
                <GoogleAuth />
            </Paper>
        )
    );
};

export default DashboardCharts;