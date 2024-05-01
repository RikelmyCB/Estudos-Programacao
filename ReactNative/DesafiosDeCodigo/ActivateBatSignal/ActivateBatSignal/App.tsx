import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { Home } from './src/Screens/Home/Home';

export default function App() {
  return (
    <View>
      
      <Home/>

      <StatusBar style="dark" />
    </View>
  );
}
