import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTab from './BottomTab';
import Chat from '../../screens/chat/Chat';
import Live from '../../screens/home/Live';

const Stack = createStackNavigator();

export default function RootNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="BottomTab" component={BottomTab} />
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="Live" component={Live} />
    </Stack.Navigator>
  );
}
