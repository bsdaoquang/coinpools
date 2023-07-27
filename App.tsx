import auth from '@react-native-firebase/auth';
import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import AuthNavigator from './src/navigators/AuthNavigator';
import Router from './src/router/router';
const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <>
      <StatusBar translucent barStyle={'dark-content'} />
      <NavigationContainer>
        {isLogin ? <Router /> : <AuthNavigator />}
      </NavigationContainer>
    </>
  );
};

export default App;
