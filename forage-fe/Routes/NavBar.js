import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SplashScreen from '../screens/Splash';
import LoginScreen from "../screens/Login";
import SignupScreen from '../screens/SignUp';
import ForgotPasswordScreen from '../screens/ForgotPassword';
import ScannerScreen from '../screens/Scanner';
import RecipesScreen from '../screens/Recipes';
import HomeScreen from '../screens/Home';
import FavoritesScreen from '../screens/Favorites';
import PantryScreen from '../screens/Pantry';
import ProfileScreen from '../screens/Profile';

const Tab = createBottomTabNavigator();


function ScannerStackScreen(){
    return(
        <Tab.Navigator 
        initialRouteName='Scanner'
        screenOptions={{headerShown: false}}>
            <Tab.Screen name="Scanner" component={ScannerScreen} />
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Favorites" component={FavoritesScreen} />
            <Tab.Screen name="Pantry" component={PantryScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    )
}





const Stack = createNativeStackNavigator();

const NavigationBar = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Splash" component={SplashScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Signup" component={SignupScreen} />
                <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
                <Stack.Screen name="Scanner" component={ScannerStackScreen} />
                <Stack.Screen name="Recipes" component={RecipesScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default NavigationBar;