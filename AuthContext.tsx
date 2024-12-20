// src/context/AuthContext.tsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { api } from '../services/api';
import { User } from '../types/user';

interface AuthContextType {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (email: string, password: string, name: string) => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  updateProfile: (userData: Partial<User>) => Promise<void>;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(() => 
    localStorage.getItem('authToken')
  );
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Check for existing session on mount
  useEffect(() => {
    const initializeAuth = async () => {
      const storedToken = localStorage.getItem('authToken');
      if (storedToken) {
        try {
          const userData = await api.getUserProfile();
          setUser(userData);
          setToken(storedToken);
        } catch (err) {
          console.error('Failed to fetch user profile:', err);
          localStorage.removeItem('authToken');
          setToken(null);
          setUser(null);
        }
      }
      setIsLoading(false);
    };

    initializeAuth();
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await api.login(email, password);
      localStorage.setItem('authToken', response.token);
      setToken(response.token);
      const userData = await api.getUserProfile();
      setUser(userData);
    } catch (err) {
      setError('Invalid credentials');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    setToken(null);
    setUser(null);
  };

  const register = async (email: string, password: string, name: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await api.register({ email, password, name });
      localStorage.setItem('authToken', response.token);
      setToken(response.token);
      const userData = await api.getUserProfile();
      setUser(userData);
    } catch (err) {
      setError('Registration failed');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const resetPassword = async (email: string) => {
    setIsLoading(true);
    setError(null);
    try {
      await api.resetPassword(email);
    } catch (err) {
      setError('Password reset failed');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const updateProfile = async (userData: Partial<User>) => {
    setIsLoading(true);
    setError(null);
    try {
      const updatedUser = await api.updateProfile(userData);
      setUser(updatedUser);
    } catch (err) {
      setError('Profile update failed');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const value = {
    user,
    token,
    isAuthenticated: !!user,
    isLoading,
    error,
    login,
    logout,
    register,
    resetPassword,
    updateProfile
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Types file needed (src/types/user.ts):
export interface User {
  id: string;
  email: string;
  name: string;
  isPremium: boolean;
  createdAt: string;
  updatedAt: string;
}