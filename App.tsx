import React from 'react';
import {Platform, SafeAreaView, StatusBar} from 'react-native';
import Login from './src/screens/auth/login';
import {css} from '@emotion/native';
import colors from './src/styles/color';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {initializeKakaoSDK} from '@react-native-kakao/core';
import {KAKAO_NATIVE_APP_KEY} from '@env';
import Register from './src/screens/auth/register';
import {RecoilRoot} from 'recoil';
import Setting from './src/screens/settings/setting';

function App(): React.JSX.Element {
  initializeKakaoSDK(KAKAO_NATIVE_APP_KEY);
  // getKeyHashAndroid().then(console.log);
  return (
    <RecoilRoot>
      <SafeAreaProvider>
        <SafeAreaView
          style={css`
            width: 100%;
            height: 100%;
            background-color: ${colors.background.black};
            padding-top: ${Platform.OS === 'ios' ? '' : '20px'};
          `}>
          {/* <StatusBar barStyle="default" /> */}
          {/* <Login /> */}
          <Register />
          {/* <Setting /> */}
        </SafeAreaView>
      </SafeAreaProvider>
    </RecoilRoot>
  );
}

export default App;
