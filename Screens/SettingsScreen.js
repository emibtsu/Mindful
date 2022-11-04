import React, { useState } from 'react';
import { ScrollView, Text, SafeAreaView, Button, Image, View, Pressable } from 'react-native';
import MindfulButton from '../Components/MindfulButton';
import MindfulTextInput from '../Components/MindfulTextInput';
import { styles } from '../Components/MindfulStyles';
import BackArrow from '../Components/BackArrow';
import ProfilePicture from '../Components/ProfilePicture';
import Post from '../Components/Post';
import NavBar from '../Components/NavBar';
import MindfulLogo from '../Components/MindfulLogo';
import HLine from '../Components/HLine';
import TextButton from '../Components/TextButton';

export default class SettingsScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <View style={{ backgroundColor: '#F9F7F5' }}>



                <ScrollView contentContainerStyle={{
                    marginTop: 100,
                    backgroundColor: '#F9F7F5',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                }}>

                    <Text style={{ ...styles.small, fontWeight: '500', marginTop: 18, alignSelf: 'flex-start', marginLeft: 40 }}>Settings</Text>
                    <HLine style={{ marginTop: 20 }} />
                    <Text style={{ ...styles.small, fontWeight: '300', marginTop: 15, alignSelf: 'flex-start', marginLeft: 40 }}>account</Text>
                    <HLine style={{ marginTop: 15 }} />
                    <Text style={{ ...styles.small, fontWeight: '300', marginTop: 15, alignSelf: 'flex-start', marginLeft: 40 }}>privacy & security</Text>
                    <HLine style={{ marginTop: 15 }} />
                    <Text style={{ ...styles.small, fontWeight: '300', marginTop: 15, alignSelf: 'flex-start', marginLeft: 40 }}>help & support</Text>
                    <HLine style={{ marginTop: 15 }} />
                    <Text style={{ ...styles.small, fontWeight: '300', marginTop: 15, alignSelf: 'flex-start', marginLeft: 40 }}>notifications</Text>
                    <HLine style={{ marginTop: 15 }} />

                    <TextButton
                        title='log out'
                        style={{
                            marginTop: 15,
                            alignSelf: 'flex-start',
                            marginLeft: 40
                        }}
                        textStyle={{
                            ...styles.small,
                            fontWeight: '300',
                        }}
                        onPress={() => { this.props.navigation.navigate('WelcomeScreen') }}
                    />

                    <HLine style={{ marginTop: 15 }} />
                    <View style={{ marginTop: 50 }} />

                    <Image
                        source={require('../assets/SettingsPicture.png')}
                        style={{
                            resizeMode: 'cover',
                            weight: 342,
                            height: 218,
                            marginTop: 15
                        }}
                    />

                    <View style={{ marginTop: 200 }} />


                </ScrollView>
                <View
                    style={{
                        width: '100%',
                        height: 100,
                        backgroundColor: '#D2E1D0',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        borderBottomRightRadius: 20,
                        borderBottomLeftRadius: 20,
                        position: 'absolute',
                        top: 0
                    }}>

                    <View style={{
                        marginTop: 25,
                        width: '90%',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}>
                        <View style={{ height: 48, width: 48, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Pressable
                                style={{}}
                                onPress={() => { this.props.navigation.navigate('ProfileScreen') }}
                            >
                                <Image
                                    source={require('../assets/BackArrow.png')}
                                    style={{
                                        resizeMode: 'cover',
                                        height: 20,
                                        width: 20,
                                    }}
                                />
                            </Pressable>
                        </View>
                        <Text style={{ ...styles.mindfulTextLogo }}>Mindful.</Text>
                        <Image
                            source={require('../assets/MindfulLogo.png')}
                            style={{
                                resizeMode: 'cover',
                                height: 48,
                                width: 48,
                            }}
                        />

                    </View>
                </View>



            </View>

        );
    }
}