import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ScrollView, Text, SafeAreaView, Button, Image, View } from 'react-native';
import MindfulButton from '../Components/MindfulButton';
import MindfulTextInput from '../Components/MindfulTextInput';
import { styles } from '../Components/MindfulStyles';
import MindfulLogo from '../Components/MindfulLogo';
import TextButton from '../Components/TextButton';
import BackArrow from '../Components/BackArrow';
import ProfilePicture from '../Components/ProfilePicture';
import Post from '../Components/Post';


export default class ProfileScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            handle: '@carlyyyy',
            bio: 'example bio'
        }
    }

    render() {
        return (

            <ScrollView contentContainerStyle={{
                backgroundColor: '#D2E1D0',
                alignItems: 'center',
                justifyContent: 'flex-start',

            }}>


                <View
                    style={{
                        flex: 1,
                        maxHeight: 50,
                        flexDirection: 'row',
                        marginTop: 50,
                        alignSelf: 'stretch',
                        // borderWidth: 1,
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                    }}
                >
                    <BackArrow style={{ marginLeft: 30, marginTop: 5 }} onPress={() => { this.props.navigation.navigate('CreateAccountScreen') }} />

                </View>

                <Text style={{ ...styles.small, marginTop: 0, fontWeight: '500' }}>Profile</Text>

                <ProfilePicture height={200} width={200} style={{ marginTop: 10 }} />

                <Text style={{ ...styles.small, marginTop: 15 }}>{this.state.handle}</Text>

                <Text style={{ ...styles.small, marginTop: 10 }}>{this.state.bio}</Text>


                <View
                    style={{
                        marginTop: 15,
                        flex: 1,
                        alignSelf: 'stretch',
                        backgroundColor: 'white',
                        borderTopLeftRadius: 35,
                        borderTopRightRadius: 35,
                        justifyContent: 'center'
                    }}
                >
                    <View style={{ flex: 1, flexDirection: 'row', alignSelf: 'center', marginTop: 10, }}>
                        <Image style={{ marginTop: 6 }} source={require('../assets/CalendarIcon.png')} />
                        <Text style={{ ...styles.small, fontWeight: '600', marginLeft: 5 }}>memories</Text>
                    </View>

                    <Post style={{}} poster='carlyyyy' category='something that makes me happy' />
                    <Post style={{ marginTop: 15 }} poster='carlyyyy' category='something that makes me happy' />



                </View>

            </ScrollView>

        );
    }
}