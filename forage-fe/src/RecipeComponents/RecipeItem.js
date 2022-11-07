import React, { useState } from 'react'
import { StyleSheet, View, Text, Button, ActivityIndicator, Image} from 'react-native';
import { CheckBox } from 'react-native-elements'

const RecipeItem = ( {recipe} ) => {

    return (
        
        <View style={styles.container } >
            <Image style={styles.recipeImage} source={{uri: recipe.image}}/>
            <Text style={styles.recipeTitle}>{recipe.title}</Text>
            <Text style={styles.recipe_info}>{recipe.likes}</Text>
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
        top: 20,
        width: '60%',
        marginRight: '5%',
    },

    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 5,
        padding: 15,
        borderBottomColor: 'black',
        borderBottomWidth: StyleSheet.hairlineWidth,
        alignItems: 'center'
    }
});

export default RecipeItem