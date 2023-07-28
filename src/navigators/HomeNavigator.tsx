import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {HomeScreen, Introduction, Products, SearchScreen} from '../screens';
import Couse from '../screens/Couse';
import Faq from '../screens/Faq';

const HomeNavigator = () => {
  const HomeStack = createNativeStackNavigator();
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
      <HomeStack.Screen name="SearchScreen" component={SearchScreen} />
      <HomeStack.Screen name="Products" component={Products} />
      <HomeStack.Screen name="Introduction" component={Introduction} />
      <HomeStack.Screen name="Couse" component={Couse} />
      <HomeStack.Screen name="FAQ" component={Faq} />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
