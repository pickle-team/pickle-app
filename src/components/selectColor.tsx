import {css} from '@emotion/native';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import colors from '../styles/color';
import Profile from './profile';
import {getRandomHexCode} from '../utils/getRandomHexCode';
import {useRecoilState} from 'recoil';
import {registerData} from '../utils/atom';

export default function SelectColor() {
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
        Color
      </Text>
      <View
        style={css`
          display: flex;
          flex-direction: row;
          align-items: center;
        `}>
        <Profile color={userInput.color} />
        <Text
          style={css`
            color: ${colors.font.grey};
            font-family: 'WantedSans-Medium';
            font-size: 16px;
            margin-left: 12px;
          `}>
          {userInput.color}
        </Text>
        <TouchableOpacity
          style={css`
            background-color: ${colors.background.grey};
            padding: 8px 14px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 12px;
            position: absolute;
            right: 0;
          `}
          onPress={() => {
            setUserInput({...userInput, color: getRandomHexCode()});
          }}>
          <Text
            style={css`
              color: ${colors.font.white};
              font-family: 'WantedSans-Medium';
            `}>
            Retry
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
