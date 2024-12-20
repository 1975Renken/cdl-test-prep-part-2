// src/hooks/useAuth.ts
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

interface LoginCredentials {
  email: string;
  password: string;
}

interface RegisterCredentials extends LoginCredentials {
  name: string;
}

interface AuthError {
  message: string;
  code?: string;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  const {
    user,
    token,
    isAuthenticated,
    isLoading,
    error,
    login: baseLogin,
    logout: baseLogout,
    register: baseRegister,
    resetPassword: baseResetPassword,
    updateProfile: baseUpdateProfile,
  } = context;

  // Enhanced login with better error handling and types
  const login = async ({ email, password }: LoginCredentials) => {
    try {
      await baseLogin(email, password);
    } catch (err) {
      const error = err as AuthError;
      throw new Error(error.message || 'Login failed');
    }
  };

  // Enhanced register with better error handling and types
  const register = async ({ email, password, name }: RegisterCredentials) => {
    try {
      await baseRegister(email, password, name);
    } catch (err) {
      const error = err as AuthError;
      throw new Error(error.message || 'Registration failed');
    }
  };

  // Enhanced logout with cleanup
  const logout = () => {
    baseLogout();
    // Additional cleanup if needed
    window.location.href = '/login'; // Redirect to login page
  };

  // Enhanced reset password with better error handling
  const resetPassword = async (email: string) => {
    try {
      await baseResetPassword(email);
    } catch (err) {
      const error = err as AuthError;
      throw new Error(error.message || 'Password reset failed');
    }
  };

  // Enhanced update profile with better type safety
  const updateProfile = async (userData: Partial<typeof user>) => {
    try {
      await baseUpdateProfile(userData);
    } catch (err) {
      const error = err as AuthError;
      throw new Error(error.message || 'Profile update failed');
    }
  };

  // Utility functions
  const isTokenExpired = () => {
    if (!token) return true;
    try {
      const [, payload] = token.split('.');
      const decodedPayload = JSON.parse(atob(payload));
      return decodedPayload.exp * 1000 < Date.now();
    } catch {
      return true;
    }
  };

  const getAuthorizationHeader = () => {
    return token ? `Bearer ${token}` : '';
  };

  const isPremiumUser = () => {
    return user?.isPremium ?? false;
  };

  return {
    user,
    token,
    isAuthenticated,
    isLoading,
    error,
    login,
    logout,
    register,
    resetPassword,
    updateProfile,
    // Utility functions
    isTokenExpired,
    getAuthorizationHeader,
    isPremiumUser,
    // Type guards
    isLoggedIn: !!user,
    isInitialized: !isLoading,
  };
}

// Example usage with type safety
const authResult = useAuth();
if (authResult.isLoggedIn) {
  // TypeScript knows user is not null here
  console.log(authResult.user.name);
}