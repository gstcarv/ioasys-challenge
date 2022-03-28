import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from '../../pages/Login';
import Home from '../../pages/Home';
import CompanyDetails from '../../pages/CompanyDetails';

function BaseRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={<Login />} />

                <Route path='/' element={<Home />} />
                <Route path='/company/:id' element={<CompanyDetails />} />
            </Routes>
        </BrowserRouter>
    );
}

export default BaseRoutes;
