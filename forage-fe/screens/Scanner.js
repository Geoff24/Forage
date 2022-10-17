import React, { useEffect, useState } from 'react'
import { BarCodeScanner } from 'expo-barcode-scanner'
import { StyleSheet, View, Text, Button, ActivityIndicator, Image} from 'react-native';

function Scanner() {
  const barcodeLookupApiKey = 'xn1rxlhdit2ce7yfxd3yvtne7ah1tf';
  const [loading, setLoading] = useState(true);


  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false)
  const [title, setTitle] = useState('Not yet scanned')
  const [image, setImage] = useState(null)

  // Request Camera Permission
  const askForCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })()
  }

  useEffect(() => {
    askForCameraPermission();
  }, []);


  // Barcode is scanned
  const handleBarCodeScanned = ({type, data}) => {
    setScanned(true);

    fetch('https://api.barcodelookup.com/v3/products?barcode=' + data + '&formatted=y&key=' + barcodeLookupApiKey)
    .then((response) => response.json() )
    .then((json) => {
      console.log(json.products[0].images[0])
      setTitle(json.products[0].title)
      setImage(json.products[0].images[0])
    })
    .catch((error) => setLoading(false))


    console.log('Type: ' + type + '\nData: ' + data);
  }

  // Retrieve ingredient based on barcode

  // Check Permission and return screens
  if (hasPermission === null) {
    return (
      <View>
        <Text>Requsting camera permission</Text>
      </View>
    )
  }

  if (hasPermission === false) {
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
        style={{ height: '100%', width: '100%' }}>
        <Image
          style={styles.scanImage}
          source={{uri: 'https://i.stack.imgur.com/VVqSa.png'}}
        /> 
      </BarCodeScanner>

    </View>
    <Text style={styles.maintext}>{title}</Text>
    <Image
      style={{width: 100, height: 100}}
      source={{uri: image}}
    />

    {scanned && <Button title={'Scan again?'} onPress={() => setScanned(false)} color='tomato' />}
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  maintext: {
    fontSize: 16,
    margin: 20,
  },
  scanImage: {
    width: '100%',
    height: '100%',
  },
  barcodebox: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    overflow: 'hidden',
    borderRadius: 30,
    backgroundColor: 'tomato'
  }
});


export default Scanner