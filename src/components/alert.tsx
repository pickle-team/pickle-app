import React from 'react';
import {css, ReactNativeStyle} from '@emotion/native';
import {Dimensions, Text, TouchableOpacity, View} from 'react-native';
import colors from '../styles/color';

interface Button {
  text: string;
  touchableOpacityStyle: ReactNativeStyle;
  textStyle: ReactNativeStyle;
  onPress: Function;
}

export default function Alert({
  title,
  content,
  buttons,
}: {
  title: string;
  content: string;
  buttons: Button[];
}) {
  return (
    <View
      style={css`
        width: ${Dimensions.get('window').width + 'px'};
        height: 100%;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        left: -20px;
      `}>
      <View
        style={css`
          background-color: ${colors.background.black};
          width: 100%;
          height: 100%;
          opacity: 0.3;
        `}
      />
      <View
        style={css`
          background-color: ${colors.background.grey};
          padding: 20px;
          border-radius: 20px;
          position: absolute;
          left: 20px;
          right: 20px;
        `}>
        <Text
          style={css`
            font-size: 20px;
            font-family: 'WantedSans-Medium';
            color: ${colors.font.white};
          `}>
          {title}
        </Text>
        <Text
          style={css`
            font-size: 14px;
            font-family: 'WantedSans-Medium';
            color: ${colors.font.grey};
            margin-top: 12px;
            line-height: 22px;
          `}>
          {content}
        </Text>

        <View
          style={css`
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            margin-top: 20px;
          `}>
          {buttons.map((button, index) => (
            <TouchableOpacity
              onPress={() => button.onPress()}
              key={index}
              style={button.touchableOpacityStyle}>
              <Text style={button.textStyle}>{button.text}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
}

export const confirmSingleTouchableOpacityStyle = css`
  background-color: ${colors.background.white};
  width: 100%;
  padding: 12px 0;
  border-radius: 16px;
`;

export const confirmSingleTextStyle = css`
  font-size: 14px;
  font-family: 'WantedSans-Medium';
  color: ${colors.font.black};
  text-align: center;
`;

export const confirmDoubleTouchableOpacityStyle = css`
  background-color: ${colors.background.white};
  width: 48%;
  padding: 12px 0;
  border-radius: 16px;
`;

export const confirmDoubleTextStyle = css`
  font-size: 14px;
  font-family: 'WantedSans-Medium';
  color: ${colors.font.black};
  text-align: center;
`;

export const cancelDoubleTouchableOpacityStyle = css`
  background-color: ${colors.background.red};
  width: 48%;
  padding: 12px 0;
  border-radius: 16px;
`;

export const cancelDoubleTextStyle = css`
  font-size: 14px;
  font-family: 'WantedSans-Medium';
  color: ${colors.font.white};
  text-align: center;
`;
