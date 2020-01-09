import React from 'react'
import { View, Text, TextInput, TouchableOpacity, CheckBox } from 'react-native'

import styles from '../../styles/loginFormStyles'

class LoginForm extends React.Component {
    state = {
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
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
                    value={this.state.firstName}
                    style={styles.inputStyle}
                    placeholder="First Name"
                    placeholderTextColor="#BEBEBE"
                    onChangeText={(val) => this.onChangeText('firstName', val)}
                />

                <TextInput
                    value={this.state.lastName}
                    style={styles.inputStyle}
                    placeholder="Last Name"
                    placeholderTextColor="#BEBEBE"
                    onChangeText={(val) => this.onChangeText('lastName', val)}
                />


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

                <TextInput
                    value={this.state.mobile}
                    style={styles.inputStyle}
                    placeholder="Mobile Number"
                    placeholderTextColor="#BEBEBE"
                    onChangeText={(val) => this.onChangeText('mobile', val)}
                />

                <View>
                    <CheckBox 
                            checked={true}
                    />
                </View>

                <TouchableOpacity
                    style={styles.loginButtonStyle}
                >
                    <Text style={styles.buttonTextStyle}>
                        REGISTER
                    </Text>
                </TouchableOpacity>

            </View>
        )
    }
}

export default LoginForm