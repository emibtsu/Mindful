import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, Button, Image } from 'react-native';
import MindfulButton from './Components/MindfulButton';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './Screens/LoginScreen';
import CreateAccountScreen from './Screens/CreateAccountScreen';
import WelcomeScreen from './Screens/WelcomeScreen';
import AccountSetupScreen from './Screens/AccountSetupScreen';
import ForgotPasswordScreen from './Screens/ForgotPasswordScreen';
import ProfileScreen from './Screens/ProfileScreen';
import FeedScreen from './Screens/FeedScreen';
import FriendsScreen from './Screens/FriendsScreen';

export default class App extends React.Component {


  constructor(props) {
    super(props);
    this.state = {

    }
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
            >{(props) => <LoginScreen {...props} onLogin={this.login} />}</Stack.Screen>
            <Stack.Screen
              name='CreateAccountScreen'
              component={CreateAccountScreen}
            />
            <Stack.Screen
              name='AccountSetupScreen'
              component={AccountSetupScreen}
            />
            <Stack.Screen
              name='ForgotPasswordScreen'
              component={ForgotPasswordScreen}
            />
            <Stack.Screen
              name='ProfileScreen'
              component={ProfileScreen}
            />
            <Stack.Screen
              name='FeedScreen'
              component={FeedScreen}
            />
            <Stack.Screen
              name='FriendsScreen'
              component={FriendsScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>

      </React.Fragment>
    );
  }
}
