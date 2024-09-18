import React, {useState} from 'react';
import {css} from '@emotion/native';
import {Image, Platform, Text, TouchableOpacity, View} from 'react-native';
import KakaoLogo from './../../../assets/svg/kakao.svg';
import colors from '../../styles/color';
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
        padding-left: 20px;
        padding-right: 20px;
        background-color: ${colors.background.black};
      `}>
      {/* <Text
        style={css`
          color: white;
        `}>
        {kakaoUserInfo ? kakaoUserInfo.toString() : 'null'}
      </Text> */}
      <Image source={require('./../../../assets/images/pickle.png')} />
      <TouchableOpacity
        onPress={async () => {
          try {
            login();
            const userInfo: KakaoUser = await me();
            setKakaoUserInfo(userInfo);
            console.log(kakaoUserInfo);
          } catch (e) {
            console.log(e);
          }
        }}
        style={css`
          background-color: ${colors.background.yellow};
          position: absolute;
          bottom: ${Platform.OS === 'ios' ? '40px' : '20px'};
          width: 100%;
          padding: 16px 0%;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          border-radius: 16px;
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
