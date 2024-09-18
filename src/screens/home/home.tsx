import {css} from '@emotion/native';
import React from 'react';
import {Image, Platform, ScrollView, StyleSheet, View} from 'react-native';
import Post from '../../components/post';
import colors from '../../styles/color';
import ScreenWrap from '../../components/screenWrap';

export default function Home() {
  const styles = StyleSheet.create({
    imageStyle: {
      marginTop: 8,
      width: 39,
      height: 32,
    },
  });

  return (
    <ScreenWrap topColor={colors.background.black} padding={true}>
      <Image
        style={styles.imageStyle}
        source={require('../../../assets/images/pickle.png')}
      />
      <Post
        title="Pickle Pizza Review"
        information="Delicious Pickle · 92 View"
        tag="Pizza"
      />
      <Post
        title="Pickle Pizza Review"
        information="Delicious Pickle · 92 View"
        tag="Pizza"
      />
      <Post
        title="Pickle Pizza Review"
        information="Delicious Pickle · 92 View"
        tag="Pizza"
      />
      <Post
        title="Pickle Pizza Review"
        information="Delicious Pickle · 92 View"
        tag="Pizza"
      />
      <Post
        title="Pickle Pizza Review"
        information="Delicious Pickle · 92 View"
        tag="Pizza"
      />
    </ScreenWrap>
  );
}
