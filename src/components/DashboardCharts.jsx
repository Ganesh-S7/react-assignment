// Import necessary modules and components
import { useSelector } from 'react-redux';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, PieChart, Pie, Cell } from 'recharts';
import { Box, Typography } from '@mui/material';

const COLORS = ['#8884d8', '#82ca9d', '#ffc658'];

const DashboardCharts = () => {
    const user = useSelector((state) => state.user);

    // Mock data for user profile trends
    const barData = [
        { name: 'Total Users', value: user.authenticated ? 5 : 0 },
        { name: 'Active Users', value: user.authenticated ? 1 : 0 },
    ];

    const pieData = [
        { name: 'Authenticated', value: user.authenticated ? 1 : 0 },
        { name: 'Guest Users', value: user.authenticated ? 0 : 1 },
    ];

    return (
        <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h6" gutterBottom>
                User Profile Trends
            </Typography>

            {/* Bar Chart */}
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={barData}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="value" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>

            {/* Pie Chart */}
            <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                    <Pie data={pieData} dataKey="value" outerRadius={100} fill="#82ca9d" label>
                        {pieData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index]} />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </Box>
    );
};

export default DashboardCharts;
