import {css} from '@emotion/native';
import React from 'react';
import {Image, ScrollView, StyleSheet, View} from 'react-native';
import Post from '../../components/post';

export default function Home() {
  const styles = StyleSheet.create({
    imageStyle: {
      marginTop: 8,
      width: 39,
      height: 32,
    },
  });

  return (
    <ScrollView
      style={css`
        margin: 0 20px;
      `}>
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
    </ScrollView>
  );
}
