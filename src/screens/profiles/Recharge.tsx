import React, {useState} from 'react';
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
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {appSize} from '../../constants/appSize';
import {appColors} from '../../constants/appColors';

const Recharge = () => {
  const [amount, setAmount] = useState('');

  const amounts = [50, 100, 200, 300, 500, 1000, 2000, 3000, 5000, 10000];

  const renderAmountButton = (item: number, index: number) => (
    <TouchableOpacity
      key={`amount${index}`}
      style={styles.buttonAmount}
      onPress={() => setAmount(item.toString())}>
      <TextComponent text={item.toString()} flex={0} color={appColors.white} />
    </TouchableOpacity>
  );

  return (
    <Container barStyle="dark-content" back isScroll title="Recharge">
      <SectionComponent>
        <TextComponent text="Recharge amount" />
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
            />
          </View>
        </RowComponent>
        <RowComponent justify="flex-start" styles={{flexWrap: 'wrap'}}>
          {amounts.map((item, index) => renderAmountButton(item, index))}
        </RowComponent>
      </SectionComponent>
      <SectionComponent>
        <ButtonComponent
          text="Next step"
          onPress={() => {}}
          color={appColors.secondary}
        />
      </SectionComponent>
    </Container>
  );
};

const styles = StyleSheet.create({
  buttonAmount: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 5,
    width: (appSize.width - 52) / 4,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    backgroundColor: appColors.primary,
    marginRight: 5,
  },
});

export default Recharge;
