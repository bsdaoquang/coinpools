import React, {useState} from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import {
  ButtonComponent,
  CardContent,
  Container,
  InputCompoment,
  RowComponent,
  SectionComponent,
  SpaceComponent,
  TagComponent,
  TextComponent,
  TitleComponent,
} from '../../components';
import {appColors} from '../../constants/appColors';
import {fontFamilys} from '../../constants/fontFamlily';

const Withdrawal = () => {
  const [amount, setAmount] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('050****413');
  const [fundPassword, setFundPassword] = useState('');

  const balance = -5539.93;

  return (
    <Container barStyle="dark-content" back isScroll title="Withdrawal">
      <SectionComponent>
        <CardContent styles={{backgroundColor: '#f3f3f3'}}>
          <RowComponent>
            <TextComponent text="Withdrawal amount" />
            <TagComponent color={appColors.primary} text="0%" />
          </RowComponent>
          <RowComponent styles={{marginTop: 8, marginBottom: 12}}>
            <TitleComponent text="USDT" flex={0} />
            <SpaceComponent width={8} />
            <View style={{flex: 1}}>
              <InputCompoment
                placeholder="0"
                styles={{marginBottom: 0}}
                value={amount}
                onChange={val => setAmount(val)}
                type="number-pad"
                max={5}
                font={fontFamilys.bold}
                size={18}
                clear
              />
            </View>
          </RowComponent>
          <RowComponent justify="flex-start">
            <TextComponent
              text={`Account balance: ${balance} USDT `}
              size={12}
            />
            <TouchableOpacity onPress={() => setAmount(balance.toString())}>
              <TextComponent
                size={12}
                color={appColors.primary}
                text="All"
                flex={0}
              />
            </TouchableOpacity>
          </RowComponent>
        </CardContent>
      </SectionComponent>
      <SectionComponent>
        <CardContent styles={{backgroundColor: '#f3f3f3'}}>
          <RowComponent>
            <TextComponent
              font={fontFamilys.medium}
              text="Phone number"
              color={appColors.gray}
              flex={0}
            />
            <InputCompoment
              flex={1}
              styles={{marginBottom: 0}}
              value={phoneNumber}
              onChange={val => setPhoneNumber(val)}
              inputStyles={{
                textAlign: 'right',
              }}
            />
          </RowComponent>
          <RowComponent styles={{height: 38}}>
            <TextComponent
              font={fontFamilys.medium}
              text="Wallet address"
              color={appColors.gray}
              flex={0}
            />

            <TextComponent
              text="TBuaePy****VCt6ETkDknwe6295qHVV"
              styles={{textAlign: 'right'}}
              line={1}
            />
          </RowComponent>
          <RowComponent styles={{height: 32}}>
            <TextComponent
              font={fontFamilys.medium}
              text="Network"
              color={appColors.gray}
              flex={0}
            />
            <TextComponent
              text="trc20"
              styles={{textAlign: 'right'}}
              line={1}
            />
          </RowComponent>
          <RowComponent>
            <TextComponent
              font={fontFamilys.medium}
              text="Fund password"
              color={appColors.gray}
              flex={0}
            />
            <InputCompoment
              flex={1}
              styles={{marginBottom: 0}}
              value={fundPassword}
              onChange={val => setPhoneNumber(val)}
              inputStyles={{
                textAlign: 'right',
              }}
            />
          </RowComponent>
        </CardContent>
      </SectionComponent>
      <SectionComponent>
        <ButtonComponent
          text="Immediate withdrawal"
          onPress={() => {}}
          color={appColors.secondary}
        />
      </SectionComponent>
    </Container>
  );
};

const styles = StyleSheet.create({});

export default Withdrawal;
