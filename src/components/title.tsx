import {css} from '@emotion/native';
import React from 'react';
import {Text} from 'react-native';
import colors from '../styles/color';

export default function Title({title}: {title: string}) {
  return (
    <Text
      style={css`
        color: ${colors.font.white};
        font-family: 'WantedSans-Medium';
        font-size: 20px;
        margin-bottom: 12px;
      `}>
      {title}
    </Text>
  );
}
