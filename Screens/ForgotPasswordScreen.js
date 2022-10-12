import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, Button, Image, View } from 'react-native';
import MindfulButton from '../Components/MindfulButton';
import MindfulTextInput from '../Components/MindfulTextInput';
import MindfulLogo from '../Components/MindfulLogo';
import { styles } from '../Components/MindfulStyles';
import BackArrow from '../Components/BackArrow';

export default class ForgotPasswordScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>


                <View
                    style={{
                        flex: 1,
                        maxHeight: 100,
                        flexDirection: 'row',
                        marginTop: 30,
                        alignItems: 'center'
                    }}
                >
                    <BackArrow style={{ marginLeft: 50, marginTop: 40 }} onPress={() => { this.props.navigation.navigate('LoginScreen') }} />

                    <View style={{ flex: 1, flexDirection: 'row', maxHeight: 62, marginTop: 40, marginLeft: 50 }}>
                        <MindfulLogo height={62} width={62} />
                        <Text style={{ ...styles.mindfulTextLogo, alignSelf: 'flex-end', marginLeft: 8 }}>Mindful.</Text>
                    </View>

                </View>



                <Image
                    source={require('../assets/ForgotPasswordImage.png')}
                    style={{
                        marginTop: 120,
                        resizeMode: 'cover',
                        height: 200,
                        width: 300,

                    }}
                />

                <MindfulTextInput
                    style={{ marginTop: 50 }}
                    onChangeText={(entry) => { this.setState({ 'emailInput': entry }) }}
                    placeholder='email address'
                    keyboardType='text'
                />

                <MindfulButton
                    style={{ backgroundColor: '#7D9C73', marginTop: 30, marginBottom: 80 }}
                    title='send code'
                    onPress={() => { this.props.navigation.navigate('LoginScreen') }}
                />



            </SafeAreaView>
        );
    }
}

