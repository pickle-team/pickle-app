import React from 'react';
import {Dimensions, Platform, Text, TouchableOpacity} from 'react-native';
import Plus from '../../assets/svg/plus.svg';
import {css} from '@emotion/native';
import colors from '../styles/color';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const windowHeight = Dimensions.get('window').height;

export default function FloatingButton({
  content,
  onPress,
}: {
  content: string;
  onPress: Function;
}) {
  const insets = useSafeAreaInsets();
  return (
    <TouchableOpacity
      onPress={() => onPress()}
      style={css`
        background-color: ${colors.background.white};
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding: 16px;
        border-radius: 100px;
        position: absolute;
        z-index: 10;
        top: ${Platform.OS === 'ios'
          ? `${windowHeight - 88 - insets.top}px`
          : `${windowHeight - 120 - insets.top}px`};
        right: 20px;
      `}>
      <Plus />
      <Text
        style={css`
          color: ${colors.font.black};
          font-family: 'WantedSans-Medium';
          font-size: 16px;
          margin-left: 12px;
        `}>
        {content}
      </Text>
    </TouchableOpacity>
  );
}
