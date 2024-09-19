import React from 'react';
import {css} from '@emotion/native';
import {View} from 'react-native';
import colors from '../../styles/color';
import ScreenWrap from '../../components/screenWrap';
import Header from '../../components/header';
import LiveBox from '../../components/liveBox';
import LiveWrap from '../../components/liveWrap';

export default function Live() {
  return (
    <ScreenWrap topColor={colors.background.black} padding={false}>
      <View
        style={css`
          margin-left: 20px;
        `}>
        <Header title="Live" />
      </View>
      <LiveWrap tag="Trip">
        <LiveBox
          image={require('../../../assets/images/live/trip1.png')}
          profileColor="#E58DFB"
          name="Delicious Pickle"
        />
        <LiveBox
          image={require('../../../assets/images/live/trip2.png')}
          profileColor="#E58DFB"
          name="Delicious Pickle"
        />
      </LiveWrap>
      <LiveWrap tag="Daily">
        <LiveBox
          image={require('../../../assets/images/live/daily1.png')}
          profileColor="#E58DFB"
          name="Delicious Pickle"
        />
        <LiveBox
          image={require('../../../assets/images/live/daily2.png')}
          profileColor="#E58DFB"
          name="Delicious Pickle"
        />
      </LiveWrap>
    </ScreenWrap>
  );
}
