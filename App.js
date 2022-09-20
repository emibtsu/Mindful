import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, Button, Image } from 'react-native';
import LoginForm from './Components/LoginForm';
import MindfulButton from './Components/MindfulButton';

export default function App() {

  const [loggedIn, setLoggedIn] = useState(false);

  const login = () => {
    console.log('Logging In...');
    setLoggedIn(true)
  }
  const logout = () => {
    console.log('Logging Out...');
    setLoggedIn(false)
  }

  return (
    <SafeAreaView style={styles.container}>


      {!loggedIn && <LoginForm
        image={require('./assets/icon.png')}
        onLogin={login}

      />
      }

      {loggedIn && <MindfulButton
        title='LOG OUT'
        onPress={logout}

      />
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
