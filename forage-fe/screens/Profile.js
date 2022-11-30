import React, {useState} from 'react'
import axios from 'axios';
import { ScrollView, View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native'
import CustomInput from '../src/CustomInput/CustomInput'
import CustomButton from '../src/CustomButton/CustomButton'
import { useNavigation } from '@react-navigation/native'
import {useForm, Controller} from 'react-hook-form'
import img from "../assets/image.png"

const ProfileScreen = () => {
    
    return (
        <View style={styles.root}>
            <Image source={img}/>
            <Text style={styles.tile} >Change Username</Text>
            <Text style={styles.tile}>Change Password</Text>
            <Text style={styles.tile}>Create a Recipe</Text>
            
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
    tile:{
        padding: 5,
        padding: 15,
        width: '65%',
        borderBottomColor: 'black',
        borderBottomWidth: StyleSheet.hairlineWidth,
        alignItems: 'center'
    },
    
    text: {
        color: '#EB3737'
    },
})

export default ProfileScreen