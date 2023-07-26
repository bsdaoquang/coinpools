import auth from '@react-native-firebase/auth';
import {Call, Lock1, Sms} from 'iconsax-react-native';
import React, {useEffect, useState} from 'react';
import {
  ImageBackground,
  Image,
  View,
  ScrollView,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import {
  ButtonComponent,
  ButtonIcon,
  Container,
  InputCompoment,
  RowComponent,
  SectionComponent,
  SpaceComponent,
  TextComponent,
  TitleComponent,
} from '../../components';
import {appColors} from '../../constants/appColors';
import {appSize} from '../../constants/appSize';
import {fontFamilys} from '../../constants/fontFamlily';
import {ModalLoading} from '../../modals/ModalLoading';
import {Validate} from '../../utils/validate';
import {ModalAlert} from '../../modals/ModalAlert';
import {decode} from 'html-entities';
import {global} from '../../styles/global';

const SignUp = ({navigation}: any) => {
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setisLoading] = useState(false);
  const [isShowPass, setIsShowPass] = useState(false);
  const [isVisibleModalAlert, setIsVisibleModalAlert] = useState(false);
  const [registerValues, setRegisterValues] = useState<{
    nickname: string;
    phoneNumber: string;
    loginPassword: string;
    fundPassword: string;
  }>({
    nickname: '',
    phoneNumber: '',
    loginPassword: '',
    fundPassword: '',
  });
  const [contryCode, setContryCode] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setIsVisibleModalAlert(true);
    }, 800);
  }, []);

  const handleValue = (val: string, target: string) => {
    console.log(val);
    const items = registerValues;
    items['phoneNumber'] = val;
    setRegisterValues({...items});
  };

  console.log(registerValues);

  // const handleCheckInput = (target: string) => {
  //   setErrorMessage('');
  //   if (target === 'email') {
  //     if (!email || email === '') {
  //       setHelpEmail('Please enter your email!');
  //     } else {
  //       setHelpEmail('');
  //       const validate = Validate.email(email);
  //       if (!validate) {
  //         setHelpEmail('Email invalidate!');
  //       } else {
  //         setHelpEmail('');
  //       }
  //     }
  //   } else if (target === 'pass') {
  //     if (!password) {
  //       setHelpPass('Please enter your password!');
  //     } else if (password.length < 6) {
  //       setHelpPass('Password must contain at least 6 characters');
  //     } else {
  //       setHelpPass('');
  //     }
  //   } else {
  //     if (!confirmPass) {
  //       setHelpConfirmPass('Please re-enter your password againt!');
  //     } else {
  //       if (password !== confirmPass) {
  //         setHelpConfirmPass('Password not match');
  //       } else {
  //         setHelpConfirmPass('');
  //       }
  //     }
  //   }
  // };

  // const handleLogin = () => {
  //   if (
  //     email &&
  //     password &&
  //     confirmPass &&
  //     !helpEmail &&
  //     !helpPass &&
  //     !helpConfirmPass
  //   ) {
  //     setisLoading(true);
  //     auth()
  //       .createUserWithEmailAndPassword(email, password)
  //       .then(userCredential => {
  //         const user = userCredential.user;
  //         if (user) {
  //           setisLoading(false);
  //           console.log(user);
  //         }
  //       })
  //       .then(error => {
  //         console.log(error);
  //         setisLoading(false);
  //       });
  //   } else {
  //     setErrorMessage(
  //       'Registration failed, Please check your login information',
  //     );
  //   }
  // };

  return (
    <Container isScroll top={0}>
      <ImageBackground
        source={require('../../assets/images/login-bg.png')}
        resizeMode="cover"
        style={{
          paddingTop: 32,
          justifyContent: 'center',
          alignItems: 'center',
          height: appSize.height,
        }}>
        <RowComponent
          styles={{
            padding: 16,
            marginBottom: '8%',
          }}>
          <TitleComponent
            text="Register"
            size={32}
            flex={1}
            font={fontFamilys.bold}
            color={appColors.white}
          />
        </RowComponent>
        <SectionComponent
          styles={{
            flex: 1,
            backgroundColor: appColors.white,
            width: appSize.width,
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
            paddingTop: 24,
          }}>
          <SectionComponent styles={{paddingHorizontal: 0}}>
            <RowComponent>
              <TouchableOpacity
                style={[
                  {
                    height: 40,
                    padding: 8,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: appColors.gray7,
                    borderRadius: 8,
                  },
                ]}>
                <TextComponent text="+84" />
              </TouchableOpacity>
              <View style={{marginHorizontal: 8, flex: 1}}>
                <InputCompoment
                  placeholder="Your Phone number"
                  prefix={<Call size={20} color={appColors.gray} />}
                  value={registerValues.phoneNumber}
                  onChange={val => handleValue(val, 'phoneNumber')}
                  flex={1}
                />
              </View>
              <ButtonComponent text="Get" onPress={() => {}} />
            </RowComponent>
          </SectionComponent>
          {errorMessage && (
            <TextComponent
              text={errorMessage}
              color={appColors.error}
              flex={0}
            />
          )}

          <SectionComponent styles={{paddingHorizontal: 0}}>
            <ButtonComponent text="Register" onPress={() => {}} />
          </SectionComponent>
          <RowComponent onPress={() => navigation.goBack()}>
            <TextComponent
              flex={0}
              text="Already have an account? "
              size={12}
            />
            <TextComponent
              flex={0}
              text="Login now"
              color={appColors.primary}
              size={12}
            />
          </RowComponent>
        </SectionComponent>

        {errorMessage && (
          <TextComponent text={errorMessage} color={appColors.error} flex={0} />
        )}
      </ImageBackground>
      <ModalLoading visible={isLoading} />
      <ModalAlert
        visible={false}
        content={
          <>
            <RowComponent>
              <TitleComponent text="Reminder" size={18} flex={0} />
            </RowComponent>
            <ScrollView>
              <TextComponent
                flex={0}
                styles={{textAlign: 'justify', marginBottom: 8}}
                text={`Thank you for your trust in Amazon! To enjoy better Sec-Buying services, we have updated Amazon${decode(
                  '&lsquo;',
                )}s "User Sec-Buying Policy" according to the latest regulatory requirements in Hong Kong, and we would like to explain to you as follows:`}
              />
              <TextComponent
                flex={0}
                styles={{textAlign: 'justify', marginBottom: 8}}
                text={`1. We will collect and use the necessary information in order to provide you with basic functions related to transactions.`}
              />
              <TextComponent
                flex={0}
                styles={{textAlign: 'justify', marginBottom: 8}}
                text={`2. We will take advanced security measures in the industry to ensure the safety of your information.`}
              />
              <TextComponent
                flex={0}
                styles={{textAlign: 'justify', marginBottom: 8}}
                text={`3. We will not obtain, share or provide your information to third parties without your consent.`}
              />
              <TextComponent
                flex={0}
                styles={{textAlign: 'justify', marginBottom: 8}}
                text={`4. You can view and delete your personal information. We will also provide channels for you to deregister your account.`}
              />
              <TextComponent
                flex={0}
                styles={{textAlign: 'justify', marginBottom: 8}}
                text={`5. In order to ensure efficient transactions between users and merchants, withdrawals can be made immediately after completing 60 orders!`}
              />
              <SpaceComponent height={12} />
              <ButtonComponent
                text="I got it!"
                onPress={() => setIsVisibleModalAlert(false)}
              />
            </ScrollView>
          </>
        }
      />
    </Container>
  );
};

export default SignUp;
