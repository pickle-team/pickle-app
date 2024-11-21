import React, {useRef} from 'react';
import {css} from '@emotion/native';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import colors from '../../styles/color';
import Profile from '../../components/profile';
import Arrow from '../../../assets/svg/arrow-left.svg';
import Image from '../../../assets/svg/image.svg';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import MyMessage from '../../components/myMessage';
import OtherMessage from '../../components/otherMessage';
import {useNavigation} from '@react-navigation/native';

export default function Chat() {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const scrollViewRef = useRef<ScrollView>(null);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={css`
        flex: 1;
        background-color: ${colors.background.black};
      `}>
      <View
        style={css`
          width: 100%;
          height: 100%;
          background-color: ${colors.background.black};
        `}>
        <View
          style={css`
            height: ${`${insets.top}px`};
          `}
        />
        <View
          style={css`
            width: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;
            border-bottom-width: 1px;
            border-color: ${colors.background.grey};
            padding-top: 10px;
            padding-bottom: 10px;
          `}>
          <TouchableOpacity
            style={css`
              margin-right: 8px;
              margin-left: 20px;
            `}
            onPress={() => navigation.goBack()}>
            <Arrow />
          </TouchableOpacity>
          <Profile
            width={32}
            height={32}
            size={12}
            color={colors.background.yellow}
          />
          <Text
            style={css`
              color: ${colors.font.white};
              font-family: 'WantedSans-Medium';
              font-size: 18px;
              margin-left: 8px;
            `}>
            Incredible Pickle
          </Text>
        </View>
        <ScrollView
          style={css`
            padding-left: 20px;
            padding-right: 20px;
          `}
          contentContainerStyle={css`
            flex-grow: 1;
            justify-content: flex-end;
          `}
          showsVerticalScrollIndicator={false}
          ref={scrollViewRef}
          onContentSizeChange={() => {
            scrollViewRef.current?.scrollToEnd({animated: false});
          }}
          onLayout={() => {
            scrollViewRef.current?.scrollToEnd({animated: false});
          }}>
          <Text
            style={css`
              color: ${colors.font.grey};
              font-family: 'WantedSans-Medium';
              font-size: 14px;
              text-align: center;
              margin-top: 20px;
              margin-bottom: 24px;
            `}>
            August 15th (Mon) 2024
          </Text>
          <MyMessage content="How was the pickle chat?" />
          <OtherMessage content="How was the pickle chat?" />
          <MyMessage content="How was the pickle chat?" />
          <OtherMessage content="How was the pickle chat?" />
          <MyMessage content="How was the pickle chat?" />
          <OtherMessage content="How was the pickle chat?" />
          <MyMessage content="How was the pickle chat?" />
          <OtherMessage content="How was the pickle chat?" />
          <MyMessage content="How was the pickle chat?" />
          <OtherMessage content="How was the pickle chat?" />
          <MyMessage content="How was the pickle chat?" />
          <OtherMessage content="How was the pickle chat?" />
          <View
            style={css`
              height: ${`${insets.top + 40}px`};
            `}
          />
        </ScrollView>
        <View
          style={css`
            display: flex;
            flex-direction: row;
            align-items: center;
          `}>
          <View
            style={css`
              background-color: ${colors.background.black};
              position: absolute;
              bottom: 0px;
              left: 20px;
              right: 20px;
              display: flex;
              flex-direction: row;
              align-items: center;
              padding-top: 8px;
              padding-bottom: 40px;
            `}>
            <TextInput
              style={css`
                background-color: ${colors.background.grey};
                font-family: 'WantedSans-Medium';
                font-size: 16px;
                color: ${colors.font.grey};
                padding: 14px 20px;
                padding-right: 60px;
                border-radius: 24px;
                margin-right: 8px;
                flex: 1;
                max-height: 200px;
              `}
              placeholder={'Type a message'}
              placeholderTextColor={colors.font.grey}
              onChangeText={() => {}}
              multiline={true}
            />
            <TouchableOpacity
              style={css`
                width: 36px;
                height: 36px;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: ${colors.background.white};
                border-radius: 100px;
              `}>
              <Image />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
