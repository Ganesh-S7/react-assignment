import { useSelector } from 'react-redux';
import { Container, Typography, Grid, Paper } from '@mui/material';
import GoogleAuth from '../components/GoogleAuth';
import Counter from '../components/Counter';
import UserForm from '../components/UserForm';
import RichTextEditorComponent from '../components/RichTextEditor';
import DashboardCharts from '../components/DashboardCharts';

const Dashboard = () => {
    const user = useSelector((state) => state.user);

    return (
        <Container maxWidth="lg" >
            <Typography variant="h4" sx={{ textAlign: 'center', my: 3 }}>
                Dashboard
            </Typography>

            <Paper elevation={3} sx={{ p: 2, mb: 3,borderRadius:3 }} >
                <GoogleAuth />
                <Typography variant="h6" sx={{ px: 2 }}>User: {user.name || 'Not Logged In'}</Typography>
            </Paper>

            <Grid container spacing={3}>
                {/* Counter Component */}
                <Grid item xs={12} md={6}>
                    <Paper elevation={3} sx={{ p: 2 }}>
                        <Counter />
                    </Paper>
                </Grid>

                {/* Rich Text Editor */}
                <Grid item xs={12} md={6}>
                    <Paper elevation={3} sx={{ p: 2 }}>
                        <RichTextEditorComponent />
                    </Paper>
                </Grid>

                {/* User Form */}
                <Grid item xs={12} >
                    <Paper elevation={3} sx={{ p: 2 }}>
                        <UserForm />
                    </Paper>
                </Grid>

                {/* User Profile Data Charts */}
                <Grid item xs={12}>
                    <Paper elevation={3} sx={{ p: 2 }}>
                        <DashboardCharts />
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Dashboard;

