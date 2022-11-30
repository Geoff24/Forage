import React, {useState} from 'react'
import axios from 'axios';
import { ScrollView, View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native'
import CustomInput from '../src/CustomInput/CustomInput'
import CustomButton from '../src/CustomButton/CustomButton'
import { useNavigation } from '@react-navigation/native'
import {useForm, Controller} from 'react-hook-form'
import * as SecureStore from 'expo-secure-store';
import { AsyncStorage } from 'react-native';

// async function getValue(key){
//     const result = await SecureStore.getItemAsync(key);
//     return result
// }

const ProfileScreen = async () => {
    const navigation = useNavigation();
    // const result = await getValue("username")
    const result = await AsyncStorage.getItem("username");
    if (result) {
        console.log(result)
    }
    else{
        navigation.navigate("Login")
    }
    return (
        <View style={styles.root}>

            <Text style = {styles.text}>Profile Screen</Text>
            
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',

    },
    
    text: {
        color: '#EB3737'
    },
})

export default ProfileScreen