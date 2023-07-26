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
  const [email, setEmail] = useState('');
  const [helpEmail, setHelpEmail] = useState('');

  const handleResendPass = () => {
    if (!email) {
      setHelpEmail('Please enter your email');
    } else {
      const validate = Validate.email(email);

      if (!validate) {
        setHelpEmail('Email invalid!');
      } else {
        setHelpEmail('');
        // console.log('resenpass');

        auth()
          .sendPasswordResetEmail(email)
          .then(() => {
            showToast(
              'an email for change password sended to your inbox, please check in folowing the guild to change your account',
            );
          })
          .catch(error => {
            showToast(error);
          });
      }
    }
  };

  return (
    <Container
      title="Forgot password"
      back
      isScroll
      backgroundColor={appColors.white}>
      <SectionComponent>
        <InputCompoment
          placeholder="Your email"
          value={email}
          onChange={val => setEmail(val)}
          clear
          helpText={helpEmail}
          type="email-address"
          isCapitalize="none"
          autoComplete="off"
        />
        <ButtonComponent text="Continue" onPress={handleResendPass} />
      </SectionComponent>
    </Container>
  );
};

export default ForgotPass;
