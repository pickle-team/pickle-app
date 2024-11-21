import React from 'react';
import {css} from '@emotion/native';
import {Text, View} from 'react-native';
import colors from '../../styles/color';

export default function MyMessage({content}: {content: string}) {
  return (
    <View
      style={css`
        background-color: ${colors.background.white};
        padding: 12px 16px;
        border-radius: 100px;
        align-self: flex-end;
        margin-bottom: 16px;
      `}>
      <Text
        style={css`
          color: ${colors.font.black};
          font-family: 'WantedSans-Medium';
          font-size: 16px;
        `}>
        {content}
      </Text>
    </View>
  );
}
