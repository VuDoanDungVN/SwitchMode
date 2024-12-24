import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ThemeProvider from './App/Components/ThemeProvider';
import HomeScreen from './App/Components/HomeScreen';

export default function App() {
  return (
    <ThemeProvider>
      <HomeScreen/>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
