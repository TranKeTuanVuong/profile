import React from 'react';
import { BrowserRouter as Router, Route,Routes ,Navigate} from 'react-router-dom';
import  Profile  from '../pages/Profile';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Profile />} />
            </Routes>
        </Router>
    )
}

export default AppRoutes;