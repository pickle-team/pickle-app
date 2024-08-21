import React from 'react';
import {View} from 'react-native';
import Header from '../../components/header';
import Input from '../../components/input';
import {css} from '@emotion/native';
import SelectColor from '../../components/selectColor';

export default function Register() {
  return (
    <View>
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
      <SelectColor />
    </View>
  );
}
