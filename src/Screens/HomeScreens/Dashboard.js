import React from 'react'
import {
    View, Text, ScrollView, Image, TouchableOpacity
} from 'react-native'

import styles from '../../styles/loginStyles'

import DashboardMenu from '../../Components/DashboardComponents/DashboardMenu'

class Dashboard extends React.Component {
    static navigationOptions = {
        headerShown: false
    }
    render() {
        return (
            <View style={styles.container}>
                <ScrollView contentContainerStyle={{ flex: 1, backgroundColor: '#EFEFEF' }}>
                    <View style={styles.subContainer}>
                        <Image
                            style={styles.logoStyle}
                            source={require('../../images/supporting_care_logo.png')}
                        />

                        <Text style={styles.loginText}>DASHBOARD</Text>

                        <DashboardMenu />
                    </View>
                </ScrollView>
            </View>
        )
    }
}

export default Dashboard