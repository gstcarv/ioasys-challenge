import { createContext, useContext, useState } from 'react';
import { UserService } from '../services/user';
import { UserStorage } from '../utils/storage/userStorage';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    async function signIn(email, password) {
        const userLogin = await UserService.login(email, password);

        UserStorage.saveLoginInformation(userLogin);
        setUser(userLogin.data);

        return Promise.resolve(userLogin);
    }

    return <AuthContext.Provider value={{ user, signIn }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
