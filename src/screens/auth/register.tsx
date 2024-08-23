import React from 'react';
import {Keyboard, TouchableWithoutFeedback, View} from 'react-native';
import Header from '../../components/header';
import Input from '../../components/input';
import {css} from '@emotion/native';
import SelectColor from '../../components/selectColor';
import Button from '../../components/button';
import Alert from '../../components/alert';
import {useRecoilState} from 'recoil';
import {registerAlert, registerData} from '../../utils/atom';
import Selector from '../../components/selector';
import Title from '../../components/title';

export default function Register() {
  const [showAlert, setShowAlert] = useRecoilState(registerAlert);
  const [userInput, setUserInput] = useRecoilState(registerData);
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View
        style={css`
          height: 100%;
          margin: 0 20px;
        `}>
        <Header title="Register" />
        <View
          style={css`
            height: 24px;
          `}
        />
        <Title title="Name" />
        <Input
          placeholder="Please enter your actual name."
          onChangeText={(event: string) =>
            setUserInput({...userInput, name: event})
          }
        />
        <View
          style={css`
            height: 20px;
          `}
        />
        <Title title="School" />
        <Input
          placeholder="Please enter your current school."
          onChangeText={(event: string) =>
            setUserInput({...userInput, school: event})
          }
        />
        <View
          style={css`
            height: 20px;
          `}
        />
        <Title title="Sex" />
        <Selector select1="male" select2="female" />
        <View
          style={css`
            height: 20px;
          `}
        />
        <Title title="Color" />
        <SelectColor />
        <Button
          handler={() => {
            setShowAlert(true);
          }}
          text="Confirm"
        />
        {showAlert ? (
          <Alert
            title="Do you want to confirm it?"
            content={`Name: ${userInput.name}\nSchool: ${userInput.school}\nSex: ${userInput.sex}\nColor: ${userInput.color}`}
          />
        ) : (
          ''
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}
