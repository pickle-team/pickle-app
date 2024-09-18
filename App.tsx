import React from 'react';
import {StatusBar} from 'react-native';
import colors from './src/styles/color';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {initializeKakaoSDK} from '@react-native-kakao/core';
import {KAKAO_NATIVE_APP_KEY} from '@env';
import {RecoilRoot, useRecoilState} from 'recoil';
import Setting from './src/screens/settings/setting';
import Home from './src/screens/home/home';
import Live from './src/screens/home/live';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import './gesture-handler';
import {homeMenuSetHome} from './src/utils/atom';

const Tab = createBottomTabNavigator();

function MyTabs() {
  const [homeMenuButtonSetHome, setHomeMenuButtonSetHome] =
    useRecoilState(homeMenuSetHome);
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.background.black,
        },
        tabBarActiveTintColor: colors.font.white,
        tabBarInactiveTintColor: colors.font.grey,
      }}>
      <Tab.Screen
        name="Home"
        component={homeMenuButtonSetHome ? Home : Live}
        options={{
          tabBarLabel: 'Home',
        }}
        listeners={{
          tabPress: () => {
            setHomeMenuButtonSetHome(homeMenuButtonSetHome ? false : true);
          },
        }}
      />

      <Tab.Screen
        name="Chat"
        component={Live}
        options={{
          tabBarLabel: 'Chat',
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Setting}
        options={{
          tabBarLabel: 'Profile',
        }}
      />
    </Tab.Navigator>
  );
}

function App(): React.JSX.Element {
  initializeKakaoSDK(KAKAO_NATIVE_APP_KEY);
  // getKeyHashAndroid().then(console.log);
  return (
    <RecoilRoot>
      <NavigationContainer>
        <SafeAreaProvider>
          <StatusBar barStyle="default" />
          {/* <Login /> */}
          <MyTabs />
        </SafeAreaProvider>
      </NavigationContainer>
    </RecoilRoot>
  );
}

export default App;
