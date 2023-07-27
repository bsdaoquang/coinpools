import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {Order} from '../../models/Order';
import LinearGradient from 'react-native-linear-gradient';
import {global} from '../../styles/global';
import {appColors} from '../../constants/appColors';
import {OrderDetail, SectionComponent, TextComponent} from '../../components';

const Completed = () => {
  const oders: Order[] = [
    {
      time: Date.now(),
      number: 'UB2307180353263540',
      status: 'completed',
      image:
        'https://xxxx.coinpools.me/upload/221890a126cc3d2f/b898c36fc23e5eb1.jpg',
      title:
        'Tummy Strength Trimmer (Black) WITH FREE Premium Slimming Waist Belt',
      price: 130.0,
      quality: 48,
      percent: 0.6,
    },
    {
      time: Date.now(),
      number: 'UB2307180353112585',
      status: 'completed',
      image:
        'https://xxxx.coinpools.me/upload/8bee93dffdfaa475/cf24a5f2d76887d5.jpg',
      title:
        'Child Carpet Baby Assembled Home Shaggy Soft Splice EVA Foam Mats Colorful Floor Tiles Baby Crawling Puzzle Play Mat Create & Build A Safe PLay Area Interlocking ',
      price: 3450.0,
      quality: 2,
      percent: 0.6,
    },
    {
      time: Date.now(),
      number: 'UB2307180353112585',
      status: 'completed',
      image:
        'https://xxxx.coinpools.me/upload/b0eb94d7aeb76d5b/5a5c5a15f333c745.jpg',
      title:
        'Hitachi FL-601 Wide Throw Ratio 1:0.8 Fixed Ultra Short Throw Lens for X505 Projector',
      price: 7200.0,
      quality: 1,
      percent: 0.6,
    },
    {
      time: Date.now(),
      number: 'UB2307180353112585',
      status: 'completed',
      image:
        'https://xxxx.coinpools.me/upload/11955e7c211812c7/335a332614079c53.jpg',
      title:
        'Hitachi FL-601 Wide Throw Ratio 1:0.8 Fixed Ultra Short Throw Lens for X505 Projector',
      price: 5110.0,
      quality: 1,
      percent: 0.6,
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

export default Completed;
