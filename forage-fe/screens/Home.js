import React, { useState, useEffect } from 'react'
import { ScrollView, View, Text, Image, StyleSheet, useWindowDimensions, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { TextInput } from 'react-native-gesture-handler'
import RecipeItem from '../src/RecipeComponents/RecipeItem'


const RecipesScreen = () => {
    const [searchBarValue, setSearchBarValue] = useState('');
    const [dataSource, setDataSource] = useState([]);
    const [recipes, setRecipes] = useState([]) //TODO change

    // TODO: Make API key secret
    const recipeApiKey = '4a1a5f9e9b3b456bac7a6119b023590e'
    const recipesUrl = 'https://api.spoonacular.com/recipes/findByIngredients?apiKey='
    const searchRecipeUrl = "https://api.spoonacular.com/recipes/complexSearch?apiKey="

    useEffect(() => {
        fetch(recipesUrl + recipeApiKey + "&ingredients=" + "chicken,flour&")
        .then((response) => response.json())
        .then((json) => {
            setRecipes(json)
            setDataSource(json)
        })
        .catch((error) => alert(error))
    }, [])    

    const navigation = useNavigation();

    const searchFunction = (text) => {
        if (text){
            fetch(searchRecipeUrl + recipeApiKey + "&query=" + text)
            .then((response) => response.json())
            .then((json) => {
                setRecipes(json.results)
                setDataSource(json.results)
                console.log(recipes)
            })
            .catch((error) => alert(error))
            // const newData = recipes.filter(function (item) {
            //     return item["title"].toLowerCase().includes(text.toLowerCase())
            // })

            setSearchBarValue(text)
        }
        else{
            setRecipes(dataSource)
            setSearchBarValue(text)
        }
    }

    function onPressRecipe(recipe) {
        navigation.navigate("RecipeInfo", {recipe});
    }
    
    return (
        <View style={styles.container}>
            <TextInput placeholder='Search' value={searchBarValue} onChangeText={ (text) => searchFunction(text)} style={styles.searchBar}/>

            {recipes.length>0 &&
            <ScrollView style={styles.allRecipes}>
                {recipes.map((recipe) => (
                    <Pressable onPress={() => onPressRecipe(recipe)} key={recipe.id}>
                        <RecipeItem recipe={recipe} />
                    </Pressable>
                ))}
            </ScrollView>}
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
