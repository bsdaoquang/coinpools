import {View, Text, ImageBackground, Image} from 'react-native';
import React from 'react';
import {
  ButtonComponent,
  ButtonIcon,
  CardContent,
  Container,
  DividerComponent,
  MarqueeTextComponent,
  RowComponent,
  SectionComponent,
  SpaceComponent,
  TabbarComponent,
  TextComponent,
  TitleComponent,
} from '../../components';
import {appSize} from '../../constants/appSize';
import {appColors} from '../../constants/appColors';
import {InfoCircle} from 'iconsax-react-native';
import {fontFamilys} from '../../constants/fontFamlily';

const GrabOrders = () => {
  return (
    <Container top={0} backgroundColor={'#f5f5f5'}>
      <View style={{}}>
        <ImageBackground
          style={{
            paddingTop: 32,
            paddingHorizontal: 16,
          }}
          source={require('../../assets/images/ajdajd.png')}
          imageStyle={{
            width: appSize.width,
            height: 180,
            resizeMode: 'cover',
          }}>
          <RowComponent justify="space-between">
            <TitleComponent
              text="Commission 0.6%"
              color={appColors.white}
              flex={1}
            />
            <ButtonIcon
              icon={<InfoCircle size={20} color={appColors.white} />}
              onPress={() => {}}
            />
          </RowComponent>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={require('../../assets/images/lhjtb.png')}
              style={{
                width: '90%',
                resizeMode: 'contain',
              }}
            />
          </View>
        </ImageBackground>
      </View>
      <View style={{flex: 1}}>
        <MarqueeTextComponent />
        <SectionComponent>
          <RowComponent>
            <ButtonComponent
              text="Automatic matching"
              onPress={() => {}}
              flex={1}
              color={appColors.info4}
            />
          </RowComponent>
        </SectionComponent>
        <SectionComponent>
          <TabbarComponent title="Matching quantity (60)" />
          <CardContent>
            <TextComponent
              text="Total assets (usdt)"
              flex={0}
              size={12}
              color={appColors.gray}
            />
            <TitleComponent text={`USDT: -5539.93`} flex={0} />
            <SpaceComponent height={12} />
            <DividerComponent />
            <SpaceComponent height={12} />
            <View>
              <RowComponent
                styles={{
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: 8,
                }}>
                <TextComponent
                  text="Today commission"
                  flex={0}
                  size={12}
                  font={fontFamilys.medium}
                  styles={{textAlign: 'center'}}
                />
                <TitleComponent text="0" flex={0} color={appColors.primary} />
              </RowComponent>
              <RowComponent
                styles={{
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: 8,
                }}>
                <TextComponent
                  text="Total tasks"
                  flex={0}
                  size={12}
                  font={fontFamilys.medium}
                  styles={{textAlign: 'center'}}
                />
                <TitleComponent text="60" flex={0} />
              </RowComponent>
              <RowComponent
                styles={{
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: 8,
                }}>
                <TextComponent
                  text="Remaining tasks"
                  flex={0}
                  size={12}
                  font={fontFamilys.medium}
                  styles={{textAlign: 'center'}}
                />
                <TitleComponent text="12" flex={0} />
              </RowComponent>
              <RowComponent
                styles={{
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: 8,
                }}>
                <TextComponent
                  text="Completed tasks"
                  flex={0}
                  size={12}
                  font={fontFamilys.medium}
                  styles={{textAlign: 'center'}}
                />
                <TitleComponent text="48" flex={0} />
              </RowComponent>
            </View>
          </CardContent>
        </SectionComponent>
      </View>
    </Container>
  );
};

export default GrabOrders;
