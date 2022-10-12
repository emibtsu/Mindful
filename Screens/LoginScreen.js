import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, Button, Image, View } from 'react-native';
import MindfulButton from '../Components/MindfulButton';
import MindfulTextInput from '../Components/MindfulTextInput';
import { styles } from '../Components/MindfulStyles';
import MindfulLogo from '../Components/MindfulLogo';
import TextButton from '../Components/TextButton';
import BackArrow from '../Components/BackArrow';


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

                <View
                    style={{
                        flex: 1,
                        maxHeight: 50,
                        flexDirection: 'row',
                        marginTop: 30,
                        alignItems: 'center',
                    }}
                >
                    <BackArrow style={{ marginLeft: 0, marginTop: 5 }} onPress={() => { this.props.navigation.navigate('CreateAccountScreen') }} />
                    <TextButton
                        title='sign up'
                        style={{ ...styles.small, marginLeft: 10 }}
                        onPress={() => { this.props.navigation.navigate('CreateAccountScreen') }}
                    />

                </View>

                <MindfulLogo height={200} width={200} style={{ marginTop: 80 }} />

                <Text style={{ ...styles.title, marginTop: 50 }}>Welcome back!</Text>

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
                    onPress={() => { this.props.onLogin(this.state.emailInput, this.state.passwordInput) }}
                />

                <TextButton
                    title='forgot password?'
                    style={{ ...styles.small, marginTop: 5 }}
                    onPress={() => { this.props.navigation.navigate('ForgotPasswordScreen') }}
                />

                <TextButton
                    title='sign up'
                    style={{ ...styles.small }}
                    onPress={() => { this.props.navigation.navigate('CreateAccountScreen') }}
                />

            </SafeAreaView>
        );
    }
}