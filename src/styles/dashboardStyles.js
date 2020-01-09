import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
    container: {
        marginTop: 40,
        // flex: 1,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center'
    },
    accountContainer: {
        width: '100%', 
        borderColor: '#D8D8D8', 
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 30, 
        paddingBottom: 30,
        display: 'flex',
        flexDirection: 'row',
        borderRadius: 10
    },
    accountImg: {
        width: 42.68, 
        height: 42.68
    },
    accountText: {
        fontSize: 32,
        color: 'black',
        marginLeft: 10
    },
    secondRow: { 
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'space-between',
        marginTop: 15
    },
    colStyle: {
        width: '49%', 
        borderColor: '#D8D8D8', 
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        // paddingTop: 120, 
        // paddingBottom: 120,
        borderRadius: 10,
        // height: 280,
        height: (Dimensions.get('window').width * 30 /100)
    },  
    companyWorkersLogo: {
        width: 75.47,
        height: 68.44
    },
    colText: {
        fontSize: 32,
        color: 'black',
        marginTop: 20
    },
    contactFormLogo: {
        width: 61.53,
        height: 80.17
    },
    draftsLogo: {
        width: 80.18,
        height: 80.17
    },
    resumeLogo: {
        width: 79.56,
        height: 79.56
    }
})