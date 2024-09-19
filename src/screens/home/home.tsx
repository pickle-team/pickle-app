import React from 'react';
import {
  Dimensions,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import Post from '../../components/post';
import colors from '../../styles/color';
import FloatingButton from '../../components/floatingButton';
import {css} from '@emotion/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

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
          /* height: ${Platform.OS === 'ios'
            ? `${windowHeight - 82 - insets.top}px`
            : `${windowHeight - 60}px`}; */
          margin: 0 20px;
        `}>
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
        <View
          style={css`
            height: 40px;
          `}
        />
      </ScrollView>
      <FloatingButton content="New Post" onPress={() => {}} />
    </View>
  );
}
