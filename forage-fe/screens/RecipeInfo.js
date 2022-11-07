import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { ScrollView, View, Text, Image, StyleSheet, useWindowDimensions, SafeAreaView } from 'react-native'
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
            <Text style={styles.directionTitle}>Directions: </Text>
            {recipeinfo.length>0 && <Text style = {styles.recipeText}>{recipeinfo[0]["steps"][0]["step"]}</Text>}
            
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: 'white',
    },
    recipeImage: {
        width: '90%',
        height: '30%',
        margin: '5%',
    },

    recipeTitle: {
        fontSize: '30em',
        fontWeight: 'bold',
        width: '80%',
        margin: '5%',
        marginBottom: '0%'
    },

    recipeText: {
        color: '#363636',
        margin: '5%',
        marginTop: '2%',
        fontSize: '20em'
    },

    directionTitle: {
        fontSize: '22em',
        fontWeight: 'bold',
        marginLeft: '5%'
    }
})

export default RecipeInfoScreen