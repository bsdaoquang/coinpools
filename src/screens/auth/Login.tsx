import auth from '@react-native-firebase/auth';
import {Lock1, Sms} from 'iconsax-react-native';
import React, {useState} from 'react';
import {ImageBackground, TouchableOpacity, View} from 'react-native';
import {
  ButtonComponent,
  Container,
  InputCompoment,
  OptionsLogin,
  RowComponent,
  SectionComponent,
  TextComponent,
  TitleComponent,
} from '../../components';
import {appColors} from '../../constants/appColors';
import {fontFamilys} from '../../constants/fontFamlily';
import {Validate} from '../../utils/validate';
import {appSize} from '../../constants/appSize';
import {global} from '../../styles/global';

const Login = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [helpEmail, setHelpEmail] = useState('');
  const [helpPass, setHelpPass] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setisLoading] = useState(false);
  const [isShowPass, setIsShowPass] = useState(false);

  const handleCheckInput = (target: string) => {
    setErrorMessage('');
    if (target === 'email') {
      if (!email || email === '') {
        setHelpEmail('Please enter your email!');
      } else {
        setHelpEmail('');
        const validate = Validate.email(email);
        if (!validate) {
          setHelpEmail('Email invalidate!');
        } else {
          setHelpEmail('');
        }
      }
    } else {
      if (!password) {
        setHelpPass('Please enter your password!');
      } else {
        setHelpPass('');
      }
    }
  };

  const handleLogin = () => {
    if (email && password && !helpEmail && !helpPass) {
      auth().signInWithEmailAndPassword(email, password);
    } else {
      setErrorMessage('Please check your login information');
    }
  };

  return (
    <Container top={0}>
      <ImageBackground
        source={require('../../assets/images/login-bg.png')}
        resizeMode="cover"
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: appSize.height,
        }}></ImageBackground>

      {/*    <SectionComponent>
        <InputCompoment
          placeholder="Email"
          value={email}
          helpText={helpEmail}
          onChange={val => setEmail(val)}
          prefix={<Sms size={20} color={appColors.gray} />}
          clear
          onEnd={() => handleCheckInput('email')}
          autoComplete="off"
          isCapitalize="none"
          type="email-address"
        />
        <InputCompoment
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
        <RowComponent
          styles={{justifyContent: 'flex-end'}}
          onPress={() => navigation.navigate('ForgotPass')}>
          <TextComponent
            text="Forgot password?"
            color={appColors.info4}
            size={12}
            flex={0}
          />
        </RowComponent>
      </SectionComponent>
      {errorMessage && (
        <TextComponent text={errorMessage} color={appColors.error} flex={0} />
      )}
      <SectionComponent>
        <ButtonComponent text="Login with email" onPress={handleLogin} />
      </SectionComponent>
      <OptionsLogin />
      <SectionComponent>
        <RowComponent>
          <TextComponent
            text={`Dont't have account? `}
            flex={0}
            size={12}
            color={appColors.gray}
          />
          <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
            <TextComponent
              text="Sign Up"
              color={appColors.info4}
              size={12}
              flex={0}
            />
          </TouchableOpacity>
        </RowComponent>
      </SectionComponent> */}
    </Container>
  );
};

export default Login;
