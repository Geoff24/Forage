import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { ScrollView, View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native'
import CustomInput from '../src/CustomInput/CustomInput'
import CustomButton from '../src/CustomButton/CustomButton'
import { useNavigation } from '@react-navigation/native'
import {useForm, Controller} from 'react-hook-form'
import BackButton from '../src/CustomButton/BackButton';


const RecipeInfoScreen = ( {route} ) => {

    const [recipeinfo, setRecipeinfo] = useState([])
    const recipe = route.params.recipe
    // TODO: Make API key secret
    const recipeApiKey = '4a1a5f9e9b3b456bac7a6119b023590e'
    const recipesUrl = `https://api.spoonacular.com/recipes/${recipe.id}/analyzedInstructions?apiKey=${recipeApiKey}`
    

    
    useEffect(() => {
        fetch(recipesUrl)
        .then((response) => response.json())
        .then((json) => {
            setRecipeinfo(json)
        })
        .catch((error) => alert(error))
    }, [])
    

    
    return (
        <View style={styles.root}>
            <BackButton/>
            <Image style={styles.recipeImage} source={{uri: recipe.image}}/>
            {recipeinfo.length>0 && <Text style = {styles.recipeText}> {recipeinfo[0]["steps"][0]["step"]} </Text>}
            
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
    recipeImage: {
        width: 200,
        height: 200,
        marginRight: '5%',
    },
    
    recipeText: {
        color: 'red'
    },
})

export default RecipeInfoScreen