import React from 'react';
import {css} from '@emotion/native';
import {Text} from 'react-native';
import colors from '../../styles/color';
import ScreenWrap from '../../components/screenWrap';
import Header from '../../components/header';

export default function Chat() {
  return (
    <ScreenWrap topColor={colors.background.black} padding={true}>
      <Header title="Chat" />
    </ScreenWrap>
  );
}
