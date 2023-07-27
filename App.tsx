import React from 'react';
import {StatusBar} from 'react-native';
import Router from './src/router/router';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import Toast from 'react-native-toast-message';
const App = () => {
  return (
    <>
      <StatusBar translucent barStyle={'dark-content'} />
      <Provider store={store}>
        <Router />
        <Toast />
      </Provider>
    </>
  );
};

export default App;
