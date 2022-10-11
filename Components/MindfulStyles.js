import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D2E1D0',
        alignItems: 'center',
        justifyContent: 'center',
    },

    title: {
        // fontFamily: 'Poppins',
        fontSize: 26,
        fontWeight: '400',
        lineHeight: 39,
        letterSpacing: 0,
        textAlign: 'center'
    },

    small: {
        // fontFamily: 'Poppins',
        fontSize: 18,
        fontWeight: '400',
        lineHeight: 24,
        letterSpacing: 0,
        textAlign: 'center',
        // color: 'gray'

    },

    mindfulBackground: {
        backgroundColor: '#D2E1D0'
    },

    mindfulTextLogo: {
        // fontFamily: 'Poppins',
        fontSize: 30,
        fontWeight: '400',
        lineHeight: 45,
        letterSpacing: 0,
        textAlign: 'center',
        color: '#75926B'
    }
});

export { styles }