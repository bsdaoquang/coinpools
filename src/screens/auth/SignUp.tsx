import {ArrowLeft2, Lock1, Sms} from 'iconsax-react-native';
import React, {useState} from 'react';
import {
  ButtonComponent,
  Container,
  DividerComponent,
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
import auth from '@react-native-firebase/auth';
import {ModalLoading} from '../../modals/ModalLoading';

const SignUp = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [helpEmail, setHelpEmail] = useState('');
  const [helpPass, setHelpPass] = useState('');
  const [helpConfirmPass, setHelpConfirmPass] = useState('');
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
    } else if (target === 'pass') {
      if (!password) {
        setHelpPass('Please enter your password!');
      } else if (password.length < 6) {
        setHelpPass('Password must contain at least 6 characters');
      } else {
        setHelpPass('');
      }
    } else {
      if (!confirmPass) {
        setHelpConfirmPass('Please re-enter your password againt!');
      } else {
        if (password !== confirmPass) {
          setHelpConfirmPass('Password not match');
        } else {
          setHelpConfirmPass('');
        }
      }
    }
  };

  const handleLogin = () => {
    if (
      email &&
      password &&
      confirmPass &&
      !helpEmail &&
      !helpPass &&
      !helpConfirmPass
    ) {
      setisLoading(true);
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then(userCredential => {
          const user = userCredential.user;
          if (user) {
            setisLoading(false);
            console.log(user);
          }
        })
        .then(error => {
          console.log(error);
          setisLoading(false);
        });
    } else {
      setErrorMessage(
        'Registration failed, Please check your login information',
      );
    }
  };

  return (
    <Container isScroll backgroundColor={appColors.white}>
      <SectionComponent
        styles={{
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: '25%',
        }}>
        <TitleComponent
          text="DUDU"
          flex={0}
          size={32}
          font={fontFamilys.bold}
          color="#585858"
        />
      </SectionComponent>
      <SectionComponent>
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
        <InputCompoment
          placeholder={'Confirm password'}
          value={confirmPass}
          onEnd={() => handleCheckInput('confirm')}
          onChange={val => setConfirmPass(val)}
          helpText={helpConfirmPass}
          prefix={<Lock1 size={20} color={appColors.gray} />}
          isSecure
          show={isShowPass}
          isCapitalize="none"
          setIsShowPass={() => setIsShowPass(!isShowPass)}
        />
      </SectionComponent>
      {errorMessage && (
        <TextComponent text={errorMessage} color={appColors.error} flex={0} />
      )}
      <SectionComponent>
        <ButtonComponent
          disable={isLoading}
          text="Sign up with email"
          onPress={handleLogin}
        />
      </SectionComponent>

      <OptionsLogin />

      <SectionComponent>
        <RowComponent onPress={() => navigation.navigate('Login')}>
          <ArrowLeft2 size={18} color={appColors.gray} />
          <TextComponent text={`Back to Login`} flex={0} size={12} />
        </RowComponent>
      </SectionComponent>

      <ModalLoading visible={isLoading} />
    </Container>
  );
};

export default SignUp;
