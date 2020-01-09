import React from 'react'
import {
    View, Text, ScrollView, Image, TouchableOpacity
} from 'react-native'

import styles from '../../styles/loginStyles'
import formStyles from '../../styles/loginFormStyles'

class RegistrationSuccessfulScreen extends React.Component {
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


                        <Text style={formStyles.registeredText}>
                            Thank you for registering yourself!
                        </Text>


                        <TouchableOpacity
                            style={{
                                ...formStyles.loginButtonStyle,
                                alignSelf: 'center',
                                marginTop: 250
                            }}
                            onPress={() => this.props.navigation.navigate('LoginScreen')}
                        >
                            <Text style={formStyles.buttonTextStyle}>
                                LOGIN NOW
                            </Text>
                        </TouchableOpacity>



                    </View>
                </ScrollView>
            </View>
        )
    }
}

export default RegistrationSuccessfulScreen