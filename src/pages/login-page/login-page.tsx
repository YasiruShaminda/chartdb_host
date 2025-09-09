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
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-blue-200">
            <div className="w-full max-w-md p-8 flex flex-col items-center bg-white rounded-xl shadow-lg animate-fade-in">
                <img
                    src={ChartDBLogo}
                    alt="ChartDB Logo"
                    className="mb-4 h-12 drop-shadow"
                />
                <h2 className="mb-2 text-2xl font-bold text-blue-700">
                    Welcome to ChartDB
                </h2>
                <p className="mb-6 text-center text-gray-500">
                    Sign in to continue to your dashboard
                </p>
                <div className="w-full flex flex-col gap-4">
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full rounded-lg border px-4 py-2 transition-all focus:outline-none focus:ring-2 focus:ring-blue-400"
                        autoFocus
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full rounded-lg border px-4 py-2 transition-all focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    {error && (
                        <div className="text-center text-sm text-red-500 animate-shake">
                            {error}
                        </div>
                    )}
                    <button
                        onClick={handleLogin}
                        className="mt-2 w-full rounded-lg bg-blue-500 py-2 font-bold text-white shadow transition-all duration-150 hover:bg-blue-600 active:scale-95"
                    >
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
};
