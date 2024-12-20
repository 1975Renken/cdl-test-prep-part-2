import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard';

// Temporary placeholder components (we'll build these properly later)
const Home = () => <div>Home Page</div>;
const Login = () => <div>Login Page</div>;
const Register = () => <div>Register Page</div>;
const Practice = () => <div>Practice Tests</div>;
const StudyGuide = () => <div>Study Materials</div>;
const TestHistory = () => <div>Test History</div>;
const Profile = () => <div>User Profile</div>;
const Settings = () => <div>Settings</div>;
const Premium = () => <div>Premium Features</div>;
const ForgotPassword = () => <div>Reset Password</div>;

export default function App() {
  return (
    <BrowserRouter>
      {/* Basic Navigation */}
      <nav className="bg-blue-600 p-4">
        <div className="container mx-auto flex gap-4 text-white">
          <Link to="/" className="hover:text-blue-200">Home</Link>
          <Link to="/dashboard" className="hover:text-blue-200">Dashboard</Link>
          <Link to="/practice" className="hover:text-blue-200">Practice Tests</Link>
          <Link to="/study-guide" className="hover:text-blue-200">Study Guide</Link>
          <Link to="/test-history" className="hover:text-blue-200">History</Link>
          <Link to="/profile" className="hover:text-blue-200">Profile</Link>
          <Link to="/premium" className="hover:text-blue-200">Premium</Link>
        </div>
      </nav>

      {/* Routes */}
      <div className="container mx-auto p-4">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          
          {/* Protected Routes (we'll add authentication later) */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/study-guide" element={<StudyGuide />} />
          <Route path="/test-history" element={<TestHistory />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/premium" element={<Premium />} />

          {/* Test-specific routes */}
          <Route path="/practice/:testType" element={<div>Specific Test Type</div>} />
          <Route path="/practice/:testType/:questionId" element={<div>Specific Question</div>} />
          <Route path="/results/:testId" element={<div>Test Results</div>} />
          
          {/* Study guide routes */}
          <Route path="/study-guide/:section" element={<div>Study Section</div>} />
          <Route path="/study-guide/:section/:topic" element={<div>Study Topic</div>} />

          {/* 404 Route */}
          <Route path="*" element={<div>404 - Page Not Found</div>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}