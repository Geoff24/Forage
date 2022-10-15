import React from "react";
import { View, Text } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from '../../screens/Splash';
import LoginScreen from "../../screens/Login";
import SignupScreen from '../../screens/SignUp';
import ForgotPasswordScreen from '../../screens/ForgotPassword';

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Splash" component={SplashScreen} />
                <Stack.Screen name="LogIn" component={LoginScreen} />
                <Stack.Screen name="SignUp" component={SignupScreen} />
                <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;