import {css} from '@emotion/native';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import colors from '../../styles/color';

export default function Post({
  title,
  information,
  tag,
}: {
  title: string;
  information: string;
  tag: string;
}) {
  const styles = StyleSheet.create({
    imageStyle: {
      width: 72,
      height: 72,
      resizeMode: 'contain',
      borderRadius: 12,
    },
  });

  return (
    <TouchableOpacity
      style={css`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background-color: ${colors.background.grey};
        padding: 20px;
        border-radius: 20px;
        margin-top: 20px;
      `}>
      <View>
        <Text
          style={css`
            color: ${colors.font.white};
            font-family: 'WantedSans-SemiBold';
            font-size: 20px;
            margin-bottom: 6px;
          `}>
          {title}
        </Text>
        <Text
          style={css`
            color: ${colors.font.grey};
            font-family: 'WantedSans-Medium';
            font-size: 14px;
          `}>
          {information}
        </Text>
        <View
          style={css`
            background-color: ${colors.background.black};
            border-radius: 6px;
            align-self: flex-start;
            margin-top: 28px;
          `}>
          <Text
            style={css`
              color: ${colors.font.grey};
              font-family: 'WantedSans-Medium';
              font-size: 14px;
              padding: 4px 8px;
            `}>
            {tag}
          </Text>
        </View>
      </View>
      <Image
        style={styles.imageStyle}
        source={require('../../../assets/images/pickle_pizza.png')}
      />
    </TouchableOpacity>
  );
}
