import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {DocumentText1, Element, Element4, User} from 'iconsax-react-native';
import React, {useEffect, useState} from 'react';
import {Image, ImageBackground} from 'react-native';
import {appColors} from '../constants/appColors';
import HomeNavigator from '../navigators/HomeNavigator';
import MessageNavigator from '../navigators/MessageNavigator';
import ProfileNavigator from '../navigators/ProfileNavigator';
import AuthNavigator from '../navigators/AuthNavigator';
import {authSelector} from '../redux/reducers/authReducer';
import {useSelector} from 'react-redux';
import Splash from '../screens/Splash';
import OrdersNavigator from '../navigators/OrdersNavigator';
import GrabNavigator from '../navigators/GrabNavigator';

const Router = () => {
  const [isShowSplash, setIsShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsShowSplash(false);
    }, 300);
  }, []);

  const Tabs = createBottomTabNavigator();

  const auth = useSelector(authSelector);

  return isShowSplash ? (
    <Splash />
  ) : (
    <NavigationContainer>
      {auth.uid ? (
        <Tabs.Navigator
          screenOptions={({route}) => ({
            headerShown: false,
            tabBarHideOnKeyboard: true,
            tabBarBackground: () => (
              <Image
                source={require('../assets/images/cbimage.png')}
                style={{
                  width: '100%',
                  height: '100%',
                  resizeMode: 'cover',
                }}
              />
            ),
            tabBarStyle: {
              margin: 0,
              padding: 0,
              backgroundColor: 'transparent',
              elevation: 0,
              borderTopWidth: 0,
            },
            tabBarIcon: ({focused, size, color}) => {
              size = 22;
              let icon;

              color = focused ? appColors.primary : appColors.gray;

              if (route.name === 'Home') {
                icon = (
                  <Element4
                    size={size}
                    color={color}
                    variant={focused ? 'Bold' : 'Outline'}
                  />
                );
              } else if (route.name === 'Orders') {
                icon = (
                  <Image
                    source={require('../assets/images/order.png')}
                    style={{
                      width: 22,
                      height: 22,
                    }}
                  />
                );
              } else if (route.name === 'Grap') {
                icon = (
                  <ImageBackground
                    source={{
                      uri: 'https://xxxx.coinpools.me/image/5425445-1.png',
                    }}
                    style={{
                      width: 54,
                      height: 54,
                      marginBottom: 25,
                      borderRadius: 100,
                      backgroundColor: 'coral',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderWidth: 0,
                    }}></ImageBackground>
                );
              } else {
                icon = (
                  <User
                    size={size}
                    color={color}
                    variant={focused ? 'Bold' : 'Outline'}
                  />
                );
              }

              return icon;
            },
            tabBarShowLabel: false,
          })}>
          <Tabs.Screen name="Home" component={HomeNavigator} />
          <Tabs.Screen name="Orders" component={OrdersNavigator} />
          <Tabs.Screen name="Grap" component={GrabNavigator} />
          <Tabs.Screen name="Profile4" component={ProfileNavigator} />
          <Tabs.Screen name="Profile2" component={ProfileNavigator} />
        </Tabs.Navigator>
      ) : (
        <AuthNavigator />
      )}
    </NavigationContainer>
  );
};

export default Router;
