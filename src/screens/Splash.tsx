import {View, Text, ActivityIndicator} from 'react-native';
import React, {useEffect} from 'react';
import {global} from '../styles/global';
import {useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {addAuth} from '../redux/reducers/authReducer';

const Splash = () => {
  useEffect(() => {
    getUserInfo();
  }, []);

  const dispatch = useDispatch();

  const getUserInfo = async () => {
    const user = await AsyncStorage.getItem('user');

    if (user) {
      // console.log(user);
      dispatch(addAuth(JSON.parse(user)));
    }
  };

  return (
    <View
      style={[
        global.container,
        {
          justifyContent: 'center',
          alignItems: 'center',
        },
      ]}>
      <ActivityIndicator />
      <Text>Loading...</Text>
    </View>
  );
};

export default Splash;
