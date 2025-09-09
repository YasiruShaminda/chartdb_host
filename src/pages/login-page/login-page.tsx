import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ChartDBLogo from '@/assets/logo-light.png';

export const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        if (username === 'admin' && password === 'password') {
            localStorage.setItem('isAuthenticated', 'true');
            navigate('/');
        } else {
            setError('Invalid credentials');
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-100 via-white to-blue-200">
            <div className="w-full max-w-md rounded-xl bg-white shadow-lg p-8 flex flex-col items-center animate-fade-in">
                <img src={ChartDBLogo} alt="ChartDB Logo" className="h-12 mb-4 drop-shadow" />
                <h2 className="text-2xl font-bold mb-2 text-blue-700">Welcome to ChartDB</h2>
                <p className="mb-6 text-gray-500 text-center">Sign in to continue to your dashboard</p>
                <div className="w-full flex flex-col gap-4">
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                        autoFocus
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                    />
                    {error && (
                        <div className="text-red-500 text-sm text-center animate-shake">{error}</div>
                    )}
                    <button
                        onClick={handleLogin}
                        className="mt-2 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded-lg shadow transition-all duration-150 active:scale-95"
                    >
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
};
