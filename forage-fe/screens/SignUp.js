import React, {useState} from 'react'
import { ScrollView, View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native'
import Logo from '../assets/forage-white-logo.png' // TODO change logo
import CustomInput from '../src/CustomInput/CustomInput'
import CustomButton from '../src/CustomButton/CustomButton'
import { useNavigation } from '@react-navigation/native'

const SignupScreen = () => {
    const [fullname, setfullname] = useState('');
    const [emailId, setemailId] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setconfirmpassword] = useState('');

    const {height} = useWindowDimensions();
    const navigation = useNavigation();

    const onSignupPressed = () => {
        // TODO add sign up
        console.warn("sign up")

    }

    const onExistingAccountPressed = () => {
        navigation.navigate("LogIn")
    }

    return (
        <View style={styles.root}>
            <Image source = {Logo} 
            style={[styles.logo, {height: height * 0.3}]} 
            resizeMode = "contain" />

            <CustomInput placeholder="Full name" value={fullname} setValue={setfullname}/>
            <CustomInput placeholder="Email ID" value={emailId} setValue={setemailId}/>
            <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry/>
            <CustomInput placeholder="Confirm Password" value={confirmpassword} setValue={setconfirmpassword} secureTextEntry/>

            <CustomButton text="Sign up" onPress={onSignupPressed}/>

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
        top: -30
    },
    text: {
        color: 'blue'
    },
})

export default SignupScreen