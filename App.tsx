import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {initializeKakaoSDK} from '@react-native-kakao/core';
import {KAKAO_NATIVE_APP_KEY} from '@env';
import {RecoilRoot} from 'recoil';
import {NavigationContainer} from '@react-navigation/native';
import './gesture-handler';
import RootNavigation from './src/components/navigation/RootNavigation';
import Live from './src/screens/home/Live';

function App(): React.JSX.Element {
  initializeKakaoSDK(KAKAO_NATIVE_APP_KEY);

  return (
    <RecoilRoot>
      <NavigationContainer>
        <SafeAreaProvider>
          <StatusBar barStyle="default" />
          {/* <Login /> */}
          <RootNavigation />
          {/* <Chat /> */}
          {/* <Live /> */}
        </SafeAreaProvider>
      </NavigationContainer>
    </RecoilRoot>
  );
}

export default App;
