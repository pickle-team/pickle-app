import React from 'react';
import {Platform, Text, View} from 'react-native';
import {css} from '@emotion/native';
import colors from '../../styles/color';
import Profile from '../../components/profile';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Menu from '../../components/menu';
import Button from '../../components/button';

export default function Setting() {
  const insets = useSafeAreaInsets();

  return (
    <View>
      <View
        style={css`
          background-color: ${colors.background.grey};
          margin-top: ${Platform.OS === 'ios'
            ? '-' + insets.top + 'px'
            : '-20px'};
          border-bottom-left-radius: 32px;
          border-bottom-right-radius: 32px;
        `}>
        <View
          style={css`
            height: ${insets.top + 28 + 'px'};
          `}
        />
        <View
          style={css`
            margin-left: 20px;
            margin-right: 20px;
            margin-bottom: 28px;
            display: flex;
            flex-direction: row;
            align-items: center;
          `}>
          <Profile width={80} height={80} size={28} color="#fff" />
          <View
            style={css`
              margin-left: 16px;
            `}>
            <Text
              style={css`
                color: ${colors.font.white};
                font-family: 'WantedSans-SemiBold';
                font-size: 24px;
                margin-bottom: 6px;
              `}>
              Sungmin Cho
            </Text>
            <Text
              style={css`
                color: ${colors.font.grey};
                font-family: 'WantedSans-Medium';
                font-size: 14px;
              `}>
              Korea Digital Media High School
            </Text>
          </View>
        </View>
      </View>
      <View
        style={css`
          height: 40px;
        `}
      />
      <View
        style={css`
          margin: 0 20px;
          display: flex;
          flex-direction: column;
        `}>
        <Menu title="Account" items={['Account Info', 'Payment', 'Bookmark']} />
        <View
          style={css`
            height: 40px;
          `}
        />
        <Menu title="Service" items={['Customer Service', 'App Info']} />
        <View
          style={css`
            height: 40px;
          `}
        />
        <Button
          text="Log Out"
          backgroundColor={colors.background.red}
          color={colors.font.white}
          handler={() => {}}
        />
      </View>
    </View>
  );
}
