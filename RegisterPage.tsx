// src/pages/auth/RegisterPage.tsx
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { 
  UserPlus, 
  ArrowRight, 
  Mail, 
  Lock, 
  User,
  AlertCircle 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AdBanner } from '@/components/common/AdBanner';
import { validate } from '@/lib/utils';

interface RegisterFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  general?: string;
}

export default function RegisterPage() {
  const navigate = useNavigate();
  const { register } = useAuth();
  
  // Form state
  const [formData, setFormData] = useState<RegisterFormData>({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);

  // Form validation
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    // Email validation
    if (!validate.email(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Password validation
    const passwordCheck = validate.password(formData.password);
    if (!passwordCheck.isValid) {
      newErrors.password = passwordCheck.message;
    }

    // Confirm password validation
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    try {
      await register(formData.email, formData.password, formData.name);
      navigate('/dashboard');
    } catch (error) {
      setErrors({
        general: 'Registration failed. Please try again.'
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Banner Ad */}
      <AdBanner size="banner" position="top" />

      <main className="max-w-4xl mx-auto p-4 mt-8">
        {/* Quick Access Banner */}
        <Card className="mb-8 bg-blue-50 border-blue-100">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold">Already have an account?</h2>
                <p className="text-gray-600">
                  Sign in to access your study progress and continue learning
                </p>
              </div>
              <Button 
                variant="outline"
                onClick={() => navigate('/login')}
                className="border-blue-200 text-blue-700 hover:bg-blue-100"
              >
                Sign In
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Registration Form */}
          <Card>
            <CardHeader>
              <CardTitle>Create Your Account</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                {errors.general && (
                  <div className="p-3 rounded bg-red-50 text-red-600 text-sm flex items-center">
                    <AlertCircle className="h-4 w-4 mr-2" />
                    {errors.general}
                  </div>
                )}

                {/* Name Input */}
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="name">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className={`pl-10 w-full p-2 border rounded-lg ${errors.name ? 'border-red-500' : ''}`}
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                    />
                  </div>
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Email Input */}
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="email">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className={`pl-10 w-full p-2 border rounded-lg ${errors.email ? 'border-red-500' : ''}`}
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="you@example.com"
                    />
                  </div>
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Password Input */}
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="password">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      type="password"
                      id="password"
                      name="password"
                      className={`pl-10 w-full p-2 border rounded-lg ${errors.password ? 'border-red-500' : ''}`}
                      value={formData.password}
                      onChange={handleInputChange}
                    />
                  </div>
                  {errors.password && (
                    <p className="text-red-500 text-xs mt-1">{errors.password}</p>
                  )}
                </div>

                {/* Confirm Password Input */}
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="confirmPassword">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      className={`pl-10 w-full p-2 border rounded-lg ${errors.confirmPassword ? 'border-red-500' : ''}`}
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                    />
                  </div>
                  {errors.confirmPassword && (
                    <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>
                  )}
                </div>

                {/* Submit Button */}
                <Button 
                  type="submit" 
                  className="w-full"
                  disabled={isLoading}
                >
                  <UserPlus className="mr-2 h-4 w-4" />
                  {isLoading ? 'Creating Account...' : 'Create Account'}
                </Button>

                {/* Terms and Privacy */}
                <p className="text-xs text-gray-500 text-center mt-4">
                  By creating an account, you agree to our{' '}
                  <Link to="/terms" className="text-blue-600 hover:underline">
                    Terms of Service
                  </Link>
                  {' '}and{' '}
                  <Link to="/privacy" className="text-blue-600 hover:underline">
                    Privacy Policy
                  </Link>
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Benefits Card */}
          <Card>
            <CardHeader>
              <CardTitle>Why Create an Account?</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckIcon className="mt-1 mr-3" />
                  <div>
                    <h3 className="font-medium">Track Your Progress</h3>
                    <p className="text-sm text-gray-600">
                      Save your study progress and pick up where you left off on any device
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="mt-1 mr-3" />
                  <div>
                    <h3 className="font-medium">Performance Analytics</h3>
                    <p className="text-sm text-gray-600">
                      Get detailed insights into your strengths and areas for improvement
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="mt-1 mr-3" />
                  <div>
                    <h3 className="font-medium">Study Plans</h3>
                    <p className="text-sm text-gray-600">
                      Access personalized study plans based on your performance
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="mt-1 mr-3" />
                  <div>
                    <h3 className="font-medium">Premium Features</h3>
                    <p className="text-sm text-gray-600">
                      Unlock premium features for an enhanced learning experience
                    </p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Banner Ad */}
        <AdBanner size="banner" position="bottom" className="mt-8" />
      </main>
    </div>
  );
}

// Helper component for check icons
const CheckIcon = ({ className = "" }) => (
  <div className={`flex-shrink-0 rounded-full bg-green-100 p-1 ${className}`}>
    <svg className="h-4 w-4 text-green-500" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  </div>
);

export default RegisterPage;