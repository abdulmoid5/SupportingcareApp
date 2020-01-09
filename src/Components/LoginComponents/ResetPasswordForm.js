import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'

import styles from '../../styles/loginFormStyles'

class ResetPasswordForm extends React.Component {
    state = {
        email: "",
    }
    onChangeText = (key, val) => {
        this.setState({ [key]: val })
    }
    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    value={this.state.email}
                    style={styles.inputStyle}
                    placeholder="Email"
                    placeholderTextColor="#BEBEBE"
                    onChangeText={(val) => this.onChangeText('email', val)}
                />

                <TouchableOpacity
                    style={{
                        ...styles.loginButtonStyle,
                        marginTop: 50
                    }}
                    onPress={() => this.props.navigation.navigate('PasswordSentScreen')}
                >
                    <Text style={styles.buttonTextStyle}>
                        SUBMIT
                    </Text>
                </TouchableOpacity>


            </View>
        )
    }
}

export default ResetPasswordForm