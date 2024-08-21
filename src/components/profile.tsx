import React from 'react';
import {css} from '@emotion/native';
import {Image, StyleSheet, View} from 'react-native';

export default function Profile({color}: {color: string}) {
  return (
    <View
      style={css`
        width: 52px;
        height: 52px;
        background-color: ${color};
        border-radius: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
      `}>
      <Image
        style={styles.imageStyle}
        source={require('../../assets/images/pickle.png')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  imageStyle: {width: 18, resizeMode: 'contain'},
});
