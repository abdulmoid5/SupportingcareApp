import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        marginTop: 80,
        // flex: 1,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center'
    }, 
    inputStyle: {
        backgroundColor: 'white',
        width: '70%',
        alignSelf: 'center',
        borderRadius: 5,
        paddingLeft: 10,
        paddingRight: 10,
        marginTop: 15,
        height: 45
    },
    loginButtonStyle: {
        width: '70%',
        backgroundColor: '#026B85',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        marginTop: 15,
        borderRadius: 5,
    },
    buttonTextStyle: {
        color: 'white',
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight: 'bold'
    },
    forgotPasswordButtonStyle: {
        alignSelf: 'center',
        marginTop: 60,
    },
    forgotPasswordText: {
        color: '#A1A1A1',
        fontSize: 18
    },
    checkboxRowStyle: { 
        width: '70%', 
        display: 'flex', 
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 25,
        marginBottom: 10,
        // marginBottom: 5
    },
    checkboxText: {
        fontSize: 14,
        color: 'black',
        marginLeft: 5
    },
    registeredText: {
        marginTop: '40%',
        alignSelf: 'center',
        color: 'black',
        fontSize: 24,
        fontWeight: 'bold'
    }
})