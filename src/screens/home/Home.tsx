import React from 'react';
import {Dimensions, Image, StyleSheet} from 'react-native';
import Post from '../../components/home/Post';
import FloatingButtonWrap from '../../components/common/FloatingButtonWrap';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Home() {
  const styles = StyleSheet.create({
    imageStyle: {
      marginTop: 8,
      width: 39,
      height: 32,
    },
  });

  return (
    <FloatingButtonWrap
      buttonContent="New Post"
      buttonOnPress={() => {}}
      padding={true}>
      <Image
        style={styles.imageStyle}
        source={require('../../../assets/images/pickle.png')}
      />
      <Post
        title={`${windowWidth} ${windowHeight}`}
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
      <Post
        title="Pickle Pizza Review"
        information="Delicious Pickle · 92 View"
        tag="Pizza"
      />
    </FloatingButtonWrap>
  );
}
