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
import colors from '../../styles/color';
import Profile from '../common/Profile';
import {NavigationProp, useNavigation} from '@react-navigation/native';

type RootStackParamList = {
  Live: React.ReactNode;
};

export default function LiveBox({
  image,
  profileColor,
  name,
}: {
  image: ImageSourcePropType;
  profileColor: string;
  name: string;
}) {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <View
      style={css`
        margin-right: 20px;
      `}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Live');
        }}>
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
