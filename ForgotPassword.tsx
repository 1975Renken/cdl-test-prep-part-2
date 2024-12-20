// src/pages/auth/ForgotPassword.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, ArrowLeft, CheckCircle, AlertCircle } from 'lucide-react';
import { validate } from '@/lib/utils';
import { useAuth } from '@/hooks/useAuth';

interface RequestStatus {
  type: 'success' | 'error' | null;
  message: string;
}

export default function ForgotPassword() {
  const { resetPassword } = useAuth();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<RequestStatus>({ type: null, message: '' });

  const validateForm = (): boolean => {
    if (!validate.email(email)) {
      setStatus({
        type: 'error',
        message: 'Please enter a valid email address'
      });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    try {
      await resetPassword(email);
      setStatus({
        type: 'success',
        message: 'Password reset instructions have been sent to your email'
      });
      setEmail(''); // Clear form after success
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Failed to send reset instructions. Please try again.'
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            CDL Practice
          </h1>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Reset Password</CardTitle>
            <CardDescription>
              Enter your email address and we'll send you instructions to reset your password.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Status Messages */}
              {status.type && (
                <div
                  className={`p-3 rounded flex items-start ${
                    status.type === 'success' 
                      ? 'bg-green-50 text-green-700'
                      : 'bg-red-50 text-red-700'
                  }`}
                >
                  {status.type === 'success' ? (
                    <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                  )}
                  <span className="text-sm">{status.message}</span>
                </div>
              )}

              {/* Email Input */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setStatus({ type: null, message: '' }); // Clear status on input
                    }}
                    className="pl-10 w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="you@example.com"
                    disabled={isLoading || status.type === 'success'}
                  />
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full"
                disabled={isLoading || status.type === 'success'}
              >
                {isLoading ? 'Sending Instructions...' : 'Send Reset Instructions'}
              </Button>

              {/* Back to Login Link */}
              <Link
                to="/login"
                className="flex items-center justify-center text-sm text-gray-600 hover:text-gray-900 mt-4"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Login
              </Link>
            </form>
          </CardContent>
        </Card>

        {/* Help Text */}
        <p className="text-center text-sm text-gray-600 mt-8">
          Haven't received the email?{' '}
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              if (!isLoading && status.type !== 'success') {
                handleSubmit(e);
              }
            }}
            className="text-blue-600 hover:underline"
          >
            Click here to try again
          </a>
        </p>

        {/* Support Link */}
        <p className="text-center text-sm text-gray-600 mt-2">
          Need help?{' '}
          <Link to="/contact" className="text-blue-600 hover:underline">
            Contact Support
          </Link>
        </p>
      </div>
    </div>
  );
}