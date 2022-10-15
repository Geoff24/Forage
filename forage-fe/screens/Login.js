import React, {useState} from 'react'
import { ScrollView, View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native'
import Logo from '../assets/icon.png' // TODO change logo
import CustomInput from '../src/CustomInput/CustomInput'
import CustomButton from '../src/CustomButton/CustomButton'
import { useNavigation } from '@react-navigation/native'

const LoginScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {height} = useWindowDimensions();
    const navigation = useNavigation();

    const onLoginPressed = () => {
        // TODO validate User
        console.warn("log in");
    }

    const onForgotPasswordPressed = () => {
        // TODO add feature
        navigation.navigate("ForgotPassword");
    }

    const onSignUpPressed = () => {
        // TODO add feature
        navigation.navigate("SignUp");
    }

    return (
        <ScrollView showsHorizontalScrollIndicator={false}>
            <View style={styles.root}>
                <Image source = {Logo} 
                style={[styles.logo, {height: height * 0.3}]} 
                resizeMode = "contain" />

                <CustomInput placeholder="Username" value={username} setValue={setUsername}/>
                <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry/>

                <CustomButton text="Log in" onPress={onLoginPressed}/>

                <Text style={styles.text} onPress={onSignUpPressed}>Don't have an account? Sign up</Text>
                <Text style={styles.text} onPress={onForgotPasswordPressed}>Forgot Password?</Text>
                
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({ // TODO fix style
    root: {
        alignItems: 'center',
        padding: 20, 
    },
    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 200,
    },
    text: {
        color: 'blue'
    }
})

export default LoginScreen