import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { ScrollView, View, Text, Image, StyleSheet, useWindowDimensions, Pressable } from 'react-native'
import CustomInput from '../src/CustomInput/CustomInput'
import CustomButton from '../src/CustomButton/CustomButton'
import { useNavigation } from '@react-navigation/native'
import {useForm, Controller} from 'react-hook-form'
import apikey from '../src/apiKey';
import RecipeItem from '../src/RecipeComponents/RecipeItem';
import { block } from 'react-native-reanimated';

const FavoritesScreen = () => {

    useEffect(() => {
        const getRecipes = async () => {
            const token = await axios.post("http://localhost:3000/auth/login", {username:"testuser3", password:"password"})
            const config = {
                headers: { Authorization: `Bearer ${token.data.access_token}` }
            }
            
            const likedRecipes = await axios.get("http://localhost:3000/likes", config)
            console.log(likedRecipes.data)

            // https://api.spoonacular.com/recipes/663748/information?apiKey=2d05a1de814a41cf9a912600c9a5c73a

            for(let i = 0; i < likedRecipes.data.length; i++){
                const recipeId = parseInt(likedRecipes.data[i].apiId)
                const recipeUrl = `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${apikey}`
                fetch(recipeUrl)
                .then((response) => response.json())
                .then((json) => {
                    setRecipes([...recipes, json])
                })
                .catch((error) => alert(error))
            }
        }
        getRecipes()
    }, [])

    const [recipes, setRecipes] = useState([])
    
    return (
        <View style={styles.root}>
            <ScrollView>
                {recipes.length>0 && recipes.map((recipe) => (
                    <View style={styles.favorites}>
                        <Pressable onPress={() => onPressRecipe(recipe)} key={recipe.id}>
                            <RecipeItem recipe={recipe} />
                        </Pressable>
                    </View>
                ))}
            </ScrollView>
            
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: 'white',
    },
    favorites: {
        flexDirection: 'column',
    },
    text: {
        color: '#EB3737'
    },
})

export default FavoritesScreen