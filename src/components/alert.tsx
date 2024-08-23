import React from 'react';
import {css} from '@emotion/native';
import {Dimensions, Text, TouchableOpacity, View} from 'react-native';
import colors from '../styles/color';
import {useSetRecoilState} from 'recoil';
import {registerAlert} from '../utils/atom';

export default function Alert({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  const setShowAlert = useSetRecoilState(registerAlert);
  console.log(Dimensions.get('window').width);
  return (
    <View
      style={css`
        width: ${Dimensions.get('window').width + 'px'};
        height: 100%;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        left: -20px;
      `}>
      <View
        style={css`
          background-color: ${colors.background.black};
          width: 100%;
          height: 100%;
          opacity: 0.3;
        `}
      />
      <View
        style={css`
          background-color: ${colors.background.grey};
          padding: 20px;
          border-radius: 20px;
          position: absolute;
          left: 20px;
          right: 20px;
        `}>
        <Text
          style={css`
            font-size: 20px;
            font-family: 'WantedSans-Medium';
            color: ${colors.font.white};
          `}>
          {title}
        </Text>
        <Text
          style={css`
            font-size: 14px;
            font-family: 'WantedSans-Medium';
            color: ${colors.font.grey};
            margin-top: 12px;
            line-height: 22px;
          `}>
          {content}
        </Text>

        <View
          style={css`
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            margin-top: 20px;
          `}>
          <TouchableOpacity
            style={css`
              background-color: ${colors.background.white};
              width: 48%;
              padding: 12px 0;
              border-radius: 16px;
            `}>
            <Text
              style={css`
                font-size: 14px;
                font-family: 'WantedSans-Medium';
                color: ${colors.font.black};
                text-align: center;
              `}>
              Confirm
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={css`
              background-color: ${colors.background.red};
              width: 48%;
              padding: 12px 0;
              border-radius: 16px;
            `}
            onPress={() => setShowAlert(false)}>
            <Text
              style={css`
                font-size: 14px;
                font-family: 'WantedSans-Medium';
                color: ${colors.font.white};
                text-align: center;
              `}>
              Cancel
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
