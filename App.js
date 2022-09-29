import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, Button, Image } from 'react-native';
import MindfulButton from './Components/MindfulButton';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './Screens/LoginScreen';
import CreateAccountScreen from './Screens/CreateAccountScreen';
import WelcomeScreen from './Screens/WelcomeScreen';

export default class App extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      email: '',
      password: ''
    }
  }

  login = (emailIn, passwordIn) => {
    console.log('Logging in as:\nEmail: ' + emailIn + '\nPassword: ' + passwordIn);
    this.setState({
      'email': emailIn,
      'password': passwordIn,
      'loggedIn': true
    });
  }

  logout = (emailIn, passwordIn) => {
    console.log('Logging out of:\nEmail: ' + emailIn + '\nPassword: ' + passwordIn);
    this.setState({
      email: '',
      password: '',
      loggedIn: false,
      emailInput: '',
      passwordInput: ''
    });
  }


  render() {
    const Stack = createNativeStackNavigator();
    return (
      <React.Fragment>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
            headerShown: false
          }}>
            <Stack.Screen
              name='WelcomeScreen'
              component={WelcomeScreen}

            />
            <Stack.Screen
              name='LoginScreen'
              component={LoginScreen}
              initialParams={{ onLogin: this.login }}

            />
            <Stack.Screen
              name='CreateAccountScreen'
              component={CreateAccountScreen}

            />
          </Stack.Navigator>
        </NavigationContainer>

        {this.state.loggedIn && <MindfulButton
          title='LOG OUT'
          onPress={() => { this.logout(this.state.email, this.state.password) }}

        />
        }
      </React.Fragment>
    );
  }
}
