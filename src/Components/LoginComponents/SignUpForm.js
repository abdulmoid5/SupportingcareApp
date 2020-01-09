import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import CheckBox from 'react-native-check-box'

import styles from '../../styles/loginFormStyles'

class LoginForm extends React.Component {
    state = {
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        password: "",
        isGDPRSelected: false,
        isTermsSelected: false
    }
    onChangeText = (key, val) => {
        this.setState({ [key]: val })
    }
    handleGDPR = () => {
        this.setState({
            isGDPRSelected: !this.state.isGDPRSelected
        })
    }
    handleTerms = () => {
        this.setState({
            isTermsSelected: !this.state.isTermsSelected
        })
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

                <View style={styles.checkboxRowStyle}>
                    <CheckBox
                        onClick={this.handleGDPR}
                        isChecked={this.state.isGDPRSelected}
                    />
                    <Text style={styles.checkboxText}>GDPR</Text>

                    <CheckBox
                        onClick={this.handleTerms}
                        isChecked={this.state.isTermsSelected}
                        style={{marginLeft: 40}}
                    />
                    <Text style={styles.checkboxText}>Terms & Conditions</Text>
                </View>

                <TouchableOpacity
                    style={styles.loginButtonStyle}
                    onPress={() => this.props.navigation.navigate('RegistrationSuccessfulScreen')}
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