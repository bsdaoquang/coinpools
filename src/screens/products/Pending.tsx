import React from 'react';
import {FlatList} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {OrderDetail, SectionComponent, TextComponent} from '../../components';
import {appColors} from '../../constants/appColors';
import {Order} from '../../models/Order';
import {global} from '../../styles/global';

const Pending = () => {
  const oders: Order[] = [
    {
      time: Date.now(),
      number: 'UB2307180353402779',
      status: 'pending',
      image:
        'https://xxxx.coinpools.me/upload/fbfb5b3050c6fa88/2f2893f5f88d7357.jpg',
      title:
        'Tayion Mens Classic Fit Suit Separates Coat Blue - Size: 42 Extra Long',
      price: 1630.0,
      quality: 10,
      percent: 18,
    },
  ];

  return (
    <LinearGradient
      style={[
        global.container,
        {height: '100%', borderTopColor: appColors.white, borderTopWidth: 1},
      ]}
      colors={['rgba(206,213,223,0.8)', 'rgba(206,213,223,0)']}>
      <SectionComponent>
        {oders.length > 0 ? (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={oders}
            renderItem={({item}) => (
              <OrderDetail
                item={item}
                key={item.number}
                onPress={() => console.log(item)}
              />
            )}
          />
        ) : (
          <>
            <TextComponent text="Data not found!" flex={0} />
          </>
        )}
      </SectionComponent>
    </LinearGradient>
  );
};

export default Pending;
