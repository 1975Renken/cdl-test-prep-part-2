import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { LogIn, UserPlus, ArrowRight } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { api } from '../services/api';

interface LoginFormData {
  email: string;
  password: string;
}

interface SocialLoadingState {
  google: boolean;
  facebook: boolean;
}

export default function LoginPage() {
  const navigate = useNavigate();
  
  // Form state declarations
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: ''
  });

  // Error states
  const [errors, setErrors] = useState<LoginFormData>({
    email: '',
    password: ''
  });

  // Loading states
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSocialLoading, setSocialLoading] = useState<SocialLoadingState>({
    google: false,
    facebook: false
  });

  // Additional states
  const [rememberMe, setRememberMe] = useState<boolean>(false);

  // Form validation
  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      email: '',
      password: ''
    };

    if (!formData.email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      isValid = false;
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
      isValid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Handle regular login
  const handleLogin = async () => {
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    try {
      // Login logic will go here
      // For now, just navigate to dashboard
      navigate('/dashboard');
    } catch (error) {
      setErrors({
        email: 'Invalid credentials',
        password: 'Invalid credentials'
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Handle social logins
  const handleGoogleLogin = async () => {
    setSocialLoading((prev) => ({ ...prev, google: true }));
    try {
      // Google login logic will go here
      navigate('/dashboard');
    } catch (error) {
      // Handle error
    } finally {
      setSocialLoading((prev) => ({ ...prev, google: false }));
    }
  };

  const handleFacebookLogin = async () => {
    setSocialLoading((prev) => ({ ...prev, facebook: true }));
    try {
      // Facebook login logic will go here
      navigate('/dashboard');
    } catch (error) {
      // Handle error
    } finally {
      setSocialLoading((prev) => ({ ...prev, facebook: false }));
    }
  };

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Banner Ad Space */}
      <div className="w-full h-24 bg-gray-200 flex items-center justify-center border-b relative">
        <div className="absolute top-0 right-0 text-xs text-gray-400 p-1">Ad</div>
        <span className="text-gray-500">Advertisement Space (728x90)</span>
      </div>

      <main className="max-w-4xl mx-auto p-4 mt-8">
        {/* Quick Access Banner */}
        <div className="mb-8 bg-blue-50 rounded-lg border border-blue-100">
          <div className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold">Ready to start practicing?</h2>
                <p className="text-gray-600">
                  You can access the dashboard directly without creating an account
                </p>
              </div>
              <button 
                onClick={() => navigate('/dashboard')}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg flex items-center hover:bg-blue-700"
              >
                Go to Dashboard
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Login Card */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold mb-4">Login to Your Account</h2>
            <div className="space-y-4">
              {/* Email Input */}
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={`w-full p-2 border rounded-lg ${errors.email ? 'border-red-500' : ''}`}
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your@email.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              {/* Password Input */}
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className={`w-full p-2 border rounded-lg ${errors.password ? 'border-red-500' : ''}`}
                  value={formData.password}
                  onChange={handleInputChange}
                />
                {errors.password && (
                  <p className="text-red-500 text-xs mt-1">{errors.password}</p>
                )}
              </div>

              {/* Remember Me Checkbox */}
              <div className="flex items-center justify-between">
                <label className="flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="mr-2"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  <span className="text-sm text-gray-600">Remember me</span>
                </label>
              </div>

              {/* Login Button */}
              <button 
                className="w-full bg-blue-600 text-white rounded-lg py-2 flex items-center justify-center hover:bg-blue-700 disabled:bg-blue-300"
                onClick={handleLogin}
                disabled={isLoading}
              >
                <LogIn className="mr-2 h-4 w-4" />
                {isLoading ? 'Logging in...' : 'Login'}
              </button>

              {/* Social Login */}
              <div className="mt-4">
                <div className="text-center text-sm text-gray-500 mb-4">- OR -</div>
                <div className="grid grid-cols-2 gap-2">
                  <button 
                    className="p-2 border rounded-lg flex items-center justify-center hover:bg-gray-50 disabled:bg-gray-100"
                    onClick={handleGoogleLogin}
                    disabled={isSocialLoading.google}
                  >
                    {/* Replace with actual Google icon */}
                    <span className="mr-2">G</span>
                    {isSocialLoading.google ? 'Connecting...' : 'Google'}
                  </button>
                  <button 
                    className="p-2 border rounded-lg flex items-center justify-center hover:bg-gray-50 disabled:bg-gray-100"
                    onClick={handleFacebookLogin}
                    disabled={isSocialLoading.facebook}
                  >
                    {/* Replace with actual Facebook icon */}
                    <span className="mr-2">f</span>
                    {isSocialLoading.facebook ? 'Connecting...' : 'Facebook'}
                  </button>
                </div>
              </div>

              {/* Forgot Password Link */}
              <p className="text-sm text-center text-gray-600">
                <Link to="/forgot-password" className="hover:underline">
                  Forgot your password?
                </Link>
              </p>

              {/* Terms and Privacy */}
              <p className="text-xs text-gray-500 text-center mt-4">
                By continuing, you agree to our{' '}
                <Link to="/terms" className="text-blue-600 hover:underline">Terms of Service</Link>
                {' '}and{' '}
                <Link to="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link>
              </p>
            </div>
          </div>

          {/* Register Card */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold mb-4">Create an Account</h2>
            <div className="space-y-4">
              <p className="text-gray-600">
                Create an account to track your progress and access additional features:
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  ✓ Save your progress
                </li>
                <li className="flex items-center">
                  ✓ Track your performance
                </li>
                <li className="flex items-center">
                  ✓ Access study analytics
                </li>
                <li className="flex items-center">
                  ✓ Sync across devices
                </li>
              </ul>
              <button 
                className="w-full border border-blue-600 text-blue-600 rounded-lg py-2 flex items-center justify-center hover:bg-blue-50"
                onClick={() => navigate('/register')}
              >
                <UserPlus className="mr-2 h-4 w-4" />
                Create Account
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Banner Ad Space */}
        <div className="w-full h-24 bg-gray-200 flex items-center justify-center mt-8 rounded-lg relative">
          <div className="absolute top-0 right-0 text-xs text-gray-400 p-1">Ad</div>
          <span className="text-gray-500">Advertisement Space (728x90)</span>
        </div>
      </main>
    </div>
  );
}