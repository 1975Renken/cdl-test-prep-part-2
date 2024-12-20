// src/services/auth.ts
import { api } from './api';
import { User } from '../types/user';
import { AUTH, ERRORS } from '../lib/constants';

interface AuthTokens {
  accessToken: string;
  refreshToken: string;
}

interface AuthState {
  user: User | null;
  tokens: AuthTokens | null;
  isAuthenticated: boolean;
  isPremium: boolean;
}

class AuthService {
  private state: AuthState = {
    user: null,
    tokens: null,
    isAuthenticated: false,
    isPremium: false,
  };

  constructor() {
    this.initializeFromStorage();
  }

  private initializeFromStorage() {
    try {
      const storedTokens = localStorage.getItem(AUTH.TOKEN_KEY);
      if (storedTokens) {
        this.state.tokens = JSON.parse(storedTokens);
        this.state.isAuthenticated = true;
      }
    } catch (error) {
      console.error('Error initializing auth state:', error);
      this.clearAuth();
    }
  }

  private setTokens(tokens: AuthTokens) {
    this.state.tokens = tokens;
    localStorage.setItem(AUTH.TOKEN_KEY, JSON.stringify(tokens));
  }

  private clearAuth() {
    this.state = {
      user: null,
      tokens: null,
      isAuthenticated: false,
      isPremium: false,
    };
    localStorage.removeItem(AUTH.TOKEN_KEY);
  }

  async login(email: string, password: string): Promise<User> {
    try {
      const { token: accessToken, user } = await api.login(email, password);
      
      this.setTokens({
        accessToken,
        refreshToken: '', // Add refresh token if your API provides one
      });
      
      this.state.user = user;
      this.state.isAuthenticated = true;
      this.state.isPremium = user.isPremium;

      return user;
    } catch (error) {
      throw new Error(ERRORS.AUTH.INVALID_CREDENTIALS);
    }
  }

  async register(name: string, email: string, password: string): Promise<User> {
    try {
      const { token: accessToken, user } = await api.register({
        name,
        email,
        password,
      });

      this.setTokens({
        accessToken,
        refreshToken: '', // Add refresh token if your API provides one
      });

      this.state.user = user;
      this.state.isAuthenticated = true;
      this.state.isPremium = user.isPremium;

      return user;
    } catch (error) {
      throw new Error(ERRORS.AUTH.REGISTRATION_FAILED);
    }
  }

  async refreshToken(): Promise<void> {
    if (!this.state.tokens?.refreshToken) {
      throw new Error(ERRORS.AUTH.SESSION_EXPIRED);
    }

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/auth/refresh-token`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          refreshToken: this.state.tokens.refreshToken,
        }),
      });

      if (!response.ok) {
        throw new Error(ERRORS.AUTH.SESSION_EXPIRED);
      }

      const { accessToken, refreshToken } = await response.json();
      this.setTokens({ accessToken, refreshToken });
    } catch (error) {
      this.logout();
      throw new Error(ERRORS.AUTH.SESSION_EXPIRED);
    }
  }

  logout() {
    this.clearAuth();
  }

  async resetPassword(email: string): Promise<void> {
    await api.resetPassword(email);
  }

  async updateProfile(userData: Partial<User>): Promise<User> {
    if (!this.state.tokens?.accessToken) {
      throw new Error(ERRORS.AUTH.UNAUTHORIZED);
    }

    try {
      const updatedUser = await api.updateProfile(
        this.state.tokens.accessToken,
        userData
      );
      this.state.user = updatedUser;
      return updatedUser;
    } catch (error) {
      throw new Error('Failed to update profile');
    }
  }

  // Auth state getters
  getUser(): User | null {
    return this.state.user;
  }

  getAccessToken(): string | null {
    return this.state.tokens?.accessToken ?? null;
  }

  isAuthenticated(): boolean {
    return this.state.isAuthenticated;
  }

  isPremiumUser(): boolean {
    return this.state.isPremium;
  }

  // Token validation
  isTokenExpired(): boolean {
    const token = this.state.tokens?.accessToken;
    if (!token) return true;

    try {
      const [, payload] = token.split('.');
      const decodedPayload = JSON.parse(atob(payload));
      return decodedPayload.exp * 1000 < Date.now();
    } catch {
      return true;
    }
  }

  // Helper method to get auth headers
  getAuthHeaders(): HeadersInit {
    const token = this.getAccessToken();
    return token
      ? {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        }
      : {
          'Content-Type': 'application/json',
        };
  }

  // Event listeners for auth state changes
  private listeners: ((state: AuthState) => void)[] = [];

  subscribe(listener: (state: AuthState) => void) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  private notifyListeners() {
    this.listeners.forEach(listener => listener(this.state));
  }
}

export const auth = new AuthService();