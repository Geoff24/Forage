import React from 'react';
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, View } from 'react-native';


import Navigation from './Routes/Navigation';


export default function App() {
  return (
    <View style={styles.container}>
      <Navigation/>
    </View>
  );
}

const styles = StyleSheet.create({ // TODO fix style
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});