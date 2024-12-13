export const APP_NAME = 'RideNow';
export const AUTH_TOKEN_KEY = 'authToken';

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  SIGNUP: '/signup',
  PROFILE: '/profile'
};

export const ERROR_MESSAGES = {
  INVALID_CREDENTIALS: 'Invalid email or password',
  WEAK_PASSWORD: 'Password must be at least 6 characters long',
  INVALID_OTP: 'Invalid OTP. Please try again',
  EXPIRED_OTP: 'OTP has expired. Please request a new one',
  NETWORK_ERROR: 'Network error. Please try again'
};

export const SUCCESS_MESSAGES = {
  LOGIN_SUCCESS: 'Login successful!',
  SIGNUP_SUCCESS: 'Account created successfully!',
  OTP_SENT: 'OTP sent successfully!',
  OTP_VERIFIED: 'OTP verified successfully!'
};