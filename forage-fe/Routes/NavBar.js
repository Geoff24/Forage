import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
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
            
            <Tab.Screen name="Home" 
            component={HomeScreen} 
            options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({color, size}) => (
                    <Ionicons name="home" color={color} size={size}/>
                )
            }}
            />
            <Tab.Screen name="Favorites" 
            component={FavoritesScreen}
            options={{
                tabBarLabel: "Favorites",
                tabBarIcon: ({color, size}) => (
                    <Ionicons name="heart" color={color} size={size}/>
                )
            }}
            />
            <Tab.Screen name="Scanner" 
            component={ScannerScreen} 
            options={{
                tabBarLabel: "Scanner",
                tabBarIcon: ({color, size}) => (
                    <Ionicons name="camera" color={color} size={size}/>
                )
            }}
            />
            <Tab.Screen name="Pantry" 
            component={PantryScreen} 
            options={{
                tabBarLabel: "Pantry",
                tabBarIcon:({color, size}) => (
                    <Entypo name="shop" color={color} size={size}/>
                )
            }}
            />
            <Tab.Screen name="Profile" 
            component={ProfileScreen} 
            options={{
                tabBarLabel: "Profile",
                tabBarIcon:({color, size}) => (
                    <Ionicons name="person" color={color} size={size}/>
                )
            }}
            />
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