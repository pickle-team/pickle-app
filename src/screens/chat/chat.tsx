import React from 'react';
import {css} from '@emotion/native';
import {Text} from 'react-native';
import colors from '../../styles/color';
import ScreenWrap from '../../components/screenWrap';

export default function Chat() {
  return (
    <ScreenWrap topColor={colors.background.black} padding={true}>
      <Text
        style={css`
          color: ${colors.font.white};
          font-family: 'WantedSans-SemiBold';
          font-size: 20px;
          margin-bottom: 6px;
        `}>
        Chat
      </Text>
    </ScreenWrap>
  );
}
