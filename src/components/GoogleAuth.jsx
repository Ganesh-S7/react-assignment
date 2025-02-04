import { useDispatch, useSelector } from 'react-redux';
import { setUser, setAuth } from '../context/store';
import { jwtDecode } from 'jwt-decode';
import { GoogleLogin, googleLogout } from '@react-oauth/google';
import { Button, Box } from '@mui/material';

const GoogleAuth = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);

    const handleSuccess = (response) => {
        const decodedUser = jwtDecode(response.credential);
        dispatch(setUser({ name: decodedUser.name, email: decodedUser.email, id: decodedUser.sub }));
        dispatch(setAuth(true));
    };

    const handleLogout = () => {
        googleLogout();
        dispatch(setUser({ name: '', email: '', id: '', authenticated: false }));
    };

    return (
        <div >
            {user.authenticated ? (
                <>
                <Box sx={{margin:2}}>
                    <p>Welcome, {user.name}!</p>
                    <Button variant="contained" color="secondary" onClick={handleLogout}>
                        Logout
                    </Button>
                  </Box>
                </>
            ) : (
              <Box sx={{ display: 'flex', justifySelf: 'center', gap: 2, marginTop: 2 }}>
                <GoogleLogin width='500px' onSuccess={handleSuccess} onError={() => console.log('Login Failed')} />
              </Box>
            )}
        </div>
    );
};

export default GoogleAuth;
