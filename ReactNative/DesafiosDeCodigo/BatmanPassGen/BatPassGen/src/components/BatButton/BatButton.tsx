import React, { useState } from 'react';
import { Button, Text, View, Pressable } from 'react-native';
import * as Clipboard from 'expo-clipboard'

import { styles } from './BatButtonStyles';
import { BatTextInput } from '../BatTextInput/BatTextInput';
import generatePass from '../../services/passwordService';

export function BatButton() {

const [pass, setPass] = useState('')

function handleGenerateButton () {
  let generateToken = generatePass()

  setPass(generateToken)
}

function handleCopyButton () {
  Clipboard.setStringAsync(pass)
}

  return (
    <View>
        <BatTextInput pass={pass}/>

        <Pressable style={styles.button} onPress={handleGenerateButton}>
            <Text style={styles.copyText}>GENERATE</Text>
        </Pressable>

        <Pressable style={styles.button} onPress={handleCopyButton}>
            <Text style={styles.copyText}>🧾 COPY</Text>
        </Pressable>
    </View>
  );
}