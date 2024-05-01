import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <View onTouchEnd={(event) => {Alert.alert('Clicou no texto né seu safado?')}}>
        <Text>
          Não clica aqui!
        </Text>
      </View>

      <View>
        <Text selectable={true}>
          Clica em mim e segura!
        </Text>
      </View>

      <Text>
        <Text>Texto</Text>
        <Text> Composto</Text>
      </Text>

      <Text style={[styles.borderWidth, styles.borderColor]}>Array de Styles</Text>

      <Text onLongPress={(event) => {Alert.alert('Esse é o onLongPress')}}>Segura por um tempo aqui!</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  borderWidth: {
    borderWidth: 2,
  },
  
  borderColor: {
    borderColor: '#f00',
  }
});
