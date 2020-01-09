import React from 'react'
import {
    createAppContainer,
    createSwitchNavigator
} from 'react-navigation'

import { createStackNavigator } from 'react-navigation-stack'

import LoginScreen from '../Screens/AuthScreens/LoginScreen'
import SignUpScreen from '../Screens/AuthScreens/SignUpScreen';
import ResetPasswordScreen from '../Screens/AuthScreens/ResetPasswordScreen'

import Dashboard from '../Screens/HomeScreens/Dashboard'




const AuthStack = createStackNavigator({
    LoginScreen: LoginScreen,
    SignUpScreen: SignUpScreen,
    ResetPasswordScreen: ResetPasswordScreen
}, {
    initialRouteName: 'LoginScreen'
})

const HomeStack = createStackNavigator({
    Dashboard: Dashboard
}, {
    initialRouteName: 'Dashboard'
})

export default createAppContainer(
    createSwitchNavigator(
        {
            Auth: AuthStack,
            Home: HomeStack
        },
        {
            initialRouteName: 'Auth',
            navigationOptions: {
                gesturesEnabled: true
            }
        }
    )
)
