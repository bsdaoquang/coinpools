import {
  View,
  Text,
  Image,
  Touchable,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {ReactNode} from 'react';
import {SectionComponent} from './SectionComponent';
import TextComponent from './TextComponent';
import {useNavigation} from '@react-navigation/native';
import RowComponent from './RowComponent';
import {appSize} from '../constants/appSize';
import {MenuItem} from '../models/Menu';

const MenuComponent = () => {
  const navigation: any = useNavigation();
  const menus: MenuItem[] = [
    {
      key: 'Recharge',
      title: 'Recharge',
      icon: (
        <Image
          source={require('../assets/images/rj.png')}
          style={styles.icon}
        />
      ),
      onPress: () => navigation.navigate('Profile', {screen: 'Recharge'}),
    },
    {
      key: 'Withdrawal',
      title: 'Withdrawal',
      icon: (
        <Image
          source={require('../assets/images/cj.png')}
          style={styles.icon}
        />
      ),
      onPress: () => navigation.navigate('Profile', {screen: 'Withdrawal'}),
    },
    {
      key: 'Invite',
      title: 'Invite',
      icon: (
        <Image
          source={require('../assets/images/fx.png')}
          style={styles.icon}
        />
      ),
    },
    {
      key: 'Introduction',
      title: 'Introduction',
      icon: (
        <Image
          source={require('../assets/images/faq1.png')}
          style={styles.icon}
        />
      ),
    },
    {
      key: 'Couse',
      title: 'Couse',
      icon: (
        <Image
          source={require('../assets/images/faq2.png')}
          style={styles.icon}
        />
      ),
    },
    {
      key: 'faq2',
      title: 'FAQ',
      icon: (
        <Image
          source={require('../assets/images/faq3.png')}
          style={styles.icon}
        />
      ),
    },
  ];

  const handleNavigation = (item: MenuItem) => {
    console.log(item);
  };

  return (
    <SectionComponent>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}>
        {menus.map(item => (
          <TouchableOpacity
            onPress={item.onPress ? item.onPress : () => handleNavigation(item)}
            key={item.key}
            style={styles.buttonContainer}>
            {item.icon}
            <TextComponent
              text={item.title}
              size={12}
              styles={{textAlign: 'center'}}
            />
          </TouchableOpacity>
        ))}
      </View>
    </SectionComponent>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 40,
    resizeMode: 'contain',
    height: 40,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: (appSize.width - 32) / 3,
    marginBottom: 16,
  },
});

export default MenuComponent;
