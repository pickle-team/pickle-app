import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import PlusIcon from '../../../assets/svg/plus.svg';
import {css} from '@emotion/native';
import colors from '../../styles/color';

export default function FloatingButton({
  content,
  onPress,
}: {
  content: string;
  onPress: Function;
}) {
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
        bottom: 20px;
        right: 20px;
      `}>
      <PlusIcon />
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
