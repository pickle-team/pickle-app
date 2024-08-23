import React from 'react';
import {css} from '@emotion/native';
import {Text, View} from 'react-native';
import colors from '../styles/color';

export default function Header({title}: {title: string}) {
  return (
    <View
      style={css`
        padding: 8px 0;
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
