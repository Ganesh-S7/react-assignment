import GoogleAuth from '../components/GoogleAuth';
import { Button, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Home = () => {
    const navigate = useNavigate();
    const authenticated = useSelector((state) => state.user.authenticated);

    return (
        <div>
            <Typography variant='h3' textAlign={'center'} margin={5}>Welcome to the Home Page</Typography>
           {!authenticated &&  <Typography variant='h6' textAlign={'center'} margin={2}>Sign in to continue to dashboard</Typography>}
            <GoogleAuth/>
            {authenticated && (
                 <Box sx={{ display: 'flex', justifyContent: 'center'}}>
                 <Button variant="contained" color="primary" onClick={() => navigate('/dashboard')}>
                     Go to Dashboard
                 </Button>
             </Box>
            )}
        </div>
    );
};

export default Home;
