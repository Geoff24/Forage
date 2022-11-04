import React, { useEffect, useRef, useState } from 'react'
import { BarCodeScanner } from 'expo-barcode-scanner'
import { StyleSheet, View, Text, Button, ActivityIndicator, Image} from 'react-native';
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import CustomButton from '../src/CustomButton/CustomButton';

function Scanner() {
  // TODO: Make API key secret
  const barcodeLookupApiKey = 'ogdtnacr5sik6wih46xogatvxophig';
  const [loading, setLoading] = useState(true);


  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false)
  const [title, setTitle] = useState('Not yet scanned')
  const [image, setImage] = useState(null)

  const sheetRef = useRef(null)
  const [isOpen, setIsOpen] = useState(false)
  const snapPoints = ["50%", "95%"]

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

  // When done is clicked
  const onDonePressed = () => {
  // TODO: Implement done
  }

  // Barcode is scanned
  const handleBarCodeScanned = ({type, data}) => {
    setScanned(true);

    sheetRef.current?.snapToIndex(0)
    setIsOpen(true)

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
            style={[styles.scanImage, {opacity: isOpen ? 0 : 1}]}
            source={{uri: 'https://i.stack.imgur.com/VVqSa.png'}}
          /> 

          <CustomButton text="Done" onPress={onDonePressed}/>

          <BottomSheet
            ref={sheetRef}
            snapPoints={snapPoints}
            enablePanDownToClose={true}
            index={-1}
            onClose={() => setIsOpen(false)}
          >
            <BottomSheetView style={styles.sheetStyle}>
              <Image
                style={{width: 100, height: 100}}
                source={{uri: image}}
              />
              <Text style={styles.maintext}>{title}</Text>

              {scanned && <Button title={'Scan again?'} onPress={() => setScanned(false)} color='tomato' />}
            </BottomSheetView>
        </BottomSheet>

      </BarCodeScanner>

    </View>
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
    top: 20
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
  },
  sheetStyle: {
    flexDirection:'row'
  }
});


export default Scanner