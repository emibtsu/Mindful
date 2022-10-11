import React from 'react';
import { Text, View, SafeAreaView, Image } from 'react-native';
import MindfulButton from '../Components/MindfulButton';
import MindfulTextInput from '../Components/MindfulTextInput';
import MindfulLogo from '../Components/MindfulLogo';
import { styles } from '../Components/MindfulStyles';
import TextButton from '../Components/TextButton';

export default class AccountSetupScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fullNameInput: '',
            bioInput: '',
            fieldBlank: false
        }
    }

    saveProfile = (fullNameIn, bioIn) => {
        if (fullNameIn === '') {
            this.setState({
                fieldBlank: true
            })
        } else {
            console.log(`Saving Profile using: \nFull Name: ${fullNameIn}\nBio: ${bioIn}`)
            // Save Profile to database!
            this.props.navigation.navigate('WelcomeScreen')
        }
    }


    render() {
        return (
            <SafeAreaView style={styles.container}>


                <View style={{ flex: 1, flexDirection: 'row', maxHeight: 62 }}>
                    <MindfulLogo height={62} width={62} />
                    <Text style={{ ...styles.mindfulTextLogo, alignSelf: 'flex-end', marginLeft: 8 }}>Mindful.</Text>
                </View>

                <Text style={{ ...styles.small, marginTop: 30, fontWeight: '500', fontSize: 18 }}>Welcome! Let's create your profile</Text>

                <View
                    style={{
                        marginTop: 30,
                        width: 236,
                        height: 236,
                        backgroundColor: '#F9F7F5',
                        borderRadius: 35,
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
                            source={require('../assets/plusIcon.png')}
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

                <MindfulTextInput
                    style={{
                        marginTop: 15,
                        textAlign: 'center',
                        paddingStart: 0,
                        fontSize: 20,
                        width: 290
                    }}
                    onChangeText={(entry) => { this.setState({ 'fullNameInput': entry.trim(), fieldBlank: false }) }}
                    placeholder='full name'
                    keyboardType='text'
                />
                <MindfulTextInput
                    style={{
                        marginTop: 15,
                        textAlign: 'center',
                        paddingStart: 0,
                        fontSize: 20,
                        width: 290,
                        height: 170,
                        textAlignVertical: 'top',
                        paddingTop: 14
                    }}
                    onChangeText={(entry) => { this.setState({ 'bioInput': entry.trim(), fieldBlank: false }) }}
                    placeholder='create a bio'
                    keyboardType='text'
                />
                {this.state.fieldBlank &&
                    <Text style={{ ...styles.small, color: 'maroon', marginTop: 10 }}>
                        Full Name is required!
                    </Text>
                }
                <MindfulButton
                    title='save profile'
                    textColor='white'
                    style={{ backgroundColor: '#7D9C73', marginTop: 15, width: 190 }}
                    onPress={() => { this.saveProfile(this.state.fullNameInput.trim(), this.state.bioInput.trim()) }}
                />


            </SafeAreaView>
        );
    }
}