import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTab from './BottomTab';
import Chat from '../../screens/chat/Chat';

const Stack = createStackNavigator();

export default function RootNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="BottomTab" component={BottomTab} />
      <Stack.Screen name="Chat" component={Chat} />
    </Stack.Navigator>
  );
}
