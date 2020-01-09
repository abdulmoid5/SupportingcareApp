import React from 'react'
import {
    View, Text, ScrollView, Image, TouchableOpacity
} from 'react-native'

import styles from '../../styles/loginStyles'

import LoginForm from '../../Components/LoginComponents/LoginForm'

class LoginScreen extends React.Component {
    static navigationOptions = {
        headerShown: false
    }
    render() {
        return (
            <View style={styles.container}>
                <ScrollView contentContainerStyle={{ flex: 1 }}>
                    <View style={styles.subContainer}>
                        <Image
                            style={styles.logoStyle}
                            source={require('../../images/supporting_care_logo.png')}
                        />

                        <Text style={styles.loginText}>LOGIN</Text>
                        <Text style={styles.descLoginText}>
                            Please Sign in with your email address and password.
                        </Text>

                        <LoginForm
                            navigation={this.props.navigation}
                        />


                        <TouchableOpacity
                            style={styles.signUpButtonStyle}
                            onPress={() => this.props.navigation.navigate('SignUpScreen')}
                        >
                            <Text style={styles.buttonTextStyle}>
                                SIGN UP
                            </Text>
                        </TouchableOpacity>


                    </View>
                </ScrollView>
            </View>
        )
    }
}

export default LoginScreen