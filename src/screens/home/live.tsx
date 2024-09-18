import React from 'react';
import {css} from '@emotion/native';
import {Text, View} from 'react-native';
import colors from '../../styles/color';

export default function Live() {
  return (
    <View>
      <Text
        style={css`
          color: ${colors.font.white};
          font-family: 'WantedSans-SemiBold';
          font-size: 20px;
          margin-bottom: 6px;
        `}>
        Live
      </Text>
    </View>
  );
}
