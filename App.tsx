import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {initializeKakaoSDK} from '@react-native-kakao/core';
import {KAKAO_NATIVE_APP_KEY} from '@env';
import {RecoilRoot} from 'recoil';
import {NavigationContainer} from '@react-navigation/native';
import BottomTab from './src/components/bottomTab';
import './gesture-handler';
import Chat from './src/screens/chat/chat';
import LiveContent from './src/screens/home/liveContent';

function App(): React.JSX.Element {
  initializeKakaoSDK(KAKAO_NATIVE_APP_KEY);

  return (
    <RecoilRoot>
      <NavigationContainer>
        <SafeAreaProvider>
          <StatusBar barStyle="default" />
          {/* <Login /> */}
          {/* <BottomTab /> */}
          <Chat />
          {/* <LiveContent /> */}
        </SafeAreaProvider>
      </NavigationContainer>
    </RecoilRoot>
  );
}

export default App;
