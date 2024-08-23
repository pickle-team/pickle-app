import React from 'react';
import {Keyboard, TouchableWithoutFeedback, View} from 'react-native';
import Header from '../../components/header';
import Input from '../../components/input';
import {css} from '@emotion/native';
import SelectColor from '../../components/selectColor';
import Button from '../../components/button';
import Alert from '../../components/alert';
import {useRecoilState, useRecoilValue} from 'recoil';
import {registerAlert, registerData} from '../../utils/atom';
import Selector from '../../components/selector';

export default function Register() {
  const userInput = useRecoilValue(registerData);
  const [showAlert, setShowAlert] = useRecoilState(registerAlert);
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View
        style={css`
          height: 100%;
        `}>
        <Header title="Register" />
        <View
          style={css`
            height: 24px;
          `}
        />
        <Input label="Name" placeholder="Please enter your actual name." />
        <View
          style={css`
            height: 20px;
          `}
        />
        <Input label="School" placeholder="Please enter your current school." />
        <View
          style={css`
            height: 20px;
          `}
        />
        <Selector title="Sex" select1="male" select2="female" />
        <View
          style={css`
            height: 20px;
          `}
        />
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
