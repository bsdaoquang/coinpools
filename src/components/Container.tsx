import {ArrowLeft2} from 'iconsax-react-native';
import React, {
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import {
  BackgroundPropType,
  ImageBackground,
  NativeScrollEvent,
  NativeSyntheticEvent,
  RefreshControl,
  ScrollView,
  StatusBar,
  StatusBarStyle,
  TouchableOpacity,
  View,
} from 'react-native';
import {RowComponent, TextComponent} from '.';
import {appColors} from '../constants/appColors';
import {appSize} from '../constants/appSize';
import {fontFamilys} from '../constants/fontFamlily';
import {global} from '../styles/global';
import {useNavigation} from '@react-navigation/native';

const wait = (timeout: number) => {
  return new Promise((resolve: any) => setTimeout(resolve, timeout));
};

const Container = ({
  children,
  onRefesh,
  backgroundColor,
  back,
  title,
  right,
  left,
  top,
  isScroll,
  isFlex,
  search,
  onScrollToTop,
  onBack,
  barStyle,
}: {
  top?: number;
  children: any;
  backgroundColor?: string;
  onRefesh?: () => void;
  title?: string;
  back?: boolean;
  right?: any;
  left?: any;
  isScroll?: boolean;
  isFlex?: boolean;
  search?: ReactNode;
  onScrollToTop?: boolean;
  flexRight?: number;
  barStyle?: StatusBarStyle;
  onBack?: () => void;
}) => {
  const [contentY, setContentY] = useState<number>(0);
  const [refeshing, setRefeshing] = useState(false);

  const scrollRef = useRef<any>();
  const navigation = useNavigation();
  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    setContentY(event.nativeEvent.contentOffset.y);
  };

  useEffect(() => {
    onScrollToTop &&
      scrollRef.current?.scrollTo({
        y: 0,
        animated: true,
      });
  }, [onScrollToTop]);

  const handleRefesh = useCallback(() => {
    if (onRefesh) {
      setRefeshing(true);

      wait(2000).then(() => {
        onRefesh();
        setRefeshing(false);
      });
    }
  }, []);

  const renderContent = (
    <>
      <StatusBar
        barStyle={barStyle ? barStyle : 'light-content'}
        translucent
        backgroundColor="transparent"
      />
      {title || back || left || right ? (
        <View
          style={{
            ...global.rowCenter,
            // paddingTop: Platform.OS === 'ios' ? 58 : 42,
            padding: 16,
            paddingVertical: 10,
          }}>
          <RowComponent>
            {left && left}
            {back && (
              <TouchableOpacity
                style={{paddingRight: 10}}
                onPress={() => (onBack ? onBack() : navigation.goBack())}>
                <ArrowLeft2 size={24} color={appColors.text} />
              </TouchableOpacity>
            )}

            {search
              ? search
              : title && (
                  <TextComponent
                    text={title}
                    line={1}
                    styles={{
                      ...global.text,
                      flex: 1,
                      fontFamily: fontFamilys.bold,
                      fontSize: appSize.titleSize,
                    }}
                  />
                )}

            {right ? right : <View style={{width: 10}} />}
          </RowComponent>
        </View>
      ) : null}

      {isScroll ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: isFlex ? 1 : 0}}
          automaticallyAdjustContentInsets={false}
          ref={scrollRef}
          scrollEventThrottle={16}
          refreshControl={
            onRefesh ? (
              <RefreshControl refreshing={refeshing} onRefresh={handleRefesh} />
            ) : undefined
          }
          onScroll={event => handleScroll(event)}
          style={{
            ...global.container,
            flex: 1,
            backgroundColor: backgroundColor ?? appColors.backgroundColor,
          }}>
          {children}
        </ScrollView>
      ) : (
        <View
          style={{
            ...global.container,

            backgroundColor: backgroundColor ?? appColors.backgroundColor,
          }}>
          {children}
        </View>
      )}
    </>
  );

  return (
    <View
      style={{
        paddingTop: top ?? 32,
        flex: 1,
        backgroundColor: backgroundColor ? backgroundColor : appColors.white,
      }}>
      {renderContent}
    </View>
  );
};

export default Container;
