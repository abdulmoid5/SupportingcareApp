import React from 'react'
import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native'

import styles from '../../styles/dashboardStyles'

export default (props) => (
    <View style={styles.container}>
        <View style={{ width: '100%' }}>
            <TouchableOpacity style={styles.accountContainer}>
                <Image
                    source={require('../../images/account.png')}
                    style={styles.accountImg}
                />
                <Text
                    style={styles.accountText}
                >
                    My Account
                </Text>
            </TouchableOpacity>

            <View style={styles.secondRow}>
                <TouchableOpacity style={styles.colStyle}>
                    <Image
                        source={require('../../images/company-workers.png')}
                        style={styles.companyWorkersLogo}
                    />
                    <Text
                        style={styles.colText}
                    >
                        Staff
                </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.colStyle}>
                    <Image
                        source={require('../../images/contact-form.png')}
                        style={styles.contactFormLogo}
                    />
                    <Text
                        style={styles.colText}
                    >
                        Forms Loader
                </Text>
                </TouchableOpacity>
            </View>


            <View style={styles.secondRow}>
                <TouchableOpacity style={styles.colStyle}>
                    <Image
                        source={require('../../images/drafts.png')}
                        style={styles.draftsLogo}
                    />
                    <Text
                        style={{...styles.colText, }}
                    >
                        Drafts
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.colStyle}>
                    <Image
                        source={require('../../images/resume.png')}
                        style={styles.resumeLogo}
                    />
                    <Text
                        style={styles.colText}
                    >
                        Submitted
                </Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
)