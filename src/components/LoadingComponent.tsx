import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {appColors} from '../constants/appColors';
import TextComponent from './TextComponent';

interface Props {
  isLoading: boolean;
  value: number;
  message?: string;
}

export const LoadingComponent = (props: Props) => {
  const {isLoading, value, message} = props;

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
      }}>
      {isLoading ? (
        <ActivityIndicator size={20} color={appColors.gray} />
      ) : (
        value === 0 && (
          <>
            <TextComponent
              text="Empty data"
              styles={{
                marginTop: 8,
                color: appColors.description,
                textAlign: 'center',
              }}
              size={12}
              flex={0}
            />
          </>
        )
      )}
    </View>
  );
};
