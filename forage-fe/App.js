import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AnimatedSplash from "react-native-animated-splash-screen";

export default function App() {
  const [loading, setLoading] = useState(false);

  setTimeout(() => {
    setLoading(true);
  }, 2000);

  return (
    <AnimatedSplash
      translucent={false}
      isLoaded={loading}
      logoImage={require("./assets/splash.png")}
      backgroundColor={"#EB3737"}
      logoHeight={500}
      logoWidth={500}
    >
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    </AnimatedSplash>
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
