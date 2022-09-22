import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, Button, Image, ScrollView } from 'react-native';
import LoginForm from './Components/LoginForm';
import MindfulButton from './Components/MindfulButton';
import MindfulHorizontalScroll from './Components/MindfulHorizontalScroll';
import MindfulNavBar from './Components/MindfulNavBar';

export default function App() {

  const [loggedIn, setLoggedIn] = useState(false);

  const login = (enteredEmail, enteredPassword) => {
    console.log('Logging In...');
    console.log('Email: ' + enteredEmail)
    console.log('Password: ' + enteredPassword)
    // CHECK USER INFORMATION HERE
    setLoggedIn(true)

  }
  const logout = () => {
    console.log('Logging Out...');
    setLoggedIn(false)
  }

  return (

    <SafeAreaView style={styles.container}>


      {!loggedIn &&
        <React.Fragment>
          <LoginForm
            image={require('./assets/MindfulIcon.png')}
            onLogin={login}

          />
        </React.Fragment>

      }

      {loggedIn &&
        <SafeAreaView style={{margin: 10, paddingTop: 40, paddingBottom: 40}}>
          <MindfulButton
            title='LOG OUT'
            onPress={logout}
          />
          
          <MindfulNavBar />


        </SafeAreaView>
      }


      <StatusBar style="auto" />
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
