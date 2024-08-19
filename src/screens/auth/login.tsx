import {css} from '@emotion/native';
import React, {useState} from 'react';
import {Image, Platform, Text, TouchableOpacity, View} from 'react-native';
import KakaoLogo from './../../../assets/svg/kakao.svg';
import colors from '../../style/color';
import {KakaoUser, login, me} from '@react-native-kakao/user';

export default function Login() {
  const [kakaoUserInfo, setKakaoUserInfo] = useState<KakaoUser | null>(null);
  return (
    <View
      style={css`
        display: flex;
        height: 100%;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: ${Platform.OS === 'ios' ? '-20px' : ''};
        padding: 0 20px;
      `}>
      <TouchableOpacity
        onPress={async () => {
          const userInfo: KakaoUser = await me();
          setKakaoUserInfo(userInfo);
          console.log(kakaoUserInfo);
        }}>
        <Text
          style={css`
            color: white;
          `}>
          Test
        </Text>
      </TouchableOpacity>
      <Image source={require('./../../../assets/images/logo.png')} />
      <TouchableOpacity
        onPress={() => {
          login();
        }}
        style={css`
          background-color: ${colors.background.yellow};
          position: absolute;
          bottom: ${Platform.OS === 'ios' ? '0' : '20px'};
          width: 100%;
          padding: 16px 0%;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
        `}>
        <KakaoLogo />
        <Text
          style={css`
            font-size: 16px;
            font-family: 'WantedSans-Medium';
            color: ${colors.font.black};
            margin-left: 8px;
          `}>
          Login with Kakao
        </Text>
      </TouchableOpacity>
    </View>
  );
}
