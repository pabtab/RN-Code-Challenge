import React from 'react';
import { View, TextInput } from 'react-native';
import Styles from './Input.style';

const Input = ({onChangeText}) => {
  return (
    <View style={Styles.inputContainer}>
      <TextInput
        onChangeText={onChangeText}
        style={Styles.input}
      />
    </View>
  )
}

export default Input
