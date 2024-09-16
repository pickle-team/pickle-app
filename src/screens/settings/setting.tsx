import React from 'react';
import {Text, View} from 'react-native';
import {css} from '@emotion/native';
import colors from '../../styles/color';
import Profile from '../../components/profile';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export default function Setting() {
  const insets = useSafeAreaInsets();
  return (
    <View>
      <View
        style={css`
          background-color: ${colors.background.grey};
          margin-top: ${'-' + insets.top + 'px'};
        `}>
        <Profile width={80} height={80} size={28} color="#fff" />
        <View>
          <Text
            style={css`
              color: ${colors.font.white};
              font-family: 'WantedSans-SemiBold';
              font-size: 24px;
            `}>
            Sungmin Cho
          </Text>
          <Text
            style={css`
              color: ${colors.font.grey};
              font-family: 'WantedSans-Medium';
              font-size: 14px;
            `}>
            Korea Digital Media High School
          </Text>
        </View>
      </View>
    </View>
  );
}
