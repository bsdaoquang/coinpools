import {Notification, SearchNormal1, Setting4} from 'iconsax-react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {
  CardProduct,
  Container,
  RowComponent,
  SectionComponent,
  SpaceComponent,
  TabbarComponent,
  TextComponent,
} from '../components';
import {LoadingComponent} from '../components/LoadingComponent';
import {appColors} from '../constants/appColors';

const HomeScreen = ({navigation}: any) => {
  return (
    <Container
      title="DuDu"
      right={
        <TouchableOpacity>
          <Notification size={22} color={appColors.text} />
        </TouchableOpacity>
      }
      isScroll>
      <TextComponent text="fafsfs" />
    </Container>
  );
};

export default HomeScreen;
