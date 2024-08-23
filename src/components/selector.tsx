import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {css} from '@emotion/native';
import colors from '../styles/color';
import {useRecoilState} from 'recoil';
import {registerData} from '../utils/atom';

export default function Selector({
  title,
  select1,
  select2,
}: {
  title: string;
  select1: string;
  select2: string;
}) {
  const [userInput, setUserInput] = useRecoilState(registerData);
  return (
    <View
      style={css`
        margin: 0 20px;
      `}>
      <Text
        style={css`
          color: ${colors.font.white};
          font-family: 'WantedSans-Medium';
          font-size: 20px;
          margin-bottom: 12px;
        `}>
        {title}
      </Text>
      <View
        style={css`
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        `}>
        <TouchableOpacity
          style={
            userInput.sex === select1
              ? selectedTouchableOpacity
              : notSelectedTouchableOpacity
          }
          onPress={() => {
            setUserInput({...userInput, sex: select1});
          }}>
          <Text
            style={userInput.sex === select1 ? selectedText : notSelectedText}>
            {select1}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={
            userInput.sex === select2
              ? selectedTouchableOpacity
              : notSelectedTouchableOpacity
          }
          onPress={() => {
            setUserInput({...userInput, sex: select2});
          }}>
          <Text
            style={userInput.sex === select2 ? selectedText : notSelectedText}>
            {select2}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const selectedTouchableOpacity = css`
  background-color: ${colors.background.white};
  width: 48%;
  padding: 16px 0;
  border-radius: 20px;
`;

const selectedText = css`
  color: ${colors.font.black};
  font-family: 'WantedSans-Medium';
  font-size: 16px;
  text-align: center;
`;

const notSelectedTouchableOpacity = css`
  background-color: ${colors.background.grey};
  width: 48%;
  padding: 16px 0;
  border-radius: 20px;
`;

const notSelectedText = css`
  color: ${colors.font.white};
  font-family: 'WantedSans-Medium';
  font-size: 16px;
  text-align: center;
`;
