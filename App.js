import { StatusBar } from 'expo-status-bar';
import ProfileSection from './Components/ProfileSection';
import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {

  const [showProfileSection, setShowProfileSection] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={{ color: 'red', fontWeight: 'bold' }}>Mindful Media!</Text>

      {showProfileSection &&
        <ProfileSection name='Brent Julius' email='brentjulius152@gmail.com' phone='(602) 329-7338' onClose={() => { setShowProfileSection(false) }} />
      }
      {!showProfileSection &&
        <Button
          title='Show Profile Section'
          onPress={() => { setShowProfileSection(true) }}
        />

      }


      <StatusBar style="auto" />
    </View>
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
