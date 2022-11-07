import React from "react";
import { View, Text, StyleSheet,Pressable } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'


const BackButton = () => {
    const navigation = useNavigation()

    const onBackButtonPress = () => {
        navigation.goBack()
    }
    return (
        <Pressable onPress={onBackButtonPress}>
            <Ionicons name="chevron-back" color={"red"} size={25}/>
        </Pressable>
    )
}
export default BackButton;