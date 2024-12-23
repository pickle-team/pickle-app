import React from 'react';
import {css} from '@emotion/native';
import {Platform, ScrollView, View} from 'react-native';
import colors from '../../styles/color';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export default function ScreenWrap({
  children,
  topColor,
  padding,
}: {
  children: React.ReactNode;
  topColor: string;
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
          height: ${`${insets.top}px`};
          background-color: ${topColor};
        `}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={css`
          padding-top: ${Platform.OS === 'ios' ? '' : '20px'};
          background-color: ${colors.background.black};
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
    </View>
  );
}
