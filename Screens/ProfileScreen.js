import React, { useState } from 'react';
import { ScrollView, Text, SafeAreaView, Button, Image, View, Pressable } from 'react-native';
import MindfulButton from '../Components/MindfulButton';
import MindfulTextInput from '../Components/MindfulTextInput';
import { styles } from '../Components/MindfulStyles';
import BackArrow from '../Components/BackArrow';
import ProfilePicture from '../Components/ProfilePicture';
import Post from '../Components/Post';
import NavBar from '../Components/NavBar';

export default class ProfileScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            handle: '@carlyyyy',
            bio: '#1 Mindful Fan | ASU \'23'
        }
    }

    render() {
        return (
            <View>

                <ScrollView contentContainerStyle={{
                    backgroundColor: '#D2E1D0',
                    alignItems: 'center',
                    justifyContent: 'flex-start',

                }}>

                    <View style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: '90%',
                        marginTop: 40
                    }}>

                        <View style={{ height: 48, width: 48, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Pressable
                                style={{}}
                                onPress={() => { this.props.navigation.navigate('FriendsScreen') }}
                            >
                                <Image
                                    source={require('../assets/FriendsIcon.png')}
                                    style={{
                                        resizeMode: 'cover',
                                        height: 20,
                                        width: 30,
                                    }}
                                />
                            </Pressable>
                        </View>
                        <Text style={{ ...styles.title, marginTop: 0, fontWeight: '400' }}>Profile</Text>

                        <Pressable
                            style={{}}
                            onPress={() => { console.log('GO TO SETTINGS') }}
                        >
                            <Image
                                source={require('../assets/SettingsIcon.png')}
                                style={{
                                    resizeMode: 'cover',
                                    height: 48,
                                    width: 48,
                                }}
                            />
                        </Pressable>

                    </View>

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

                        <View style={{ marginTop: 100 }} />

                    </View>

                </ScrollView>
                <NavBar navigation={this.props.navigation} previousScreen={'ProfileScreen'} />
            </View>

        );
    }
}