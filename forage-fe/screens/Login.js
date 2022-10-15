import React, {useState} from 'react'
import { ScrollView, View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native'
import Logo from '../assets/forage-white-logo.png' // TODO change logo
import CustomInput from '../src/CustomInput/CustomInput'
import CustomButton from '../src/CustomButton/CustomButton'
import { useNavigation } from '@react-navigation/native'
import { faLock } from '@fortawesome/free-solid-svg-icons';

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
        <View style={styles.root}>
            <Image source = {Logo} 
            style={styles.logo} 
            resizeMode = "contain" />

            <CustomInput placeholder="Username" value={username} setValue={setUsername} />
            <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry/>

            <CustomButton text="Log in" onPress={onLoginPressed}/>

            <Text style={styles.text} onPress={onSignUpPressed}>Don't have an account? Sign up</Text>
            <Text style={styles.text} onPress={onForgotPasswordPressed}>Forgot Password?</Text>
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
        top: -50
    },
    text: {
        color: 'blue'
    },
    username: {
        position:'absolute',
        top:900
    }
})

export default LoginScreen