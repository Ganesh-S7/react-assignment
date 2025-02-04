import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashbord';
import PrivateRoute from './components/PrivateRoute';
import { GoogleOAuthProvider } from '@react-oauth/google';

const App = () => {
    return (
        <GoogleOAuthProvider clientId="950167146295-rpbj3ra65d1rlucnbkah5f3imv9kkoec.apps.googleusercontent.com">
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route element={<PrivateRoute />}>
                        <Route path="/Dashboard" element={<Dashboard />} />
                    </Route>
                </Routes>
            </Router>
        </GoogleOAuthProvider>
    );
};

export default App;
