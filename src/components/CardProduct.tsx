import {
  View,
  Text,
  Image,
  Dimensions,
  StyleProp,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {Product} from '../models/Product';
import CardContent from './CardContent';
import TextComponent from './TextComponent';
import {global} from '../styles/global';
import {appColors} from '../constants/appColors';
import TitleComponent from './TitleComponent';
import {fontFamilys} from '../constants/fontFamlily';
import RowComponent from './RowComponent';
import {Location, Star1} from 'iconsax-react-native';
import SpaceComponent from './SpaceComponent';

interface Props {
  item: Product;
  onPress: () => void;
}

const CardProduct = (props: Props) => {
  const {item, onPress} = props;
  const imageSize = (Dimensions.get('window').width - 54) / 2;
  return (
    <CardContent key={item.id} onPress={onPress} styles={global.cardProduct}>
      <View
        style={{
          backgroundColor: appColors.gray7,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={{uri: item.images[0]}}
          style={{width: imageSize, height: imageSize}}
          resizeMode="cover"
        />

        {item.discount && (
          <View
            style={{
              position: 'absolute',
              left: 4,
              top: 10,
              backgroundColor: appColors.error,
              borderRadius: 100,
              paddingHorizontal: 12,
              paddingVertical: 4,
            }}>
            <TextComponent
              text={`-${item.discount}%`}
              flex={0}
              font={fontFamilys.medium}
              color={appColors.white}
            />
          </View>
        )}
      </View>

      <View style={{padding: 8}}>
        <TitleComponent
          text={item.title}
          size={14}
          line={2}
          flex={0}
          font={fontFamilys.medium}
        />
        <SpaceComponent height={8} />
        <TitleComponent
          text={`${(
            item.price -
            item.price * (item.discount / 100)
          ).toLocaleString()}`}
          size={20}
          flex={0}
          font={fontFamilys.bold}
        />

        <TextComponent
          text={`${item.price.toLocaleString()}`}
          flex={0}
          color={appColors.gray}
          styles={{
            textDecorationLine: 'line-through',
          }}
        />
        <SpaceComponent height={8} />
        <RowComponent styles={{justifyContent: 'flex-start'}}>
          <Star1 size={18} color={appColors.yellow4} variant="Bold" />
          <SpaceComponent width={4} />
          <TextComponent
            text={item.star.toFixed(1)}
            flex={0}
            size={12}
            font={fontFamilys.medium}
          />
          <View
            style={{
              width: 1,
              backgroundColor: appColors.gray,
              height: 16,
              marginHorizontal: 8,
            }}
          />
          <TextComponent
            text={`Sold: ${item.sold}`}
            flex={0}
            size={12}
            font={fontFamilys.medium}
          />
        </RowComponent>

        <SpaceComponent height={8} />
        <RowComponent>
          <Location size={18} color={appColors.primary} variant="Bold" />
          <TextComponent text={item.location} line={1} />
        </RowComponent>
      </View>

      {/* <TextComponent text={item.title} /> */}
    </CardContent>
  );
};

export default CardProduct;
