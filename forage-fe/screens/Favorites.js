import React, {useState} from 'react'
import axios from 'axios';
import { ScrollView, View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native'
import CustomInput from '../src/CustomInput/CustomInput'
import CustomButton from '../src/CustomButton/CustomButton'
import { useNavigation } from '@react-navigation/native'
import {useForm, Controller} from 'react-hook-form'

const FavoritesScreen = () => {
    const [recipes, setRecipes] = useState([])
    
    return (
        <View style={styles.root}>

            <Text style = {styles.text}>Favorites Screen</Text>
            
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

export default FavoritesScreen