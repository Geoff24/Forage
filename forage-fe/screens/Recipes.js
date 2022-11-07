import React, { useState, useEffect } from 'react'
import { ScrollView, View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native'
import Logo from '../assets/forage-white-logo.png'
import CustomInput from '../src/CustomInput/CustomInput'
import CustomButton from '../src/CustomButton/CustomButton'
import { useNavigation } from '@react-navigation/native'
import { faLock } from '@fortawesome/free-solid-svg-icons';
import {useForm, Controller} from 'react-hook-form';
import { TextInput } from 'react-native-gesture-handler'
import NavigationBar from '../Routes/NavBar'
import RecipeItem from '../src/RecipeComponents/RecipeItem'


const RecipesScreen = ({route}) => {
    const [recipes, setRecipes] = useState([])

    // TODO: Make API key secret
    const recipeApiKey = '4a1a5f9e9b3b456bac7a6119b023590e'
    const recipesUrl = 'https://api.spoonacular.com/recipes/findByIngredients?apiKey='
    

    useEffect(() => {
        fetch(recipesUrl + recipeApiKey + "&ingredients=" + "chicken,flour&")
        .then((response) => response.json())
        .then((json) => {
            setRecipes(json)
            console.log(recipes)
        })
        .catch((error) => alert(error))
    }, [])    

    // console.log(route.params.scannedItems)

    const [searchBarValue, setSearchBarValue] = useState('');
    
    return (
        <View style={styles.container}>
            <TextInput placeholder='Search' value={searchBarValue} onChangeText={setSearchBarValue} style={styles.searchBar}/>
            <ScrollView style={styles.allRecipes}>
                {recipes.map((recipe) => (
                    <RecipeItem recipe={recipe}/>
                ))}
            </ScrollView>
        </View>
    )
}

export default RecipesScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#FFF',
    },

    allRecipes: {
        top: '10%',
    },

    searchBar: {
        backgroundColor: '#FBFBFB',
        top: '7%',
        left:'2%',
        width: '85%',
        height: '5%',
        paddingLeft: '5%',

        borderWidth: 2,
        borderColor: "#EBEBEB",
        borderRadius: 100
    },

})
