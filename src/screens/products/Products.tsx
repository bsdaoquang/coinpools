import React from 'react';
import {
  Container,
  RowComponent,
  SectionComponent,
  TextComponent,
  TitleComponent,
} from '../../components';
import LinearGradient from 'react-native-linear-gradient';
import {global} from '../../styles/global';
import {appSize} from '../../constants/appSize';
import {View} from 'react-native';
import {appColors} from '../../constants/appColors';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Pending from './Pending';
import Completed from './Completed';
import Freezing from './Freezing';
import {fontFamilys} from '../../constants/fontFamlily';

const Products = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Container isScroll top={0} barStyle="dark-content">
      <LinearGradient
        style={[global.container, {height: appSize.height}]}
        colors={['rgba(206,213,223,1)', 'rgba(206,213,223,0)']}>
        <SectionComponent styles={{paddingTop: 32}}>
          <RowComponent>
            <View style={{flex: 1}}>
              <TitleComponent text="Order record" size={20} flex={0} line={1} />
              <TextComponent
                text="Order recordOfficial data"
                flex={0}
                size={12}
                line={1}
                color={appColors.gray1}
              />
            </View>
            <View style={{flex: 1, alignItems: 'flex-end'}}>
              <TitleComponent text="-5539.93" size={20} flex={0} line={1} />
              <TextComponent
                text="Account balance"
                flex={0}
                size={12}
                line={1}
              />
            </View>
          </RowComponent>
        </SectionComponent>
        <Tab.Navigator
          screenOptions={{
            tabBarStyle: {
              backgroundColor: 'transparent',
              elevation: 0,
            },
            tabBarIndicator: () => null,
            tabBarLabelStyle: {
              fontFamily: fontFamilys.medium,
              textTransform: 'capitalize',
            },
            tabBarActiveTintColor: appColors.primary,
            tabBarInactiveTintColor: appColors.gray,
            tabBarPressOpacity: 1,
            tabBarPressColor: 'rgba(206,213,223, 0.8)',
          }}>
          <Tab.Screen name="Pending" component={Pending} />
          <Tab.Screen name="Completed" component={Completed} />
          <Tab.Screen name="Freezing" component={Freezing} />
        </Tab.Navigator>
      </LinearGradient>
    </Container>
  );
};

export default Products;
