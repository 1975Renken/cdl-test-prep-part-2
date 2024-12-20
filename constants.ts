// src/lib/constants.ts

// API Constants
export const API = {
  BASE_URL: import.meta.env.VITE_APP_API_URL || 'http://localhost:3000/api',
  ENDPOINTS: {
    AUTH: {
      LOGIN: '/auth/login',
      REGISTER: '/auth/register',
      LOGOUT: '/auth/logout',
      REFRESH_TOKEN: '/auth/refresh-token',
      RESET_PASSWORD: '/auth/reset-password',
    },
    USER: {
      PROFILE: '/user/profile',
      UPDATE_PROFILE: '/user/update',
      PREFERENCES: '/user/preferences',
    },
    EXAM: {
      SECTIONS: '/exam/sections',
      QUESTIONS: '/exam/questions',
      SUBMIT_ANSWER: '/exam/submit',
      PROGRESS: '/exam/progress',
      RESULTS: '/exam/results',
    },
    DASHBOARD: {
      STATS: '/dashboard/stats',
      PROGRESS: '/dashboard/progress',
      RECENT_ACTIVITY: '/dashboard/recent-activity',
    },
  },
  TIMEOUT: 30000, // API timeout in milliseconds
};

// Authentication Constants
export const AUTH = {
  TOKEN_KEY: 'cdl_auth_token',
  REFRESH_TOKEN_KEY: 'cdl_refresh_token',
  SESSION_DURATION: 24 * 60 * 60 * 1000, // 24 hours in milliseconds
  PASSWORD_REQUIREMENTS: {
    MIN_LENGTH: 8,
    REQUIRE_UPPERCASE: true,
    REQUIRE_LOWERCASE: true,
    REQUIRE_NUMBER: true,
    REQUIRE_SPECIAL: true,
  },
};

// Exam Constants
export const EXAM = {
  SECTIONS: {
    GENERAL_KNOWLEDGE: 'general_knowledge',
    AIR_BRAKES: 'air_brakes',
    COMBINATION_VEHICLES: 'combination_vehicles',
    HAZMAT: 'hazmat',
    TANKER: 'tanker',
    DOUBLES_TRIPLES: 'doubles_triples',
  },
  TIME_LIMITS: {
    QUESTION: 120, // seconds per question
    SECTION: 3600, // seconds per section
    BREAK: 300, // seconds for break between sections
  },
  PASSING_SCORE: 80, // percentage
  MAX_ATTEMPTS: 3,
  REVIEW_PERIOD: 24 * 60 * 60 * 1000, // 24 hours in milliseconds
};

// UI Constants
export const UI = {
  THEME: {
    COLORS: {
      PRIMARY: '#3B82F6', // blue-500
      SECONDARY: '#6B7280', // gray-500
      SUCCESS: '#10B981', // green-500
      ERROR: '#EF4444', // red-500
      WARNING: '#F59E0B', // amber-500
      INFO: '#3B82F6', // blue-500
    },
    FONTS: {
      PRIMARY: 'Inter, sans-serif',
      SECONDARY: 'system-ui, sans-serif',
    },
  },
  BREAKPOINTS: {
    SM: '640px',
    MD: '768px',
    LG: '1024px',
    XL: '1280px',
    '2XL': '1536px',
  },
  ANIMATION: {
    DURATION: {
      FAST: 100,
      NORMAL: 200,
      SLOW: 300,
    },
    EASING: {
      DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)',
      LINEAR: 'linear',
      IN: 'cubic-bezier(0.4, 0, 1, 1)',
      OUT: 'cubic-bezier(0, 0, 0.2, 1)',
      IN_OUT: 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
  },
};

// Feature Flags
export const FEATURES = {
  SOCIAL_LOGIN: true,
  PREMIUM_FEATURES: true,
  PRACTICE_TESTS: true,
  STUDY_MATERIALS: true,
  PROGRESS_TRACKING: true,
  PERFORMANCE_ANALYTICS: true,
};

// Premium Features
export const PREMIUM = {
  FEATURES: {
    UNLIMITED_PRACTICE_TESTS: 'unlimited_tests',
    DETAILED_ANALYTICS: 'detailed_analytics',
    STUDY_MATERIALS: 'study_materials',
    PROGRESS_TRACKING: 'progress_tracking',
    AD_FREE: 'ad_free',
  },
  TRIAL_PERIOD: 7 * 24 * 60 * 60 * 1000, // 7 days in milliseconds
};

// Error Messages
export const ERRORS = {
  AUTH: {
    INVALID_CREDENTIALS: 'Invalid email or password',
    SESSION_EXPIRED: 'Your session has expired. Please login again',
    UNAUTHORIZED: 'You are not authorized to access this resource',
    REGISTRATION_FAILED: 'Registration failed. Please try again',
  },
  EXAM: {
    SECTION_NOT_FOUND: 'Exam section not found',
    QUESTION_NOT_FOUND: 'Question not found',
    SUBMISSION_FAILED: 'Failed to submit answer',
    TIME_EXPIRED: 'Time limit exceeded',
  },
  API: {
    NETWORK_ERROR: 'Network error. Please check your connection',
    SERVER_ERROR: 'Server error. Please try again later',
    TIMEOUT: 'Request timeout. Please try again',
  },
};

// Local Storage Keys
export const STORAGE_KEYS = {
  AUTH_TOKEN: 'cdl_auth_token',
  USER_PREFERENCES: 'cdl_user_prefs',
  EXAM_PROGRESS: 'cdl_exam_progress',
  STUDY_HISTORY: 'cdl_study_history',
  LAST_VISITED: 'cdl_last_visited',
};

// Routes
export const ROUTES = {
  HOME: '/',
  AUTH: {
    LOGIN: '/login',
    REGISTER: '/register',
    FORGOT_PASSWORD: '/forgot-password',
    RESET_PASSWORD: '/reset-password',
  },
  DASHBOARD: '/dashboard',
  EXAM: {
    LIST: '/exams',
    SECTION: '/exam/:sectionId',
    RESULTS: '/exam/:sectionId/results',
    REVIEW: '/exam/:sectionId/review',
  },
  PROFILE: '/profile',
  SETTINGS: '/settings',
  PREMIUM: '/premium',
};