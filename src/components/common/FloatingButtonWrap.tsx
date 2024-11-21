import React from 'react';
import {Platform, ScrollView, View} from 'react-native';

import {css} from '@emotion/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import colors from '../../styles/color';
import FloatingButton from './FloatingButton';

export default function FloatingButtonWrap({
  children,
  buttonContent,
  buttonOnPress,
  padding,
}: {
  children: React.ReactNode;
  buttonContent: string;
  buttonOnPress: Function;
  padding: boolean;
}) {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={css`
        width: 100%;
        height: 100%;
        background-color: ${colors.background.black};
      `}>
      <View
        style={css`
          height: ${Platform.OS === 'ios' ? `${insets.top}px` : ''};
          background-color: ${colors.background.black};
        `}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={css`
          padding-top: ${Platform.OS === 'ios' ? '' : '20px'};
          padding-left: ${padding ? '20px' : ''};
          padding-right: ${padding ? '20px' : ''};
        `}>
        {children}
        <View
          style={css`
            height: 40px;
          `}
        />
      </ScrollView>
      <FloatingButton content={buttonContent} onPress={() => buttonOnPress()} />
    </View>
  );
}
