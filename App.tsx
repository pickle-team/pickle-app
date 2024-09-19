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
import Chat from './src/screens/chat/chat';
import Profile from './src/components/profile';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {homeMenuSetHome} from './src/utils/atom';
import HomeIcon from './assets/svg/home.svg';
import SelectedHomeIcon from './assets/svg/selectedHome.svg';
import ChatIcon from './assets/svg/chat.svg';
import SelectedChatIcon from './assets/svg/selectedChat.svg';
import './gesture-handler';

const Tab = createBottomTabNavigator();

function ProfileIcon() {
  return <Profile color="#ffffff" size={8} width={24} height={24} />;
}

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
          // height: Platform.OS === 'ios' ? 82 : 60,
          // minHeight: 60,
          borderTopColor: colors.background.grey,
          borderTopWidth: 1,
        },
        tabBarActiveTintColor: colors.font.white,
        tabBarInactiveTintColor: colors.font.grey,
        tabBarIconStyle: {
          marginTop: 14,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: 'WantedSans-Medium',
          marginTop: 6,
        },
        tabBarItemStyle: {
          alignItems: 'center',
          justifyContent: 'center',
        },
      }}>
      <Tab.Screen
        name={homeMenuButtonSetHome ? 'Home' : 'Live'}
        component={homeMenuButtonSetHome ? Home : Live}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused}) =>
            focused ? (
              <SelectedHomeIcon width={24} height={24} />
            ) : (
              <HomeIcon width={24} height={24} />
            ),
        }}
        listeners={({route}) => ({
          tabPress: () => {
            if (route.name === 'Home') {
              setHomeMenuButtonSetHome(false);
            } else if (route.name === 'Live') {
              setHomeMenuButtonSetHome(true);
            }
          },
        })}
      />

      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarLabel: 'Chat',
          tabBarIcon: ({focused}) =>
            focused ? (
              <SelectedChatIcon width={24} height={24} />
            ) : (
              <ChatIcon width={24} height={24} />
            ),
        }}
        listeners={() => ({
          tabPress: () => {
            setHomeMenuButtonSetHome(false);
          },
        })}
      />
      <Tab.Screen
        name="Profile"
        component={Setting}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ProfileIcon,
        }}
        listeners={() => ({
          tabPress: () => {
            setHomeMenuButtonSetHome(false);
          },
        })}
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
