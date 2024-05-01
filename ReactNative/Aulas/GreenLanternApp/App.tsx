import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import SymbolOn from './assets/Pictures/symbol-on.png';
import SymbolOff from './assets/Pictures/symbol-off.png';

function Print (texto) {
  console.log(texto)
}


export default function App() {
  
  const [isActive, setIsActive] = useState(false)
  
  function handleSymbol () {

    setIsActive((oldValue:boolean) => {
      return !oldValue
    })

  }

return (
    <View style={isActive ? styles.containerOn : styles.containerOff}>

      <TouchableOpacity onPress ={handleSymbol}>
        <Image source={isActive ? SymbolOn : SymbolOff}></Image>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  containerOn: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },

  containerOff: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
});