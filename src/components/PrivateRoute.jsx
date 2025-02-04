import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = () => {
    const authenticated = useSelector((state) => state.user.authenticated);
    return authenticated ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;