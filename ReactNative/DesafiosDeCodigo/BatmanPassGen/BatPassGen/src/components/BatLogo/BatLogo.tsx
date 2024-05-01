import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './BatLogoStyles';
import batLogo from '../../../assets/Pictures/BatmanLogo.png'

export function BatLogo() {
  return (
    <View>
      <Text style={styles.title}> BAT PASS GENERATOR </Text>
      <Image source={batLogo} style={styles.batLogoStyle}/>
    </View>
  );
}