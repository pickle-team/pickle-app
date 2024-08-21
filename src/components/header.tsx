import React from 'react';
import {css} from '@emotion/native';
import {Text, View} from 'react-native';
import colors from '../style/color';

export default function Header({title}: {title: string}) {
  return (
    <View
      style={css`
        padding: 8px 20px;
      `}>
      <Text
        style={css`
          font-size: 28px;
          font-family: 'WantedSans-Medium';
          color: ${colors.font.white};
        `}>
        {title}
      </Text>
    </View>
  );
}
