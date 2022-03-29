import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { UserStorage } from '../../../utils/storage/userStorage';

const PrivateRoute = () => {
    const auth = UserStorage.getLoginInformation();
    return auth ? <Outlet /> : <Navigate to='/login' />;
};

export default PrivateRoute;
