import React from 'react';
import {css} from '@emotion/native';
import {Text, TouchableOpacity} from 'react-native';
import colors from '../styles/color';

export default function Button({
  text,
  handler,
}: {
  text: string;
  handler: Function;
}) {
  return (
    <TouchableOpacity
      style={css`
        width: 100%;
        padding: 16px;
        background-color: ${colors.background.white};
        border-radius: 16px;
        position: absolute;
        bottom: 20px;
      `}
      onPress={() => handler()}>
      <Text
        style={css`
          color: ${colors.font.black};
          font-family: 'WantedSans-Medium';
          font-size: 16px;
          text-align: center;
        `}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}
