import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, Button, Image, View } from 'react-native';
import MindfulButton from '../Components/MindfulButton';
import MindfulTextInput from '../Components/MindfulTextInput';
import { styles } from '../MindfulStyles';
import MindfulLogo from '../Components/MindfulLogo';


export default class LoginScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            emailInput: '',
            passwordInput: ''
        }
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>


                <React.Fragment>

                    <MindfulLogo height={200} width={200} />

                    <Text style={{ ...styles.titleText, marginTop: 50 }}>Welcome back!</Text>

                    <MindfulTextInput
                        style={{ marginTop: 50 }}
                        onChangeText={(entry) => { this.setState({ 'emailInput': entry }) }}
                        placeholder='username'
                        keyboardType='text'
                    />


                    <MindfulTextInput
                        style={{ marginTop: 20 }}
                        onChangeText={(entry) => { this.setState({ 'passwordInput': entry }) }}
                        placeholder='password'
                        keyboardType='text'
                    />

                    <MindfulButton
                        style={{ backgroundColor: '#7D9C73', marginTop: 20 }}
                        title='login'
                        onPress={() => { this.props.route.params.onLogin(this.state.emailInput, this.state.passwordInput) }}
                    />

                    <Text style={styles.text1}>Don't Have an Account?</Text>

                    <MindfulButton
                        title='placeholder to create account page'
                        paddingVertical='32'
                        onPress={() => { this.props.navigation.navigate('CreateAccountScreen') }}
                    />

                </React.Fragment>




            </SafeAreaView>
        );
    }
}