import React from 'react';
import {css} from '@emotion/native';
import {Text, TouchableOpacity} from 'react-native';

export default function Button({
  text,
  backgroundColor,
  color,
  handler,
}: {
  text: string;
  backgroundColor: string;
  color: string;
  handler: Function;
}) {
  return (
    <TouchableOpacity
      style={css`
        width: 100%;
        padding: 16px;
        background-color: ${backgroundColor};
        border-radius: 16px;
        /* position: absolute; */
        /* bottom: 20px; */
      `}
      onPress={() => handler()}>
      <Text
        style={css`
          color: ${color};
          font-family: 'WantedSans-Medium';
          font-size: 16px;
          text-align: center;
        `}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}
