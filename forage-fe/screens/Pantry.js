import React, { useState } from 'react'
import axios from 'axios';
import { ScrollView, View, Text, Image, StyleSheet, Pressable } from 'react-native'
import CustomInput from '../src/CustomInput/CustomInput'
import CustomButton from '../src/CustomButton/CustomButton'
import { useNavigation } from '@react-navigation/native'
import Ionicons from 'react-native-vector-icons/Ionicons'

const PantryScreen = () => {
    const [pantryList, setPantryList] = useState([])
    const navigation = useNavigation();


    const scanItems = () => {
        navigation.navigate("PantryScanner")
    }

    return (
        <View style={styles.root}>
            {pantryList.length > 0 ? <Text>Items in pantry</Text> : <Text>No items in pantry</Text>}
            <Pressable style={styles.scanButton} >
                <Ionicons name="barcode-outline" color={"white"} size="50%" onPress={scanItems} />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: 'white',

    },

    text: {
        color: '#EB3737'
    },

    scanButton: {
        backgroundColor: '#EB3737',
        left: '77%',
        top: '85%',
        alignItems: 'center',
        width: '18%',
        borderRadius: '50%',
        padding: '2%'
    }
})

export default PantryScreen