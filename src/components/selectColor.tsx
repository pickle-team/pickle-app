import {css} from '@emotion/native';
import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import colors from '../style/color';
import Profile from './profile';

function getRandomHexCode() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export default function SelectColor() {
  const [color, setColor] = useState<string>('#FFFFFF');
  return (
    <View
      style={css`
        padding: 0 20px;
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
        <Profile color={color} />
        <Text
          style={css`
            color: ${colors.font.grey};
            font-family: 'WantedSans-Medium';
            font-size: 16px;
            margin-left: 12px;
          `}>
          {color}
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
            setColor(getRandomHexCode());
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
