import React from 'react';
import {Keyboard, TouchableWithoutFeedback, View} from 'react-native';
import Header from '../../components/common/Header';
import Input from '../../components/common/Input';
import {css} from '@emotion/native';
import SelectColor from '../../components/common/SelectColor';
import Button from '../../components/common/Button';
import Alert, {
  cancelDoubleTextStyle,
  cancelDoubleTouchableOpacityStyle,
  confirmDoubleTextStyle,
  confirmDoubleTouchableOpacityStyle,
} from '../../components/common/Alert';
import {useRecoilState} from 'recoil';
import {registerAlert, registerData} from '../../utils/atom';
import Selector from '../../components/common/Selector';
import Title from '../../components/common/Title';
import colors from '../../styles/color';

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
        <View
          style={css`
            width: 100%;
            position: absolute;
            bottom: 20px;
          `}>
          <Button
            backgroundColor={colors.background.white}
            color={colors.font.black}
            handler={() => {
              setShowAlert(true);
            }}
            text="Confirm"
          />
        </View>
        {showAlert ? (
          <Alert
            title="Do you want to confirm it?"
            content={`Name: ${userInput.name}\nSchool: ${userInput.school}\nSex: ${userInput.sex}\nColor: ${userInput.color}`}
            buttons={[
              {
                text: 'Confirm',
                touchableOpacityStyle: confirmDoubleTouchableOpacityStyle,
                textStyle: confirmDoubleTextStyle,
                onPress: () => {
                  console.log(1);
                },
              },
              {
                text: 'Cancel',
                touchableOpacityStyle: cancelDoubleTouchableOpacityStyle,
                textStyle: cancelDoubleTextStyle,
                onPress: () => {
                  setShowAlert(false);
                },
              },
            ]}
          />
        ) : (
          ''
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}

// <Alert
//             title="Please enter all values."
//             content="Unpopulated value exists."
//             buttons={[
//               {
//                 text: 'Confirm',
//                 touchableOpacityStyle: confirmSingleTouchableOpacityStyle,
//                 textStyle: confirmSingleTextStyle,
//                 onPress: () => {
//                   setShowAlert(false);
//                 },
//               },
//             ]}
//           />
