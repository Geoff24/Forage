import React, { useEffect, useState } from 'react'
import { BarCodeScanner } from 'expo-barcode-scanner'
import { StyleSheet, View, Text } from 'react-native';

function Scanner() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false)
  const [text, setText] = useState('Not yet scanned')

  // Request Camera Permission
  const askForCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status == 'granted');
    })
  }

  useEffect(() => {
    askForCameraPermission();
  }, [])

  // Barcode is scanned
  const handleBarCodeScanned = ({type, data}) => {
    setScanned(true);
    setText(data);
    console.log('Type: ' + type + '\nData: ' + data);
  }

  // Check Permission and return screens
  if (hasPermission === null) {
    return (
      <View>
        <Text>Requsting camera permission</Text>
      </View>
    )
  }
  
  if (hasPermission === False) {
    return (
      <View>
        <Text>No access to camera</Text>;
        <Button title={'Allow Camera'} onPress={() => askForCameraPermission()} /> 
      </View>
    )
  }

  // Return scanner
  return (
    <View style={styles.container}>
    <View style={styles.barcodebox}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={{ height: 400, width: 400 }} />
    </View>
    <Text style={styles.maintext}>{text}</Text>

    {scanned && <Button title={'Scan again?'} onPress={() => setScanned(false)} color='tomato' />}
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  maintext: {
    fontSize: 16,
    margin: 20,
  },
  barcodebox: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 300,
    width: 300,
    overflow: 'hidden',
    borderRadius: 30,
    backgroundColor: 'tomato'
  }
});

export default Scanner