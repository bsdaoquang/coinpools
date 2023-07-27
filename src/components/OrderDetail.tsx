import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Order} from '../models/Order';
import {RowComponent, SpaceComponent, TextComponent, TitleComponent} from '.';
import {appColors} from '../constants/appColors';

interface Props {
  item: Order;
  onPress: () => void;
}

const OrderDetail = (props: Props) => {
  const {item, onPress} = props;

  return (
    <View style={{marginBottom: 12}}>
      <ImageBackground
        source={require('../assets/images/product-card.png')}
        imageStyle={{
          padding: 8,
          height: '110%',
          resizeMode: 'cover',
        }}
        style={{padding: 8}}>
        <Image
          source={
            item.status === 'completed'
              ? require('../assets/images/succ.png')
              : require('../assets/images/pending.png')
          }
          style={{
            width: 70,
            height: 70,
            resizeMode: 'contain',
            position: 'absolute',
            right: 0,
            top: 0,
            zIndex: 5,
          }}
        />

        <View>
          <TextComponent
            text={`Order grabbing time: ${new Date(item.time).toUTCString()}`}
            size={12}
            color={appColors.gray}
            flex={0}
          />
          <TextComponent
            text={`Order number: ${item.number}`}
            size={12}
            color={appColors.gray}
            flex={0}
          />
        </View>

        <RowComponent
          styles={{
            marginVertical: 12,
          }}>
          <Image
            source={{uri: item.image}}
            style={{
              width: 100,
              height: 100,
              resizeMode: 'contain',
            }}
          />
          <View
            style={{
              flex: 1,
              backgroundColor: appColors.gray7,
              padding: 8,
              minHeight: 100,
              borderRadius: 8,
            }}>
            <TextComponent
              text={`${item.title} x ${item.quality}`}
              flex={0}
              line={2}
            />
            <SpaceComponent height={12} />
            <RowComponent justify="space-between">
              <TitleComponent text={`${item.price} USDT`} flex={0} />
              <TitleComponent text={`x ${item.quality}`} flex={0} />
            </RowComponent>
          </View>
        </RowComponent>

        <RowComponent styles={{marginBottom: 12}} justify="space-between">
          <TextComponent text="Order amount" flex={0} />
          <TextComponent
            text={`${(item.price * item.quality).toFixed(2)} USDT`}
            flex={0}
          />
        </RowComponent>
        <RowComponent styles={{marginBottom: 12}} justify="space-between">
          <TextComponent text="Commission" flex={0} />
          <TextComponent
            text={`${(item.price * item.quality * (item.percent / 100)).toFixed(
              2,
            )} USDT`}
            flex={0}
          />
        </RowComponent>
        <RowComponent styles={{marginBottom: 12}} justify="space-between">
          <TextComponent text="Expected return USDT" flex={0} />
          <TitleComponent
            color={appColors.primary}
            text={`${(
              item.price * item.quality +
              item.price * item.quality * (item.percent / 100)
            ).toFixed(2)} USDT`}
            flex={0}
          />
        </RowComponent>
        {item.status !== 'completed' && (
          <RowComponent justify="flex-start">
            <TouchableOpacity
              onPress={onPress}
              style={{
                paddingHorizontal: 12,
                paddingVertical: 6,
                borderRadius: 4,
                backgroundColor: appColors.red4,
              }}>
              <TextComponent
                text="Submit order"
                size={12}
                color={appColors.white}
                flex={0}
              />
            </TouchableOpacity>
          </RowComponent>
        )}
      </ImageBackground>
    </View>
  );
};

export default OrderDetail;
