import React from 'react';
import {css} from '@emotion/native';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import colors from '../styles/color';
import Profile from './profile';

export default function LiveBox({
  image,
  profileColor,
  name,
}: {
  image: ImageSourcePropType;
  profileColor: string;
  name: string;
}) {
  return (
    <View
      style={css`
        margin-right: 20px;
      `}>
      <TouchableOpacity>
        <Image style={styles.imageStyle} source={image} />
      </TouchableOpacity>
      <View
        style={css`
          display: flex;
          flex-direction: row;
          align-items: center;
          position: absolute;
          bottom: 16px;
          left: 16px;
        `}>
        <Profile width={32} height={32} size={10} color={profileColor} />
        <Text
          style={css`
            color: ${colors.font.white};
            font-family: 'WantedSans-Medium';
            font-size: 14px;
            margin-left: 8px;
          `}>
          {name}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageStyle: {
    width: 232,
    height: 400,
    borderRadius: 20,
    resizeMode: 'contain',
    opacity: 0.7,
  },
});
