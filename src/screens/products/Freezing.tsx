import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {Order} from '../../models/Order';
import LinearGradient from 'react-native-linear-gradient';
import {global} from '../../styles/global';
import {appColors} from '../../constants/appColors';
import {OrderDetail, SectionComponent, TextComponent} from '../../components';

const Freezing = () => {
  const oders: Order[] = [];
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
          <View>
            <TextComponent text="No data!" flex={0} />
          </View>
        )}
      </SectionComponent>
    </LinearGradient>
  );
};

export default Freezing;
