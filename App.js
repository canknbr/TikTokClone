import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './src/navigation';
export default function App() {
  return (
    <View>
      <Navigator />
      <StatusBar style="auto" />
    </View>
  );
}
