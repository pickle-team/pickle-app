import React from 'react';
import {css} from '@emotion/native';
import {Platform, ScrollView, View} from 'react-native';
import colors from '../../styles/color';
import Header from '../../components/header';
import ChatBox from '../../components/chatBox';
import FloatingButton from '../../components/floatingButton';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export default function Chat() {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={css`
        width: 100%;
        height: 100%;
        background-color: ${colors.background.black};
      `}>
      <View
        style={css`
          height: ${Platform.OS === 'ios' ? `${insets.top}px` : ''};
          background-color: ${colors.background.black};
        `}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={css`
          padding-top: ${Platform.OS === 'ios' ? '' : '20px'};
        `}>
        <View
          style={css`
            margin-left: 20px;
          `}>
          <Header title="Chat" />
        </View>
        <View
          style={css`
            height: 16px;
          `}
        />
        <ChatBox
          profileColor="#E58DFB"
          name="Delicious Pickle"
          content="Really?"
        />
        <ChatBox
          profileColor="#E58DFB"
          name="Delicious Pickle"
          content="Really?"
        />
        <ChatBox
          profileColor="#E58DFB"
          name="Delicious Pickle"
          content="Really?"
        />
        <ChatBox
          profileColor="#E58DFB"
          name="Delicious Pickle"
          content="Really?"
        />
      </ScrollView>
      <FloatingButton content="New Chat" onPress={() => {}} />
    </View>
  );
}
