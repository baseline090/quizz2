// App.tsx
import React, {useEffect} from 'react';
import {Provider, useDispatch} from 'react-redux';
import AppNavigation from './src/navigation/AppNavigation';
import {NavigationContainer} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {loginSuccess, setToken} from './src/redux/Slice/authSlice';
import Toast from 'react-native-toast-message';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const checkUserSession = async () => {
      try {
        const token = await AsyncStorage.getItem('userToken');
        if (token) {
          const fullName = await AsyncStorage.getItem('fullName');
          const email = await AsyncStorage.getItem('email');
          if (fullName && email) {
            dispatch(loginSuccess({fullName, email}));
            dispatch(setToken({token}));
          }
        }
      } catch (error) {
        console.error('Failed to load user session: ', error);
      }
    };

    checkUserSession();
  }, [dispatch]);
  return (
    <NavigationContainer>
      <AppNavigation />
      <Toast />
    </NavigationContainer>
  );
};

export default App;
