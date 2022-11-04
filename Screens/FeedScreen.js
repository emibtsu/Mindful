import React from 'react';
import { ScrollView, Text, SafeAreaView, Button, Image, View, Pressable } from 'react-native';
import { styles } from '../Components/MindfulStyles';
import Post from '../Components/Post';
import NavBar from '../Components/NavBar';
import Category from '../Components/Catetgory';
import HLine from '../Components/HLine';

export default class FeedScreen extends React.Component {

    constructor(props) {
        super(props);
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
                        marginTop: 40,
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: '90%',
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

                        <Text style={{ ...styles.mindfulTextLogo }}>Mindful.</Text>


                        <Pressable
                            style={{}}
                            onPress={() => { console.log('GO TO SETTINGS') }}
                        >
                            <Image
                                source={require('../assets/ProfilePicture.png')}
                                style={{
                                    resizeMode: 'cover',
                                    height: 48,
                                    width: 48,
                                }}
                            />
                        </Pressable>

                    </View>



                    <View
                        style={{
                            marginTop: 15,
                            flex: 1,
                            alignSelf: 'stretch',
                            backgroundColor: '#F9F7F5',
                            borderTopLeftRadius: 35,
                            borderTopRightRadius: 35,
                            justifyContent: 'center'
                        }}
                    >

                        <View
                            style={{
                                flex: 1,
                                alignItems: 'center',
                            }}
                        >
                            <Text style={{ ...styles.smallGray, marginTop: 18, marginLeft: 30, alignSelf: 'flex-start' }}>laurenrt45</Text>

                            <Image
                                source={require('../assets/BikeImage.png')}
                                style={{
                                    resizeMode: 'cover',
                                    marginTop: 4,
                                    borderRadius: 15,
                                    height: 462,
                                    width: 330,

                                }}
                            />
                            <Category style={{ marginTop: 10 }} text={'a favorite memory'} />
                        </View>

                        <HLine style={{ marginTop: 30, width: '100%' }} />
                        <Post style={{ marginTop: 15 }} poster='carlyyyy' category='something that makes me happy' />
                        <HLine style={{ marginTop: 30, width: '100%' }} />
                        <View
                            style={{
                                flex: 1,
                                alignItems: 'center',
                            }}
                        >
                            <Text style={{ ...styles.smallGray, marginTop: 25, marginLeft: 30, alignSelf: 'flex-start' }}>monty_kz</Text>

                            <View
                                style={{
                                    marginTop: 4,
                                    width: 330,
                                    height: 90,
                                    borderRadius: 20,
                                    backgroundColor: '#F9F7F5',
                                    borderWidth: 1,
                                    paddingHorizontal: 5,
                                    justifyContent: 'center',
                                    borderColor: "#b0b0b0"
                                }}
                            >
                                <Text style={{ ...styles.small, fontSize: 18, textAlign: 'center' }}>I was at Starbucks a couple days ago and the person ahead of me paid for my drink :)</Text>

                            </View>
                            <Category style={{ marginTop: 10, height: 50, justifyContent: 'center' }} text={'when was the last time someone made your day?'} />
                        </View>
                        <HLine style={{ marginTop: 30, width: '100%' }} />
                        <View
                            style={{
                                flex: 1,
                                alignItems: 'center',
                            }}
                        >
                            <Text style={{ ...styles.smallGray, marginTop: 25, marginLeft: 30, alignSelf: 'flex-start' }}>22xcaleb</Text>

                            <Image
                                source={require('../assets/AvacadoToast.png')}
                                style={{
                                    resizeMode: 'cover',
                                    marginTop: 4,
                                    borderRadius: 15,
                                    height: 462,
                                    width: 330,

                                }}
                            />
                            <Category style={{ marginTop: 10, height: 50, justifyContent: 'center' }} text={'what is something that made you happy today?'} />
                        </View>
                        <HLine style={{ marginTop: 30, width: '100%' }} />

                        <View
                            style={{
                                flex: 1,
                                alignItems: 'center',
                            }}
                        >
                            <Text style={{ ...styles.smallGray, marginTop: 18, marginLeft: 30, alignSelf: 'flex-start' }}>carlyyyy</Text>

                            <Image
                                source={require('../assets/HotDogs.jpg')}
                                style={{
                                    resizeMode: 'cover',
                                    marginTop: 4,
                                    borderRadius: 15,
                                    height: 462,
                                    width: 330,

                                }}
                            />
                            <Category style={{ marginTop: 10 }} text={'a favorite memory'} />
                        </View>

                        <View style={{ marginTop: 100 }} />

                    </View>




                </ScrollView>
                <NavBar navigation={this.props.navigation} />
            </View>

        );
    }
}