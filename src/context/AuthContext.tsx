import React, { createContext, useContext, useState } from 'react';
import { login as loginService, logout as logoutService, isAuthenticated as checkAuth } from '../services/authService';

interface AuthContextType {
    user: any;
    login: (username: string, password: string) => Promise<void>;
    logout: () => void;
    isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState<any>(null);

    const login = async (username: string, password: string) => {
        const userData = await loginService(username, password);
        setUser(userData);
    };

    const logout = () => {
        logoutService();
        setUser(null);
    };

    const isAuthenticated = !!user;

    return (
        <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};