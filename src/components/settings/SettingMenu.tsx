import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {css} from '@emotion/native';
import ArrowIcon from '../../../assets/svg/arrow-right.svg';
import colors from '../../styles/color';

export default function SettingMenu({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <View>
      <Text
        style={css`
          color: ${colors.font.white};
          font-family: 'WantedSans-SemiBold';
          font-size: 20px;
          margin-bottom: 16px;
        `}>
        {title}
      </Text>
      <View
        style={css`
          background-color: ${colors.background.grey};
          border-radius: 20px;
        `}>
        {items.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={css`
              display: flex;
              flex-direction: row;
              height: 52px;
              align-items: center;
              justify-content: space-between;
              padding: 0 20px;
            `}>
            <Text
              style={css`
                color: ${colors.font.white};
                font-family: 'WantedSans-Medium';
                font-size: 16px;
              `}>
              {item}
            </Text>
            <ArrowIcon />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
