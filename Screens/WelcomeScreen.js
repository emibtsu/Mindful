import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, Button, Image, View } from 'react-native';
import MindfulButton from '../Components/MindfulButton';
import MindfulTextInput from '../Components/MindfulTextInput';
import MindfulLogo from '../Components/MindfulLogo';
import { styles } from '../MindfulStyles';

export default class WelcomeScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>


                <React.Fragment>

                    <MindfulLogo height={200} width={200} />

                    <Text style={{ ...styles.titleText, marginTop: 40 }}>Welcome to Mindful.</Text>

                    <Image
                        source={require('../assets/WelcomeScreenImage.png')}
                        style={{
                            marginTop: 40,
                            resizeMode: 'cover',
                            height: 138,
                            width: 188,

                        }}
                    />


                    <MindfulButton
                        title='create account'
                        onPress={() => { this.props.navigation.navigate('CreateAccountScreen') }}
                        style={{ marginTop: 60 }}
                    />


                    <MindfulButton
                        title='login'
                        paddingVertical='32'
                        onPress={() => { this.props.navigation.navigate('LoginScreen') }}
                        style={{ marginTop: 20 }}
                    />

                </React.Fragment>




            </SafeAreaView>
        );
    }
}

