import {
  ArrowLeft2,
  Home3,
  Refresh,
  Task,
  UserOctagon,
} from 'iconsax-react-native';
import React from 'react';
import {Image, ImageBackground, ScrollView} from 'react-native';
import {
  ButtonComponent,
  ButtonIcon,
  CardContent,
  Container,
  ListItemComponent,
  RowComponent,
  SectionComponent,
  TextComponent,
  TitleComponent,
} from '../../components';
import {appColors} from '../../constants/appColors';
import {appSize} from '../../constants/appSize';
import {global} from '../../styles/global';
import {showToast} from '../../utils/showToast';

const Infomation = ({navigation}: any) => {
  const languages = [
    {
      id: 'en',
      title: 'English',
    },
    {
      id: 'chinese',
      title: 'Chinese',
    },
    {
      id: 'malaysia',
      title: 'Malaysia',
    },
    {
      id: 'japan',
      title: 'Japan',
    },
    {
      id: 'thai',
      title: 'Thai',
    },
    {
      id: 'vi',
      title: 'Vietnam',
    },
  ];
  return (
    <Container top={0} backgroundColor="#f3f3f3">
      <ImageBackground
        source={require('../../assets/images/ajdajd.png')}
        resizeMode="cover"
        imageStyle={{
          height: '35%',
        }}
        style={{
          paddingTop: 32,
          height: appSize.height,
        }}>
        <RowComponent styles={{paddingVertical: 12}}>
          <ButtonIcon
            icon={<ArrowLeft2 size={22} color={appColors.white} />}
            onPress={() => navigation.goBack()}
          />
          <TitleComponent text="Persional Infomation" color={appColors.white} />
        </RowComponent>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{marginBottom: 40}}>
          <SectionComponent>
            <CardContent>
              <ListItemComponent
                title="Avatar"
                icon={<UserOctagon size={22} color={appColors.primary} />}
                onPress={() => showToast('Comming soon')}
                right={
                  <Image
                    source={require('../../assets/images/avatar-default.png')}
                    style={[
                      global.avatar,
                      {
                        width: 36,
                        height: 36,
                      },
                    ]}
                  />
                }
              />
              <ListItemComponent
                title="Avatar"
                icon={<UserOctagon size={22} color={appColors.primary} />}
                onPress={() => showToast('Comming soon')}
                right={
                  <TextComponent
                    text="050***413"
                    flex={0}
                    size={12}
                    color={appColors.gray}
                  />
                }
              />
            </CardContent>
          </SectionComponent>
          <SectionComponent>
            <CardContent>
              <ListItemComponent
                title="Login Password Management"
                icon={<Home3 size={22} color={appColors.primary} />}
                onPress={() => showToast('Comming soon')}
              />
              <ListItemComponent
                title="Transaction Password Management"
                icon={<Refresh size={22} color={appColors.primary} />}
                onPress={() => showToast('Comming soon')}
              />
              <ListItemComponent
                title="Delivery Address Management"
                icon={<Task size={22} color={appColors.primary} />}
                onPress={() => showToast('Comming soon')}
              />
            </CardContent>
          </SectionComponent>
          <SectionComponent>
            {languages.map(lang => (
              <ButtonComponent
                text={lang.title}
                key={lang.id}
                styles={{marginBottom: 12, borderRadius: 100}}
                onPress={() => showToast('Comming soon')}
              />
            ))}
          </SectionComponent>
        </ScrollView>
      </ImageBackground>
    </Container>
  );
};

export default Infomation;
