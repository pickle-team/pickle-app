import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import Login from './src/screens/auth/login';
import {css} from '@emotion/native';
import colors from './src/style/color';
import {SafeAreaProvider} from 'react-native-safe-area-context';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={css`
          width: 100%;
          height: 100%;
          background-color: ${colors.background.black};
        `}>
        <StatusBar barStyle="default" />
        <Login />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;
