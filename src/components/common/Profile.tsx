import React from 'react';
import {css} from '@emotion/native';
import {Image, StyleSheet, View} from 'react-native';

export default function Profile({
  width,
  height,
  size,
  color,
}: {
  width: number;
  height: number;
  size: number;
  color: string;
}) {
  const styles = StyleSheet.create({
    imageStyle: {width: size, resizeMode: 'contain'},
  });

  return (
    <View
      style={css`
        width: ${width + 'px'};
        height: ${height + 'px'};
        background-color: ${color};
        border-radius: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
      `}>
      <Image
        style={styles.imageStyle}
        source={require('../../../assets/images/pickle.png')}
      />
    </View>
  );
}
