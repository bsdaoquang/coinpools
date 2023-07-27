import {View, Text, Image} from 'react-native';
import React from 'react';
import {RowComponent, SectionComponent} from '.';
import {appColors} from '../constants/appColors';
import {global} from '../styles/global';
import MarqueeText from 'react-native-marquee';

const MarqueeTextComponent = () => {
  return (
    <SectionComponent>
      <RowComponent>
        <Image
          source={require('../assets/images/gg.png')}
          style={{
            width: 30,
            height: 30,
            resizeMode: 'contain',
            marginRight: 12,
          }}
        />
        <View
          style={{
            backgroundColor: appColors.gray7,
            padding: 8,
            flex: 1,
          }}>
          <MarqueeText
            style={[global.text]}
            speed={1}
            delay={10000}
            loop
            marqueeOnStart>
            Lorem Ipsum is industry.Lorem Ipsum is industry.Lorem Ipsum is
            industry.Lorem Ipsum is industry.Lorem Ipsum is industry.
          </MarqueeText>
        </View>
      </RowComponent>
    </SectionComponent>
  );
};

export default MarqueeTextComponent;
