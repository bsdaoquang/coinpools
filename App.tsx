import React from 'react';
import {StatusBar} from 'react-native';
import Router from './src/router/router';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import Toast from 'react-native-toast-message';
// import {GestureHandlerRootView} from 'react-native-gesture-handler';
const App = () => {
  return (
    <>
      {/* <GestureHandlerRootView style={{flex: 1}}> */}
      <StatusBar translucent barStyle={'dark-content'} />
      <Provider store={store}>
        <Router />
        <Toast />
      </Provider>
      {/* </GestureHandlerRootView> */}
    </>
  );
};

export default App;
