import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'

import styles from '../../styles/loginFormStyles'

class LoginForm extends React.Component {
    state = {
        email: "",
        password: ""
    }
    onChangeText = (key, val) => {
        this.setState({ [key]: val })
    }
    render() {
        return (
            <View style={styles.container}>
                {/* <Text>LoginForm</Text> */}
                <TextInput
                    value={this.state.email}
                    style={styles.inputStyle}
                    placeholder="Email"
                    placeholderTextColor="#BEBEBE"
                    onChangeText={(val) => this.onChangeText('email', val)}
                />

                <TextInput
                    value={this.state.password}
                    style={styles.inputStyle}
                    placeholder="Password"
                    placeholderTextColor="#BEBEBE"
                    onChangeText={(val) => this.onChangeText('password', val)}
                    secureTextEntry={true}
                />

                <TouchableOpacity
                    style={styles.loginButtonStyle}
                >
                    <Text style={styles.buttonTextStyle}>
                        LOGIN
                    </Text>
                </TouchableOpacity>


                <TouchableOpacity
                    style={styles.forgotPasswordButtonStyle}
                >
                    <Text style={styles.forgotPasswordText}>
                        Forgot your password?
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default LoginForm