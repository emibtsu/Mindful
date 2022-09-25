import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, Button, Image, View } from 'react-native';
import LoginForm from '../Components/LoginForm';
import MindfulButton from '../Components/MindfulButton';
import MindfulTextInput from '../Components/MindfulTextInput';

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

                    <Text style={styles.title}>Login</Text>

                    <Text style={styles.text1}>Email</Text>
                    <MindfulTextInput
                        margin={10}
                        onChangeText={(entry) => { this.setState({ 'emailInput': entry }) }}
                        placeholder='Enter Email'
                        keyboardType='text'
                    />

                    <Text style={styles.text1}>Password</Text>

                    <MindfulTextInput
                        margin={10}
                        onChangeText={(entry) => { this.setState({ 'passwordInput': entry }) }}
                        placeholder='Enter Password'
                        keyboardType='text'
                    />

                    <MindfulButton
                        title='LOGIN'
                        onPress={() => { this.props.route.params.onLogin(this.state.emailInput, this.state.passwordInput) }}
                    />

                    <Text style={styles.text1}>Don't Have an Account?</Text>

                    <MindfulButton
                        title='SIGN UP'
                        paddingVertical='32'
                        onPress={() => { this.props.navigation.navigate('CreateAccountScreen') }}
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
