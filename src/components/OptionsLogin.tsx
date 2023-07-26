import auth from '@react-native-firebase/auth';
import React, {useEffect} from 'react';
// import {AccessToken, LoginManager} from 'react-native-fbsdk-next';
import {ButtonComponent, DividerComponent, SpaceComponent} from '.';
import {appColors} from '../constants/appColors';
import {SectionComponent} from './SectionComponent';

const OptionsLogin = () => {
  // const handleLoginWithFacebook = async () => {
  //   const result = await LoginManager.logInWithPermissions([
  //     'public_profile',
  //     'email',
  //   ]);

  //   if (result.isCancelled) {
  //     console.log('Người dùng không đăng nhập');
  //   }

  //   const data = await AccessToken.getCurrentAccessToken();

  //   if (!data) {
  //     console.log('Không lấy được access token facebook');
  //     return;
  //   } else {
  //     const facebookCredential = auth.FacebookAuthProvider.credential(
  //       data.accessToken,
  //     );

  //     try {
  //       await auth()
  //         .signInWithCredential(facebookCredential)
  //         .then(async userCredential => {
  //           const user = userCredential.user;

  //           if (user) {
  //             console.log(user);
  //           }
  //         });
  //     } catch (error) {
  //       console.log('Đăng nhập với facebook thất bại: ', error);
  //     }
  //   }
  // };

  return (
    <SectionComponent>
      <DividerComponent text="Or" />
      <SpaceComponent height={12} />
      <ButtonComponent
        text="Login with Google"
        onPress={() => {}}
        color={appColors.error}
      />
      <SpaceComponent height={8} />
      <ButtonComponent
        text="Login with Facebook"
        onPress={() => {}}
        color={appColors.info4}
      />
    </SectionComponent>
  );
};

export default OptionsLogin;
