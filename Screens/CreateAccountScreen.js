import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, Button, Image, View } from 'react-native';
import MindfulButton from '../Components/MindfulButton';
import MindfulTextInput from '../Components/MindfulTextInput';

export default class CreateAccountScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            emailInput: '',
            passwordInput1: '',
            passwordInput2: '',
            passwordMismatch: false
        }
    }

    createAccunt = (emailIn, passwordIn1, passwordIn2) => {
        if (passwordIn1 === passwordIn2) {
            console.log('Creating Account using:\nEmail ' + emailIn + '\nPassword: ' + passwordIn1)
            // CREATE AN ACCOUNT
            this.props.navigation.navigate('LoginScreen')
        } else {
            this.setState({
                passwordMismatch: true
            })
        }
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>

                <React.Fragment>
                    <View>
                        <Image
                            source={require('../assets/icon.png')}
                            style={{
                                resizeMode: 'cover',
                                height: 200,
                                width: 200,

                            }}
                        />
                    </View>

                    <Text style={styles.title}>Sign up!</Text>

                    {this.state.passwordMismatch &&
                        <Text style={{ ...styles.text1, color: 'red' }}>
                            Passwords do not match!
                        </Text>
                    }

                    <Text style={styles.text1}>Email</Text>

                    <MindfulTextInput
                        margin={10}
                        onChangeText={(entry) => { this.setState({ 'emailInput': entry }) }}
                        placeholder='Enter Email'
                        keyboardType='text'
                    />
                    <Text style={styles.text1}>Create Password</Text>

                    <MindfulTextInput
                        margin={10}
                        onChangeText={(entry) => { this.setState({ 'passwordInput1': entry, passwordMismatch: false }) }}
                        placeholder='Enter Password'
                        keyboardType='text'
                    />

                    <Text style={styles.text1}>Confirm Password</Text>

                    <MindfulTextInput
                        margin={10}
                        onChangeText={(entry) => { this.setState({ 'passwordInput2': entry, passwordMismatch: false }) }}
                        placeholder='Enter Password'
                        keyboardType='text'
                    />

                    <MindfulButton
                        title='CREATE ACCOUNT'
                        onPress={() => { this.createAccunt(this.state.emailInput, this.state.passwordInput1, this.state.passwordInput2) }}
                    />

                    <MindfulButton
                        title='BACK TO LOGIN'
                        onPress={() => { this.props.navigation.navigate('LoginScreen') }}
                        style={{ marginTop: 10 }}
                    />




                </React.Fragment>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'gray'
    },

    text1: {
        fontSize: 16,
        fontWeight: 'normal',
        color: 'gray'
    },
});
