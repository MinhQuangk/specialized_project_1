import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text } from 'react-native';
import { ForgotPassword, LoginScreen,SignUpScreen, Verification } from '../screens';

const AuthNavigator = () => {
  const Stack = createNativeStackNavigator();
  return <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name='LoginScreen' component={LoginScreen} />
    <Stack.Screen name='SignUpScreen' component={SignUpScreen} />
    <Stack.Screen name='Verification' component={Verification} />
    <Stack.Screen name='ForgotPassword' component={ForgotPassword} />


  </Stack.Navigator>
};

export default AuthNavigator;