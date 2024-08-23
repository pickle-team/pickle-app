import {css} from '@emotion/native';
import React from 'react';
import {TextInput, View} from 'react-native';
import colors from '../styles/color';

export default function Input({
  placeholder,
  onChangeText,
}: {
  placeholder: string;
  onChangeText: Function;
}) {
  return (
    <View>
      <TextInput
        style={css`
          background-color: ${colors.background.grey};
          font-size: 16px;
          color: ${colors.font.grey};
          padding: 16px 20px;
          border-radius: 20px;
        `}
        placeholder={placeholder}
        placeholderTextColor={colors.font.grey}
        onChangeText={() => onChangeText()}
      />
    </View>
  );
}
