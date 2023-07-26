import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {ForgotPass, Login, SignUp} from '../screens';

const AuthNavigator = () => {
  const AuthStack = createNativeStackNavigator();

  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="SignIn" component={SignUp} />
      <AuthStack.Screen name="ForgotPass" component={ForgotPass} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
