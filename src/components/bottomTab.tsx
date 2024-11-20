import React from 'react';
import HomeIcon from '../../assets/svg/home.svg';
import SelectedHomeIcon from '../../assets/svg/selectedHome.svg';
import ChatIcon from '../../assets/svg/chat.svg';
import SelectedChatIcon from '../../assets/svg/selectedChat.svg';
import {trigger} from 'react-native-haptic-feedback';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useRecoilState} from 'recoil';
import {homeMenuSetHome} from '../utils/atom';
import Profile from './profile';
import colors from '../styles/color';
import Setting from '../screens/settings/setting';
import Home from '../screens/home/home';
import Live from '../screens/home/live';
import ChatList from '../screens/chat/list';

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

const Tab = createBottomTabNavigator();

function ProfileIcon() {
  return (
    <Profile color={colors.background.white} size={8} width={24} height={24} />
  );
}

export default function BottomTab() {
  const [homeMenuButtonSetHome, setHomeMenuButtonSetHome] =
    useRecoilState(homeMenuSetHome);

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.background.black,
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
            trigger('impactLight', options);
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
        component={ChatList}
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
            trigger('impactLight', options);
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
            trigger('impactLight', options);
            setHomeMenuButtonSetHome(false);
          },
        })}
      />
    </Tab.Navigator>
  );
}
