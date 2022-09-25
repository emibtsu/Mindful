import React, { useState } from 'react';
import { FormLabel } from 'react-bootstrap';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';
import MindfulButton from './MindfulButton';
import MindfulTextInput from './MindfulTextInput';

export default class LoginForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            emailInput: '',
            passwordInput: ''
        }
    }

    render() {
        return (
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
                    keyboardType='text1'
                />

                <Text style={styles.text1}>Password</Text>

                <MindfulTextInput
                    margin={10}
                    onChangeText={(entry) => { this.setState({ 'passwordInput': entry }) }}
                    placeholder='Enter Password'
                    keyboardType='text1'
                />

                <MindfulButton
                    title='LOGIN'
                    onPress={() => { this.props.onLogin(this.state.emailInput, this.state.passwordInput) }}
                />

                <Text style={styles.text1}>Don't Have an Account?</Text>
                <MindfulButton
                    title='SIGN UP'
                    paddingVertical='32'
                    onPress={() => { this.props.navigation.navigate('CreateAccountScreen') }}
                />



            </React.Fragment>

        )
    }

}

const styles = StyleSheet.create({
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
