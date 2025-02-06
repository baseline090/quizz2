import {createAsyncThunk} from '@reduxjs/toolkit';
import {
  ApiError,
  LoginApiResponse,
  LogoutApiResponse,
  User,
  loginResponse,
} from '../../types';
import AsyncStorage from '@react-native-async-storage/async-storage';


export const registerApi = createAsyncThunk<
  User,
  {fullName: string; username: string; email: string; password: string}
>('auth/register', async userData => {
  const response = await fetch('https://quizz2.onrender.com/api/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Failed to register');
  }

  return await response.json();
});

// ---------- Login API
export const loginApi = createAsyncThunk<
  LoginApiResponse,
  loginResponse,
  {rejectValue: ApiError}
>('auth/login', async (loginData, {rejectWithValue}) => {
  try {
    const response = await fetch('https://quizz2.onrender.com/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
    });

    if (!response.ok) {
      const errorData: ApiError = await response.json();
      console.error('Login error: ', errorData);
      return rejectWithValue(errorData);
    }

    const data: LoginApiResponse = await response.json();

    if (data.token) {
      await AsyncStorage.setItem('userToken', data.token);
      await AsyncStorage.setItem('fullName', data.data.fullName);
      await AsyncStorage.setItem('username', data.data.username);
      await AsyncStorage.setItem('email', data.data.email);
    }

    return data;
  } catch (error) {
    console.error('Unexpected login error: ', error);
    return rejectWithValue({message: 'An unexpected error occurred'});
  }
});

// ---------- Forgot Password API
export const forgotPasswordApi = createAsyncThunk<void, {email: string}>(
  'auth/forgotPassword',
  async ({email}, {rejectWithValue}) => {
    try {
      const response = await fetch(
        'https://quizz2.onrender.com/api/forgotpassword',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({email}),
        },
      );

      if (!response.ok) {
        const errorData = await response.json();
        return rejectWithValue(errorData.message || 'Failed to send OTP');
      }
    } catch (error: any) {
      return rejectWithValue(error.message || 'Network error occurred');
    }
  },
);
// ---------- Verify OTP API
export const verifyOtpApi = createAsyncThunk<
  void,
  {email: string; otp: string}
>('auth/verifyOtp', async ({email, otp}) => {
  const response = await fetch('https://quizz2.onrender.com/api/verifyotp', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({email, otp}),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'OTP verification failed');
  }
});

// ---------- Reset Password API
export const resetPasswordApi = createAsyncThunk<
  {success: boolean; message: string},
  {email: string; newPassword: string; confirmPassword: string}
>('auth/resetPassword', async ({email, newPassword, confirmPassword}) => {
  const response = await fetch(
    'https://quizz2.onrender.com/api/resetpassword',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({email, newPassword, confirmPassword}),
    },
  );

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Failed to reset password');
  }
  return {success: true, message: 'Password reset successfully'};
});

// ------------- logoutApi
export const logoutApi = createAsyncThunk<void, void>(
  'auth/logout',
  async (_, {rejectWithValue}) => {
    try {
      const token = await AsyncStorage.getItem('userToken');
      if (!token) {
        throw new Error('Token not found');
      }

      const response = await fetch('https://quizz2.onrender.com/api/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        console.error('Logout API Error:', await response.text());
        throw new Error('Unauthorized access, please login first.');
      }

      await AsyncStorage.removeItem('userToken'); // Clear token locally
    } catch (error: unknown) {
      console.error('Logout failed:', error);
      await AsyncStorage.removeItem('userToken'); // Always clear token locally
      return rejectWithValue(
        error instanceof Error
          ? error.message
          : 'An error occurred during logout.',
      );
    }
  }
);
