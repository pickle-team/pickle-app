import {css} from '@emotion/native';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import colors from '../../styles/color';
import Profile from '../../components/common/Profile';
import ArrowIcon from '../../../assets/svg/arrow-left.svg';
import ChatIcon from '../../../assets/svg/chatOutline.svg';
import StarIcon from '../../../assets/svg/star.svg';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

export default function Live() {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  return (
    <View
      style={css`
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: black;
      `}>
      <TouchableOpacity
        style={css`
          position: absolute;
          z-index: 100;
          top: ${`${insets.top + 20}px`};
          left: 20px;
        `}
        onPress={() => {
          navigation.goBack();
        }}>
        <ArrowIcon />
      </TouchableOpacity>
      <Image
        style={styles.background}
        source={require('../../../assets/images/live/trip1.png')}
      />
      <View
        style={css`
          position: absolute;
          left: 20px;
          right: 20px;
          bottom: 68px;
          padding: 16px;
          border-radius: 20px;
          background-color: rgba(28, 28, 28, 0.5);
        `}>
        <View
          style={css`
            display: flex;
            flex-direction: row;
            align-items: center;
            margin-bottom: 16px;
            justify-content: space-between;
          `}>
          <View
            style={css`
              display: flex;
              flex-direction: row;
              align-items: center;
            `}>
            <Profile width={32} height={32} size={11} color="#E58DFB" />
            <Text
              style={css`
                color: ${colors.font.white};
                font-family: 'WantedSans-Medium';
                font-size: 14px;
                margin-left: 8px;
              `}>
              Delicious Pickle
            </Text>
          </View>
          <View
            style={css`
              display: flex;
              flex-direction: row;
              align-items: center;
            `}>
            <TouchableOpacity
              style={css`
                margin-right: 12px;
              `}>
              <ChatIcon />
            </TouchableOpacity>
            <TouchableOpacity>
              <StarIcon />
            </TouchableOpacity>
          </View>
        </View>
        <Text
          style={css`
            color: ${colors.font.white};
            font-family: 'WantedSans-Medium';
            font-size: 16px;
          `}>
          I found a boat in the sea!
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    width: '100%',
    resizeMode: 'contain',
  },
});
