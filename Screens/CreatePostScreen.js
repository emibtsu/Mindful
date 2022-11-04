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

export default class CreatePostScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            handle: '@carlyyyy',
            bio: 'example bio'
        }
    }

    render() {
        return (
            <View style={{ backgroundColor: '#F9F7F5' }}>



                <ScrollView contentContainerStyle={{
                    marginTop: 100,
                    backgroundColor: '#F9F7F5',
                    alignItems: 'center',
                    justifyContent: 'flex-start'

                }}>
                    <Text style={{ ...styles.smallGray, justifySelf: 'center', marginTop: 20 }}>-  prompt of the day  -</Text>
                    <Text style={{ ...styles.title, fontSize: 20, fontWeight: '700', justifySelf: 'center', lineHeight: 30, marginTop: 10 }}>When was the last time someone made your day?</Text>


                    <View
                        style={{
                            marginTop: 20,
                            width: 236,
                            height: 236,
                            borderRadius: 35,
                            borderWidth: 3,
                            borderColor: '#d9d9d9'
                        }}
                    >
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                            <Image
                                source={require('../assets/CameraIcon.png')}
                                style={{
                                    resizeMode: 'contain',
                                    width: 120,
                                    height: 137,
                                    alignSelf: 'center',
                                    marginLeft: 24,

                                }}
                            />
                            <Image
                                source={require('../assets/PlusIcon.png')}
                                style={{
                                    resizeMode: 'contain',
                                    width: 24,
                                    height: 24,
                                    top: 50,
                                    left: 5,
                                    alignSelf: 'center',

                                }}
                            />
                        </View>
                    </View>

                    <View
                        style={{
                            marginTop: 20,
                            width: 300,
                            height: 120,
                            borderRadius: 15,
                            borderWidth: 3,
                            borderColor: '#d9d9d9'
                        }}
                    >
                        <Text style={{ ...styles.smallGray, alignSelf: 'flex-start', marginLeft: 10, marginTop: 5 }}> add a caption...</Text>

                    </View>

                    <Pressable
                        title={'post!'}
                        style={{
                            height: 48,
                            width: 130,
                            borderRadius: 10,
                            backgroundColor: '#D2E1D0',
                            marginTop: 20

                        }}
                        onPress={() => { this.props.navigation.navigate('ProfileScreen') }}
                    >
                        <Text
                            style={{
                                marginTop: 7,
                                // fontFamily: Poppins,
                                fontSize: 20,
                                fontWeight: '700',
                                lineHeight: 30,
                                letterSpacing: 0,
                                textAlign: 'center',

                            }}
                        >post</Text>
                    </Pressable >
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

                <NavBar navigation={this.props.navigation} previousScreen={'ProfileScreen'} />


            </View>

        );
    }
}