import React from 'react';
import {css} from '@emotion/native';
import {Text, View} from 'react-native';
import colors from '../../styles/color';

export default function OtherMessage({content}: {content: string}) {
  return (
    <View
      style={css`
        background-color: ${colors.background.grey};
        padding: 12px 16px;
        border-radius: 100px;
        align-self: flex-start;
        margin-bottom: 16px;
      `}>
      <Text
        style={css`
          color: ${colors.font.white};
          font-family: 'WantedSans-Medium';
          font-size: 16px;
        `}>
        {content}
      </Text>
    </View>
  );
}
