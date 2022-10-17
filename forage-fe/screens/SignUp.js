import React, {useState} from 'react'
import { ScrollView, View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native'
import Logo from '../assets/forage-white-logo.png' // TODO change logo
import CustomInput from '../src/CustomInput/CustomInput'
import CustomButton from '../src/CustomButton/CustomButton'
import { useNavigation } from '@react-navigation/native'
import {useForm, Controller} from 'react-hook-form'

const SignupScreen = () => {
    
    const {height} = useWindowDimensions();
    const navigation = useNavigation();

    const {control, handleSubmit, formState: {errors}, watch} = useForm();
    const pwd = watch('password')

    const onSignupPressed = (data) => {
        // TODO add sign up
        console.log(data)
        console.warn("sign up")

    }

    const onExistingAccountPressed = () => {
        navigation.navigate("LogIn")
    }

    const email_regex = /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/ // TODO find better regex string
    return (
        <View style={styles.root}>
            <Image source = {Logo} 
            style={[styles.logo, {height: height * 0.3}]} 
            resizeMode = "contain" />

            <CustomInput name="username" placeholder="Username" control={control} rules={{required: "Username is required"}} />
            <CustomInput name="emailId" placeholder="Email" control={control} rules={{required: "Email is required", pattern: {value: email_regex, message: "Email address is invalid"}}}/>
            <CustomInput name="password" placeholder="Password" control={control} secureTextEntry rules={{required: "Password is required"}}/>
            <CustomInput name="confirmpassword" placeholder="Confirm Password" control={control} secureTextEntry rules={{validate: value => value === pwd || 'Password does not match' }}/>

            <CustomButton text="Sign up" onPress={handleSubmit(onSignupPressed)}/>

            <Text style = {styles.text} onPress={onExistingAccountPressed}>Already have an account? Log in</Text>
            
        </View>
    )
}

const styles = StyleSheet.create({ // TODO fix style
    root: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',

    },
    logo: {
        width: 363,
        height: 254,
        top: -10
    },
    text: {
        color: 'blue'
    },
})

export default SignupScreen