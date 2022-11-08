import React, { useState, useEffect } from 'react'
import { ScrollView, View, Text, Image, StyleSheet, useWindowDimensions, Pressable } from 'react-native'
import Logo from '../assets/forage-white-logo.png'
import CustomInput from '../src/CustomInput/CustomInput'
import CustomButton from '../src/CustomButton/CustomButton'
import { useNavigation } from '@react-navigation/native'
import { faLock } from '@fortawesome/free-solid-svg-icons';
import {useForm, Controller} from 'react-hook-form';
import { TextInput } from 'react-native-gesture-handler'
import NavigationBar from '../Routes/NavBar'
import RecipeItem from '../src/RecipeComponents/RecipeItem'
import apikey from '../src/apiKey'


const RecipesScreen = ({route}) => {
    const [recipes, setRecipes] = useState([])
    const [dataSource, setDataSource] = useState([]);
    const [searchBarValue, setSearchBarValue] = useState('');

    // TODO: Make API key secret
    const recipeApiKey = apikey;
    const recipesUrl = 'https://api.spoonacular.com/recipes/findByIngredients?apiKey='
    const ingredients = route.params.scannedItems
    
    const navigation = useNavigation();

    useEffect(() => {
        console.log(ingredients)
        fetch(recipesUrl + recipeApiKey + "&ingredients=" + "chicken,flour&")
        .then((response) => response.json())
        .then((json) => {
            setRecipes(json)
            setDataSource(json)
        })
        .catch((error) => alert(error))
    }, [])    

    // console.log(route.params.scannedItems)

    const searchFunction = (text) => {
        if (text){
            setRecipes(dataSource)
            const newData = recipes.filter(function (item) {
                return item["title"].toLowerCase().includes(text.toLowerCase())
            })
            setRecipes(newData)
            setSearchBarValue(text)
        }
        else{
            setRecipes(dataSource)
            setSearchBarValue(text)
        }
    }
    
    function onPressRecipe(recipe){
        
        navigation.navigate("RecipeInfo", {recipe});
    }

    return (
        <View style={styles.container}>
            <TextInput placeholder='Search' value={searchBarValue} onChangeText={(text) => searchFunction(text)} style={styles.searchBar}/>
            <ScrollView style={styles.allRecipes}>
                {recipes.map((recipe) => (
                    <Pressable onPress={() => onPressRecipe(recipe)} key={recipe.id}>
                        <RecipeItem recipe={recipe} />
                    </Pressable>
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
