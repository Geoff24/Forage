import React, { useState } from 'react'
import { Pressable } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'


function Like() {
    const [likeIcon, setLikeIcon] = useState("heart-outline")

    function onPressLike() {
        if (likeIcon == "heart-outline") {
            setLikeIcon("heart")
        }
        else {
            setLikeIcon("heart-outline")
        }
    }

    return (
        <Pressable onPress={() => onPressLike()}>
            <Ionicons name={likeIcon} color={"red"} size="40%"/>
        </Pressable>
    )
}

export default Like