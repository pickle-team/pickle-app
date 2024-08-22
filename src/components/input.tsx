import {css} from '@emotion/native';
import React from 'react';
import {Text, TextInput, View} from 'react-native';
import colors from '../styles/color';
import {useRecoilState} from 'recoil';
import {registerData} from '../utils/atom';

export default function Input({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) {
  const [userInput, setUserInput] = useRecoilState(registerData);
  return (
    <View
      style={css`
        margin: 0 20px;
      `}>
      <Text
        style={css`
          color: ${colors.font.white};
          font-family: 'WantedSans-Medium';
          font-size: 20px;
          margin-bottom: 12px;
        `}>
        {label}
      </Text>
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
        onChangeText={(event: string) => {
          if (label === 'Name') {
            setUserInput({...userInput, name: event});
          } else if (label === 'School') {
            setUserInput({...userInput, school: event});
          }
        }}
      />
    </View>
  );
}
