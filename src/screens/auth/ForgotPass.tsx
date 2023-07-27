import React, {useState} from 'react';
import {
  ButtonComponent,
  Container,
  InputCompoment,
  SectionComponent,
  TextComponent,
} from '../../components';
import {Validate} from '../../utils/validate';
import auth from '@react-native-firebase/auth';
import {showToast} from '../../utils/showToast';
import {appColors} from '../../constants/appColors';

const ForgotPass = () => {
  return (
    <Container
      title="Forgot password"
      back
      isScroll
      backgroundColor={appColors.white}>
      <SectionComponent>
        <TextComponent text="Forgot password" flex={0} />
      </SectionComponent>
    </Container>
  );
};

export default ForgotPass;
