import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, Button, ActivityIndicator, Image, Pressable } from 'react-native';
import { CheckBox } from '@rneui/base';
import Like from './Like';


const RecipeItem = ({ recipe }) => {
    var calories = Math.floor(Math.random() * 800) + 100;
    var time = Math.floor(Math.random() * 60) + 1;
    var missingIngredients = recipe.missedIngredientCount

    return (
        <View style={styles.container} >
            <Image style={styles.recipeImage} source={{ uri: recipe.image }} />
            <View style={styles.textDetails}>
                <Text style={styles.recipeTitle}>{recipe.title}</Text>
                {missingIngredients > 0 ? <Text style={styles.missingIngredients}>{missingIngredients} missing ingredients</Text> : <View></View>}
                <View style={styles.recipeInfoBox}>
                    {/* <Text style={styles.recipeInfo}>Calories: </Text> */}
                    <Text style={styles.recipeInfoData}>{calories} calories</Text>
                    {/* <Text style={styles.recipeInfo}>Time: </Text> */}
                    <Text style={styles.recipeInfoData}>{time} min</Text>
                </View>
            </View>

            <Like />

            {/* <Text style={styles.recipe_info}>{recipe.likes}</Text> */}
        </View>

    )
}

const styles = StyleSheet.create({
    recipeImage: {
        width: 80,
        height: 80,
        marginRight: '5%',
    },

    recipeTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        flexWrap: 'wrap',
    },

    recipeInfo: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FF894c'
    },

    container: {
        flexDirection: 'row',
        padding: 5,
        padding: 15,
        borderBottomColor: 'black',
        borderBottomWidth: StyleSheet.hairlineWidth,
        alignItems: 'center'
    },

    textDetails: {
        width: '65%',
    },

    recipeInfoBox: {
        marginTop: '2%',
        flexDirection: 'row'
    },

    recipeInfoData: {
        fontSize: 15,
        marginRight: '8%',
        color: '#FF894c',
        borderColor: '#FF894c',
        borderWidth: 2,
        padding: '1%',
        borderRadius: '5%',
        fontWeight: 'bold',
    },
    missingIngredients: {
        backgroundColor: '#EB3737',
        color: '#FFFFFF',
        width: '70%',
        padding: '2%',
        marginVertical: '2%',
        borderRadius: '10%',
        overflow: 'hidden',
        textTransform: 'capitalize',
        fontWeight: 'bold',
        marginBottom: '1%'
    }
});

export default RecipeItem
