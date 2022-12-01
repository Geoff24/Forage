import React, { useEffect, useRef, useState } from 'react'
import { BarCodeScanner } from 'expo-barcode-scanner'
import { StyleSheet, View, Text, Button, ActivityIndicator, Image, ScrollView, ImageBackground, Pressable } from 'react-native';
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { useNavigation } from '@react-navigation/native'
import ScannedItem from '../src/ScannerComponents/ScannedItem';

function BarcodeScanner() {
    const navigation = useNavigation();

    // TODO: Make API key secret
    const barcodeLookupApiKey = 'u60dpb9qp76fpv59xt4d7lgkhm1y6o';

    const [scanned, setScanned] = useState(false)

    const sheetRef = useRef(null)
    const [isOpen, setIsOpen] = useState(false)
    const snapPoints = ["50%", "95%"]

    const [scannedItems, setScannedItems] = useState([]);


    // When done is clicked
    const onDonePressed = () => {
        navigation.navigate('Pantry')
    }

    // Barcode is scanned
    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);

        sheetRef.current?.snapToIndex(0)
        setIsOpen(true)

        fetch('https://api.barcodelookup.com/v3/products?barcode=' + data + '&formatted=y&key=' + barcodeLookupApiKey)
            .then((response) => response.json())
            .then((json) => {
                setScannedItems([...scannedItems, json.products[0]])
            })
            .catch((error) => setLoading(false))
    }

    // Return scanner
    return (
        <View style={styles.container}>
            <View style={styles.barcodebox}>
                <BarCodeScanner
                    onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                    style={{ height: '100%', width: '100%' }}
                >

                    <ImageBackground
                        style={[styles.scanImage, { opacity: isOpen ? 0 : 1 }]}
                        source={{ uri: 'https://i.stack.imgur.com/VVqSa.png' }}
                    >
                        <Pressable onPress={onDonePressed} style={styles.done}>
                            <Text style={styles.buttonText}>Done</Text>
                        </Pressable>
                    </ImageBackground>

                    <BottomSheet
                        ref={sheetRef}
                        snapPoints={snapPoints}
                        enablePanDownToClose={true}
                        index={-1}
                        onClose={() => {
                            setIsOpen(false)
                            setScanned(false)
                        }}
                    >
                        <BottomSheetView style={styles.sheetStyle}>
                            <Text style={styles.sheetTitle}>Pantry Ingredients</Text>
                            <ScrollView>
                                {scannedItems.map((itemData, index) => (
                                    <ScannedItem item={itemData} key={index} />
                                ))}
                            </ScrollView>
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
        height: '102.5%',
        width: '100%',
        overflow: 'hidden',
        borderRadius: 30,
    },

    sheetStyle: {
        flex: 1
    },

    sheetTitle: {
        padding: 5,
        fontSize: 19,
        fontWeight: 'bold',
        textAlign: 'center'
    },

    done: {
        backgroundColor: '#EB3737',
        width: '22%',
        height: '6%',
        padding: 10,
        marginVertical: 50,
        alignItems: 'center',
        borderRadius: 16,
        top: '1%',
        left: '75%',
        borderColor: 'white',
        borderWidth: 2
    },

    buttonText: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 22,
    }


});


export default BarcodeScanner