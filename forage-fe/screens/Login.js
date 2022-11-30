import React, {useState} from 'react'
import axios from 'axios';
import { ScrollView, View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native'
import Logo from '../assets/forage-white-logo.png' // TODO change logo
import CustomInput from '../src/CustomInput/CustomInput'
import CustomButton from '../src/CustomButton/CustomButton'
import { useNavigation } from '@react-navigation/native'
import { faLock } from '@fortawesome/free-solid-svg-icons';
import {useForm, Controller} from 'react-hook-form';
import { TextInput } from 'react-native-gesture-handler'
import * as SecureStore from 'expo-secure-store';
import { AsyncStorage } from 'react-native';

const LoginScreen = () => {
    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');
    const [loginFailed, setLoginFailed] = useState(false);

    const {height} = useWindowDimensions();
    const navigation = useNavigation();

    const {control, handleSubmit, formState: {errors}} = useForm();


    const onLoginPressed = async (data) => {
        
        try{
            const response = await axios.post("http://localhost:3000/auth/login", data)
            console.log(response)
            setLoginFailed(false)
            await SecureStore.setItemAsync("username", data.username);
            await SecureStore.setItemAsync("access_token", response.data.access_token);
            await AsyncStorage.setItem("username", data.username)
            await AsyncStorage.setItem("access_token", response.data.access_token)
            //console.log(await SecureStore.getItemAsync("username"))
            navigation.navigate("Scanner")

        } catch(e){
            console.log(e)
            setLoginFailed(true);
        }
    
        

    }

    const onForgotPasswordPressed = () => {
        // TODO add feature
        navigation.navigate("ForgotPassword");
    }

    const onSignUpPressed = () => {
        // TODO add feature
        navigation.navigate("Signup");
    }

    const onScanNowPressed = () => {
        navigation.navigate("Scanner");
    }

    return (
        <View style={styles.root}>
            <Image source = {Logo} 
            style={styles.logo} 
            resizeMode = "contain" />

            <CustomInput name="username" placeholder="Username" control={control} rules={{required: "Username is required"}} />
            <CustomInput name="password" placeholder="Password" control={control} rules={{required: "Password is required"}} secureTextEntry/>
            {loginFailed && <Text style={{color:"red"}}>Invalid username or password</Text>}

            <CustomButton text="Log in" onPress={handleSubmit(onLoginPressed)}/>

            <Text style={styles.text} onPress={onScanNowPressed}>Scan Now</Text>
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
        top: -30
    },
    text: {
        color: 'blue'
    },
    incorrect: {
        color: 'red'
    },
    username: {
        position:'absolute',
        top:900
    }
})

export default LoginScreen