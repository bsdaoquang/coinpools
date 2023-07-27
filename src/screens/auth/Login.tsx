import CheckBox from '@react-native-community/checkbox';
import {Call, Lock1, Messages1} from 'iconsax-react-native';
import React, {useState} from 'react';
import {Image, ImageBackground, TouchableOpacity} from 'react-native';
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
import {global} from '../../styles/global';
import firestore from '@react-native-firebase/firestore';
import CriptoJs from 'react-native-crypto-js';
import {appInfos} from '../../constants/appInfos';
import {JSHmac} from 'react-native-hash';
import {useDispatch} from 'react-redux';
import {addAuth} from '../../redux/reducers/authReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {showToast} from '../../utils/showToast';

const Login = ({navigation}: any) => {
  const [phoneNumber, setphoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [helpphoneNumber, setHelpphoneNumber] = useState('');
  const [helpPass, setHelpPass] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setisLoading] = useState(false);
  const [isShowPass, setIsShowPass] = useState(false);
  const [isRememberPass, setIsRememberPass] = useState(true);

  const handleCheckInput = (target: string) => {
    setErrorMessage('');
    if (target === 'phoneNumber') {
      if (!phoneNumber || phoneNumber === '') {
        setHelpphoneNumber('Please enter your phone number!');
      } else {
        setHelpphoneNumber('');
      }
    } else {
      if (!password) {
        setHelpPass('Please enter your password!');
      } else {
        setHelpPass('');
      }
    }
  };

  const dispatch = useDispatch();

  const handleLogin = async () => {
    if (phoneNumber && password && !helpphoneNumber && !helpPass) {
      // search on firebase
      const filter = firestore()
        .collection('users')
        .where('phoneNumber', '==', phoneNumber);
      setisLoading(true);
      await filter
        .get()
        .then(async snap => {
          if (snap.empty) {
            setErrorMessage('Login failed, please try again!');
          } else {
            const items: any = [];
            snap.forEach(item => {
              items.push({
                uid: item.id,
                ...item.data(),
              });
            });

            const item = items.find(
              (element: any) => element.phoneNumber === phoneNumber,
            );

            if (item) {
              const pass = await JSHmac(
                password,
                appInfos.code,
                appInfos.hashMac256,
              );

              if (pass === item.loginPassword) {
                dispatch(addAuth(item));

                if (isRememberPass) {
                  await AsyncStorage.setItem('user', JSON.stringify(item));
                }

                showToast('Login successfuly, welcome back!');
              } else {
                setErrorMessage(
                  'Login failed, please check your phone number / password and try again!',
                );
              }
            } else {
              setErrorMessage('Account not found!');
            }
          }
        })
        .catch(error => {
          console.log(error);
          setisLoading(false);
        });
    }
  };

  return (
    <Container top={0} isScroll>
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
            text="Login"
            size={32}
            flex={1}
            font={fontFamilys.bold}
            color={appColors.white}
          />

          <ButtonIcon
            icon={
              <Image
                source={
                  1 > 2
                    ? require(`../../assets/images/icons8-vietnam-96.png`)
                    : require(`../../assets/images/icons8-english-96.png`)
                }
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: 100,
                }}
                resizeMode="contain"
              />
            }
            onPress={() => {}}
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
            <InputCompoment
              label="Mobile Number"
              placeholder="Your phone number"
              value={phoneNumber}
              helpText={helpphoneNumber}
              onChange={val => setphoneNumber(val)}
              prefix={<Call size={20} color={appColors.gray} />}
              clear
              onEnd={() => handleCheckInput('phoneNumber')}
              autoComplete="off"
              isCapitalize="none"
              type="phone-pad"
            />
            <InputCompoment
              label="Password"
              placeholder={'Password'}
              value={password}
              onEnd={() => handleCheckInput('pass')}
              onChange={val => setPassword(val)}
              helpText={helpPass}
              prefix={<Lock1 size={20} color={appColors.gray} />}
              isSecure
              show={isShowPass}
              isCapitalize="none"
              setIsShowPass={() => setIsShowPass(!isShowPass)}
            />
            <RowComponent>
              <RowComponent
                styles={{flex: 1}}
                onPress={() => setIsRememberPass(!isRememberPass)}>
                <CheckBox
                  style={{
                    padding: 0,
                    margin: 0,
                    marginLeft: -2,
                  }}
                  value={isRememberPass}
                  // disabled={formItem.viewOnly}
                  tintColors={{true: appColors.primary, false: appColors.gray}}
                  onCheckColor={appColors.primary}
                  onFillColor={appColors.primary}
                />

                <TextComponent text="Remember password?" size={12} flex={1} />
              </RowComponent>
              <TouchableOpacity
                onPress={() => navigation.navigate('ForgotPass')}>
                <TextComponent
                  text="Forgot password?"
                  color={appColors.primary}
                  size={12}
                  flex={0}
                />
              </TouchableOpacity>
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
            <ButtonComponent text="Log in" onPress={handleLogin} />
          </SectionComponent>
          <TouchableOpacity style={[global.rowCenter]}>
            <Messages1 size={20} color={appColors.primary} />
            <SpaceComponent width={8} />
            <TextComponent
              text="Customer Service"
              flex={0}
              size={12}
              color={appColors.primary}
            />
          </TouchableOpacity>
        </SectionComponent>
        <SectionComponent>
          <RowComponent onPress={() => navigation.navigate('SignIn')}>
            <TextComponent text="No account yet?" flex={0} size={12} />
            <SpaceComponent width={4} />
            <TextComponent
              size={12}
              text="Go to register"
              flex={0}
              color={appColors.primary}
            />
          </RowComponent>
        </SectionComponent>
      </ImageBackground>
    </Container>
  );
};

export default Login;
