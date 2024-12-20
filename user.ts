// src/types/user.ts

// Main user interface
export interface User {
  id: string;
  email: string;
  name: string;
  isPremium: boolean;
  createdAt: string;
  updatedAt: string;
  lastLoginAt: string | null;
  profile: UserProfile;
  preferences: UserPreferences;
  stats: UserStats;
  subscription: SubscriptionDetails | null;
}

// User profile information
export interface UserProfile {
  avatar?: string;
  phoneNumber?: string;
  state?: string;
  cdlType?: 'A' | 'B' | 'C';
  targetTestDate?: string;
  experience?: 'none' | 'beginner' | 'intermediate' | 'experienced';
  bio?: string;
  language?: 'en' | 'es';
}

// User preferences
export interface UserPreferences {
  notifications: {
    email: boolean;
    push: boolean;
    sms: boolean;
  };
  studyReminders: boolean;
  testReminders: boolean;
  progressReports: boolean;
  emailUpdates: boolean;
  theme: 'light' | 'dark' | 'system';
}

// User statistics
export interface UserStats {
  testsCompleted: number;
  totalStudyTime: number; // in minutes
  averageScore: number;
  currentStreak: number;
  bestStreak: number;
  lastStudySession?: string;
  correctAnswers: number;
  totalQuestions: number;
  expertiseLevel: 'beginner' | 'intermediate' | 'advanced' | 'expert';
}

// Subscription information
export interface SubscriptionDetails {
  status: 'active' | 'inactive' | 'cancelled' | 'expired';
  plan: 'free' | 'premium' | 'enterprise';
  startDate: string;
  endDate?: string;
  autoRenew: boolean;
  billingCycle: 'monthly' | 'yearly';
  price: number;
  features: string[];
  paymentMethod?: PaymentMethod;
}

// Payment method information
export interface PaymentMethod {
  id: string;
  type: 'credit_card' | 'paypal';
  last4?: string;
  expiryDate?: string;
  isDefault: boolean;
}

// Update profile request type
export interface UpdateProfileRequest {
  name?: string;
  email?: string;
  profile?: Partial<UserProfile>;
  preferences?: Partial<UserPreferences>;
}

// User registration data
export interface RegisterUserData {
  email: string;
  password: string;
  name: string;
  cdlType?: 'A' | 'B' | 'C';
  state?: string;
}

// User settings update data
export interface UserSettingsUpdate {
  notifications?: Partial<UserPreferences['notifications']>;
  studyReminders?: boolean;
  testReminders?: boolean;
  progressReports?: boolean;
  emailUpdates?: boolean;
  theme?: UserPreferences['theme'];
}

// Study progress type
export interface UserStudyProgress {
  userId: string;
  sectionId: string;
  progress: number;
  lastStudied: string;
  timeSpent: number;
  completedTopics: string[];
  scores: {
    topicId: string;
    score: number;
    attempts: number;
  }[];
}

// User activity log
export interface UserActivity {
  id: string;
  userId: string;
  type: 'test_taken' | 'study_session' | 'profile_update' | 'subscription_change';
  timestamp: string;
  details: Record<string, any>;
}

// Authentication response
export interface AuthResponse {
  user: User;
  token: string;
  refreshToken: string;
}

// Constants
export const USER_ROLES = {
  FREE: 'free',
  PREMIUM: 'premium',
  ENTERPRISE: 'enterprise'
} as const;

export const CDL_TYPES = {
  A: 'Class A',
  B: 'Class B',
  C: 'Class C'
} as const;

export const EXPERTISE_LEVELS = {
  BEGINNER: 'beginner',
  INTERMEDIATE: 'intermediate',
  ADVANCED: 'advanced',
  EXPERT: 'expert'
} as const;

// Type guards
export const isValidCDLType = (type: string): type is keyof typeof CDL_TYPES => {
  return Object.keys(CDL_TYPES).includes(type);
};

export const isPremiumUser = (user: User): boolean => {
  return user.isPremium && 
    user.subscription?.status === 'active' && 
    user.subscription.plan !== 'free';
};

export const hasCompletedProfile = (user: User): boolean => {
  return !!(
    user.profile.cdlType &&
    user.profile.state &&
    user.profile.targetTestDate
  );
};