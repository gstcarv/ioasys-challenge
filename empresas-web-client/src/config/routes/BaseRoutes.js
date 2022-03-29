import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

import Login from '../../pages/Login';
import Home from '../../pages/Home';
import EnterpriseDetails from '../../pages/EnterpriseDetails';

function BaseRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={<Login />} />

                <Route path='/' element={<PrivateRoute />}>
                    <Route path='/' element={<Home />} />
                    <Route path='/enterprise/:id' element={<EnterpriseDetails />} />
                </Route>

                <Route path='*' element={<Navigate to='/' />} />
            </Routes>
        </BrowserRouter>
    );
}

export default BaseRoutes;
