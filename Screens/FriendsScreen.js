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

export default class FriendsScreen extends React.Component {

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
                    <MindfulTextInput
                        style={{ marginTop: 20 }}
                        placeholder='search'
                        keyboardType='text'
                    />
                    <Text style={{ ...styles.small, fontWeight: '300', marginTop: 15, alignSelf: 'flex-start', marginLeft: 25 }}>your friends</Text>

                    <Image
                        source={require('../assets/FakeFriend1.png')}
                        style={{
                            resizeMode: 'cover',
                            width: '90%',
                            height: 52,
                            marginTop: 15
                        }}
                    />
                    <Image
                        source={require('../assets/FakeFriend2.png')}
                        style={{
                            marginTop: 15,
                            resizeMode: 'cover',
                            width: '90%',
                            height: 52
                        }}
                    />
                    <Image
                        source={require('../assets/FakeFriend3.png')}
                        style={{
                            marginTop: 15,
                            resizeMode: 'cover',
                            width: '90%',
                            height: 52
                        }}
                    />
                    <Image
                        source={require('../assets/FakeFriend4.png')}
                        style={{
                            marginTop: 15,
                            resizeMode: 'cover',
                            width: '90%',
                            height: 52
                        }}
                    />
                    <Image
                        source={require('../assets/FakeFriend5.png')}
                        style={{
                            marginTop: 15,
                            resizeMode: 'cover',
                            width: '90%',
                            height: 52
                        }}
                    />
                    <Image
                        source={require('../assets/FakeFriend6.png')}
                        style={{
                            marginTop: 15,
                            resizeMode: 'cover',
                            width: '90%',
                            height: 52
                        }}
                    />
                    <Image
                        source={require('../assets/FakeFriend7.png')}
                        style={{
                            marginTop: 15,
                            resizeMode: 'cover',
                            width: '90%',
                            height: 52
                        }}
                    />
                    <Image
                        source={require('../assets/FakeFriend8.png')}
                        style={{
                            marginTop: 15,
                            resizeMode: 'cover',
                            width: '90%',
                            height: 52
                        }}
                    />
                    <Image
                        source={require('../assets/FakeFriend1.png')}
                        style={{
                            resizeMode: 'cover',
                            width: '90%',
                            height: 52,
                            marginTop: 15
                        }}
                    />
                    <Image
                        source={require('../assets/FakeFriend2.png')}
                        style={{
                            marginTop: 15,
                            resizeMode: 'cover',
                            width: '90%',
                            height: 52
                        }}
                    />
                    <Image
                        source={require('../assets/FakeFriend3.png')}
                        style={{
                            marginTop: 15,
                            resizeMode: 'cover',
                            width: '90%',
                            height: 52
                        }}
                    />
                    <Image
                        source={require('../assets/FakeFriend4.png')}
                        style={{
                            marginTop: 15,
                            resizeMode: 'cover',
                            width: '90%',
                            height: 52
                        }}
                    />
                    <Image
                        source={require('../assets/FakeFriend5.png')}
                        style={{
                            marginTop: 15,
                            resizeMode: 'cover',
                            width: '90%',
                            height: 52
                        }}
                    />
                    <Image
                        source={require('../assets/FakeFriend6.png')}
                        style={{
                            marginTop: 15,
                            resizeMode: 'cover',
                            width: '90%',
                            height: 52
                        }}
                    />
                    <Image
                        source={require('../assets/FakeFriend7.png')}
                        style={{
                            marginTop: 15,
                            resizeMode: 'cover',
                            width: '90%',
                            height: 52
                        }}
                    />
                    <Image
                        source={require('../assets/FakeFriend8.png')}
                        style={{
                            marginTop: 15,
                            resizeMode: 'cover',
                            width: '90%',
                            height: 52
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
                        <Image
                            source={require('../assets/MindfulLogo.png')}
                            style={{
                                resizeMode: 'cover',
                                height: 48,
                                width: 48,
                            }}
                        />
                        <Text style={{ ...styles.mindfulTextLogo }}>Mindful.</Text>
                        <View style={{ height: 48, width: 48, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Image
                                source={require('../assets/PlusIcon.png')}
                                style={{
                                    resizeMode: 'cover',
                                    height: 25,
                                    width: 25,
                                }}
                            />
                        </View>
                    </View>
                </View>

                <NavBar navigation={this.props.navigation} previousScreen={'ProfileScreen'} />


            </View>

        );
    }
}