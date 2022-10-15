import React from 'react';
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView } from 'react-native';


import Navigation from './src/Navigation/Navigation';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      
      
      <Navigation/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({ // TODO fix style
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
});