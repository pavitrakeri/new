const users = [
    { username: 'admin', password: 'password', role: 'admin' },
    { username: 'user', password: 'password', role: 'user' }
];

export const login = async (username: string, password: string) => {
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        return { username: user.username, role: user.role };
    } else {
        throw new Error('Invalid credentials');
    }
};

export const logout = () => {
    // Mock logout service
};

export const isAuthenticated = () => {
    // Mock authentication check
    return true;
};