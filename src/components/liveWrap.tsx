import React from 'react';
import {css} from '@emotion/native';
import {ScrollView, Text, View} from 'react-native';
import colors from '../styles/color';

export default function LiveWrap({
  tag,
  children,
}: {
  tag: string;
  children: React.ReactNode;
}) {
  return (
    <View
      style={css`
        margin-bottom: 8px;
      `}>
      <View
        style={css`
          background-color: ${colors.background.grey};
          border-radius: 8px;
          align-self: flex-start;
          margin-left: 20px;
          margin-bottom: 8px;
          margin-top: 12px;
        `}>
        <Text
          style={css`
            color: ${colors.font.white};
            font-family: 'WantedSans-Medium';
            font-size: 14px;
            padding: 6px 10px;
          `}>
          {tag}
        </Text>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={css`
          display: flex;
          flex-direction: row;
        `}>
        <View
          style={css`
            width: 20px;
          `}
        />
        {children}
      </ScrollView>
    </View>
  );
}
