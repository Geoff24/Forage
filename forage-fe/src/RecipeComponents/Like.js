import React, { useState } from 'react'
import { Pressable } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import axios from 'axios'


function Like({recipe}) {
    const [likeIcon, setLikeIcon] = useState("heart-outline")
    const [likedRecipes, setLikedRecipes] = useState([])

    function onPressLike() {
        console.log(recipe.id)
        if (likeIcon == "heart-outline") {
            setLikeIcon("heart")

            const user = axios.post("http://localhost:3000/users/profile", {username:"testuser3"})
            const Liked = axios.post("http://localhost:3000/likes/like", {id:user.id})
            console.log(Liked)
            //Liked.push(recipe.id)
            axios.post("http://localhost:3000/likes/like", Liked)
            
        }
        else {
            setLikeIcon("heart-outline")

            const Liked = axios.get("http://localhost:3000/likes/unlike", {id:"testuser2"})
            Liked.push(recipe.id) //filter id instead
            axios.post("http://localhost:3000/likes/unlike", Liked)
        }
    }

    return (
        <Pressable onPress={() => onPressLike()}>
            <Ionicons name={likeIcon} color={"red"} size="28%"/>
        </Pressable>
    )
}

export default Like