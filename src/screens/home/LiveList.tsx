import React from 'react';
import {css} from '@emotion/native';
import {View} from 'react-native';
import Header from '../../components/common/Header';
import LiveBox from '../../components/home/LiveBox';
import LiveWrap from '../../components/home/LiveWrap';
import FloatingButtonWrap from '../../components/common/FloatingButtonWrap';

export default function LiveList() {
  return (
    <FloatingButtonWrap
      buttonContent="New Live"
      buttonOnPress={() => {}}
      padding={false}>
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
    </FloatingButtonWrap>
  );
}
