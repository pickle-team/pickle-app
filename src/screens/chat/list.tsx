import React from 'react';
import {css} from '@emotion/native';
import {View} from 'react-native';
import Header from '../../components/common/Header';
import ChatBox from '../../components/chat/ChatBox';
import FloatingButtonWrap from '../../components/common/FloatingButtonWrap';

export default function ChatList() {
  return (
    <FloatingButtonWrap
      buttonContent="New Chat"
      buttonOnPress={() => {}}
      padding={false}>
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
    </FloatingButtonWrap>
  );
}
