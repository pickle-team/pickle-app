import React from 'react';
import {css} from '@emotion/native';
import {View} from 'react-native';
import colors from '../../styles/color';
import ScreenWrap from '../../components/screenWrap';
import Header from '../../components/header';

import ChatBox from '../../components/chatBox';

export default function Chat() {
  return (
    <ScreenWrap topColor={colors.background.black} padding={false}>
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
    </ScreenWrap>
  );
}
