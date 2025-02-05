import { useDispatch, useSelector } from 'react-redux';
import { setUser, setAuth } from '../context/store';
import { jwtDecode } from 'jwt-decode';
import { GoogleLogin, googleLogout } from '@react-oauth/google';
import { Button, Box, useMediaQuery, useTheme } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout'; 

const GoogleAuth = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Detect mobile screens

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
        <div>
            {user.authenticated ? (
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: isMobile ? 'column' : 'row', 
                        alignItems: 'center',
                        gap: 2,
                    }}
                >
                   

                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={handleLogout}
                        sx={{
                            width: isMobile ? '50px' : 'auto',
                            fontSize: isMobile ? '8px' : '14px', 
                            padding: isMobile ? '4px 8px' : '6px 16px', 
                            minWidth: 'unset', 
                        }}
                    >
                        {isMobile ? <LogoutIcon fontSize="small" /> : 'Logout'} 
                    </Button>
                </Box>
            ) : (
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        width: isMobile ? '100%' : 'auto', 
                    }}
                >
                    <GoogleLogin
                        onSuccess={handleSuccess}
                        onError={() => console.log('Login Failed')}
                        size="medium"
                        width={isMobile ? '100%' : '150px'} 
                    />
                </Box>
            )}
        </div>
    );
};

export default GoogleAuth;