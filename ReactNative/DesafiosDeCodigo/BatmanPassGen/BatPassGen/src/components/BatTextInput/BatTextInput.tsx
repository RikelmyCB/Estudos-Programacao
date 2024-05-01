import React from 'react';
import { TextInput } from 'react-native';
import { styles } from './BatTextInputStyles';

interface BatTextInputProps {
  pass:string
}

export function BatTextInput(props : BatTextInputProps) {
  return (
        <TextInput
        placeholder='Pass'
        style={styles.inputStyle}
        multiline={true}
        value={props.pass}
        showSoftInputOnFocus={false}
        >

        </TextInput>
  );
}