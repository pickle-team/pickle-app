import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTab from '../components/bottomTab';
import Chat from '../screens/chat/chat';

const Stack = createStackNavigator();

export default function RootNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="BottomTab" component={BottomTab} />
      <Stack.Screen name="Chat" component={Chat} />
    </Stack.Navigator>
  );
}
