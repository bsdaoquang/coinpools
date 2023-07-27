import {decode} from 'html-entities';
import {Call, GlobalSearch, Lock, User} from 'iconsax-react-native';
import React, {useEffect, useState} from 'react';
import {ImageBackground, ScrollView} from 'react-native';
import {
  ButtonComponent,
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
import {ModalAlert} from '../../modals/ModalAlert';
import {ModalLoading} from '../../modals/ModalLoading';
import CriptoJs from 'react-native-crypto-js';
import {appInfos} from '../../constants/appInfos';
import firestore from '@react-native-firebase/firestore';
import {showToast} from '../../utils/showToast';

interface HelpText {
  helpFundPass: string;
  helpLoginPass: string;
  helpInvatitation: string;
  helpPhone: string;
  helpNickname: string;
}

interface RegisterForm {
  nickname: string;
  phoneNumber: string;
  loginPassword: string;
  fundPassword: string;
}

const SignUp = ({navigation}: any) => {
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setisLoading] = useState(false);
  const [isShowPass, setIsShowPass] = useState(false);
  const [isShowFundPass, setIsShowFundPass] = useState(false);
  const [isVisibleModalAlert, setIsVisibleModalAlert] = useState(false);
  const [registerValues, setRegisterValues] = useState<RegisterForm>({
    nickname: '',
    phoneNumber: '',
    loginPassword: '',
    fundPassword: '',
  });
  const [invitationCode, setInvitationCode] = useState('');
  const [helpers, setHelpers] = useState<HelpText>({
    helpNickname: '',
    helpFundPass: '',
    helpLoginPass: '',
    helpInvatitation: '',
    helpPhone: '',
  });

  useEffect(() => {
    setTimeout(() => {
      setIsVisibleModalAlert(true);
    }, 800);
  }, []);

  const handleValue = (val: string, target: string) => {
    const items: any = {...registerValues};
    items[`${target}`] = val;
    setRegisterValues({...items});
  };

  const handleRegister = () => {
    const helps: any = {
      helpFundPass: registerValues.fundPassword
        ? ''
        : 'Please enter your fund password!',
      helpLoginPass: registerValues.loginPassword
        ? ''
        : 'Please enter your login password!',
      helpInvatitation: invitationCode
        ? ''
        : 'Invitation code cannot be empty or wrong!',
      helpPhone: registerValues.phoneNumber
        ? ''
        : 'Please enter your phone number!',
      helpNickname: registerValues.nickname
        ? ''
        : 'Please enter your nick name!',
    };

    setHelpers(helps);

    let valid = true;
    for (const i in helps) {
      if (helps[i]) {
        valid = false;
      }
    }

    if (valid) {
      const filter = firestore()
        .collection('users')
        .where('phoneNumer', '==', registerValues.phoneNumber);

      filter.get().then(async snap => {
        if (snap.empty) {
          if (invitationCode !== '123456') {
            setHelpers({
              ...helpers,
              helpInvatitation: 'Invitation is wrong!',
            });
          } else {
            const data = {
              ...registerValues,
              loginPassword: CriptoJs.AES.encrypt(
                registerValues.loginPassword,
                appInfos.code,
              ).toString(),
            };
            setisLoading(true);

            await firestore()
              .collection('users')
              .add(data)
              .then(() => {
                showToast('Register successfully!');
                navigation.goBack();
                setisLoading(false);
              })
              .catch(e => {
                console.log(e);
                setisLoading(false);
              });
          }
        } else {
          setHelpers({
            ...helpers,
            helpPhone: 'Account is existring!',
          });
        }
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
          }}>
          <TitleComponent
            text="Register"
            size={32}
            flex={1}
            font={fontFamilys.bold}
            color={appColors.white}
          />
        </RowComponent>

        <ScrollView
          style={{
            flex: 1,
            backgroundColor: appColors.white,
            width: appSize.width,
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
            padding: 20,
          }}>
          <InputCompoment
            label="Nickname"
            placeholder="Please enter a nickname"
            value={registerValues.nickname}
            onChange={val => handleValue(val, 'nickname')}
            max={100}
            clear
            prefix={<User size={20} color={appColors.gray} />}
            helpText={helpers.helpNickname}
          />

          <InputCompoment
            label="Mobile Number"
            value={registerValues.phoneNumber}
            onChange={val => handleValue(val, 'phoneNumber')}
            clear
            type="phone-pad"
            prefix={<Call size={20} color={appColors.gray} />}
            helpText={helpers.helpPhone}
          />
          <InputCompoment
            label="Login Password"
            value={registerValues.loginPassword}
            onChange={val => handleValue(val, 'loginPassword')}
            show={isShowPass}
            setIsShowPass={() => setIsShowPass(!isShowPass)}
            isSecure
            helpText={helpers.helpLoginPass}
            prefix={<Lock size={20} color={appColors.gray} />}
          />

          <InputCompoment
            label="Invitation code"
            value={invitationCode}
            onChange={val => setInvitationCode(val)}
            clear
            helpText={helpers.helpInvatitation}
            type="number-pad"
            prefix={<GlobalSearch size={20} color={appColors.gray} />}
          />
          <InputCompoment
            label="Fund Password"
            value={registerValues.fundPassword}
            onChange={val => handleValue(val, 'fundPassword')}
            show={isShowFundPass}
            setIsShowPass={() => setIsShowFundPass(!isShowFundPass)}
            isSecure
            prefix={<Lock size={20} color={appColors.gray} />}
            helpText={helpers.helpFundPass}
          />

          {errorMessage && (
            <TextComponent
              text={errorMessage}
              color={appColors.error}
              flex={0}
            />
          )}

          <SectionComponent styles={{paddingHorizontal: 0}}>
            <ButtonComponent text="Register" onPress={handleRegister} />
          </SectionComponent>
        </ScrollView>
        <RowComponent
          onPress={() => navigation.goBack()}
          styles={{paddingVertical: 12}}>
          <TextComponent flex={0} text="Already have an account? " size={12} />
          <TextComponent
            flex={0}
            text="Login now"
            color={appColors.primary}
            size={12}
          />
        </RowComponent>
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
