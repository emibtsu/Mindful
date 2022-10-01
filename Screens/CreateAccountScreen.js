import React from 'react';
import { Text, SafeAreaView } from 'react-native';
import MindfulButton from '../Components/MindfulButton';
import MindfulTextInput from '../Components/MindfulTextInput';
import MindfulLogo from '../Components/MindfulLogo';
import { styles } from '../Components/MindfulStyles';
import TextButton from '../Components/TextButton';

export default class CreateAccountScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            emailInput: '',
            usernameInput: '',
            passwordInput1: '',
            passwordInput2: '',
            passwordMismatch: false,
            fieldBlank: false
        }
    }

    createAccunt = (emailIn, usernameIn, passwordIn1, passwordIn2) => {
        if (emailIn === '' || usernameIn === '' || passwordIn1 === '' || passwordIn2 === '') {
            this.setState({
                fieldBlank: true
            })
        } else if (passwordIn1 !== passwordIn2) {
            this.setState({
                passwordMismatch: true
            })
        } else {
            console.log('Creating Account using:\nEmail ' + emailIn + '\nUsername: ' + usernameIn + '\nPassword: ' + passwordIn1)
            // CREATE AN ACCOUNT
            this.props.navigation.navigate('AccountSetupScreen')
        }
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>

                <MindfulLogo height={200} width={200} />

                <Text style={{ ...styles.title, marginTop: 50 }}>Let's get started</Text>

                <MindfulTextInput
                    style={{ marginTop: 40 }}
                    onChangeText={(entry) => { this.setState({ 'emailInput': entry.trim(), fieldBlank: false }) }}
                    placeholder='email'
                    keyboardType='text'
                />

                <MindfulTextInput
                    style={{ marginTop: 15 }}
                    onChangeText={(entry) => { this.setState({ 'usernameInput': entry.trim(), fieldBlank: false }) }}
                    placeholder='create username'
                    keyboardType='text'
                />

                <MindfulTextInput
                    style={{ marginTop: 15 }}
                    onChangeText={(entry) => { this.setState({ 'passwordInput1': entry.trim(), fieldBlank: false, passwordMismatch: false }) }}
                    placeholder='create password'
                    keyboardType='text'
                />

                <MindfulTextInput
                    style={{ marginTop: 15 }}
                    onChangeText={(entry) => { this.setState({ 'passwordInput2': entry.trim(), fieldBlank: false, passwordMismatch: false }) }}
                    placeholder='confirm password'
                    keyboardType='text'
                />

                {this.state.passwordMismatch &&
                    <Text style={{ ...styles.small, color: 'maroon', marginTop: 10 }}>
                        Passwords do not match!
                    </Text>
                }
                {this.state.fieldBlank &&
                    <Text style={{ ...styles.small, color: 'maroon', marginTop: 10 }}>
                        All fields are required!
                    </Text>
                }

                <MindfulButton
                    title='create account'
                    style={{ backgroundColor: '#7D9C73', marginTop: 15 }}
                    onPress={() => { this.createAccunt(this.state.emailInput, this.state.usernameInput, this.state.passwordInput1, this.state.passwordInput2) }}
                />

                <Text style={{ ...styles.small, marginTop: 5 }}>already have an account?</Text>

                <TextButton
                    title='login'
                    style={{ ...styles.small }}
                    onPress={() => { this.props.navigation.navigate('LoginScreen') }}
                />

            </SafeAreaView>
        );
    }
}