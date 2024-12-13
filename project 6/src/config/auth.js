// Demo credentials for testing
export const DEMO_CREDENTIALS = {
  email: 'demo@ridenow.com',
  password: 'demo123'
};

// Firebase config would go here in a real app
export const AUTH_CONFIG = {
  apiKey: 'demo-api-key',
  authDomain: 'ridenow-demo.firebaseapp.com',
  projectId: 'ridenow-demo',
  storageBucket: 'ridenow-demo.appspot.com',
  messagingSenderId: '123456789',
  appId: '1:123456789:web:abcdef123456'
};

// OTP verification settings
export const OTP_CONFIG = {
  length: 6,
  expiryMinutes: 10,
  resendDelaySeconds: 30
};

// Password requirements
export const PASSWORD_REQUIREMENTS = {
  minLength: 6,
  requireNumbers: true,
  requireSpecialChars: true
};