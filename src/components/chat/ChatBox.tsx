import React from 'react';
import {css} from '@emotion/native';
import {Text, TouchableOpacity, View} from 'react-native';
import colors from '../../styles/color';
import Profile from '../common/Profile';
import {NavigationProp, useNavigation} from '@react-navigation/native';

type RootStackParamList = {
  Chat: React.ReactNode;
};

export default function ChatBox({
  profileColor,
  name,
  content,
}: {
  profileColor: string;
  name: string;
  content: string;
}) {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <TouchableOpacity
      style={css`
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 76px;
        padding: 0 20px;
      `}
      onPress={() => navigation.navigate('Chat')}>
      <Profile width={56} height={56} size={20} color={profileColor} />
      <View
        style={css`
          display: flex;
          flex-direction: column;
          margin-left: 12px;
        `}>
        <Text
          style={css`
            color: ${colors.font.white};
            font-family: 'WantedSans-Medium';
            font-size: 16px;
            margin-bottom: 4px;
          `}>
          {name}
        </Text>
        <Text
          style={css`
            color: ${colors.font.grey};
            font-family: 'WantedSans-Medium';
            font-size: 16px;
          `}>
          {content}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
