import React from 'react'
import {
    View, Text, ScrollView, Image, TouchableOpacity
} from 'react-native'

import styles from '../../styles/loginStyles'

import SignUpForm from '../../Components/LoginComponents/SignUpForm'

class SignUpScreen extends React.Component {
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

                        <Text style={styles.loginText}>REGISTER</Text>

                        <SignUpForm
                            navigation={this.props.navigation}
                        />


                    </View>
                </ScrollView>
            </View>
        )
    }
}

export default SignUpScreen