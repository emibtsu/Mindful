import React, { useState, useRef } from 'react';
import { FormLabel } from 'react-bootstrap';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';
import MindfulButton from './MindfulButton';
import MindfulTextInput from './MindfulTextInput';

export default function LoginForm(props) {

    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');

    return (
        <React.Fragment>
            <View>
                <Image
                    source={props.image}
                    style={{
                        resizeMode: 'cover',
                        height: 200,
                        width: 200,
                    }}
                />
            </View>

            <Text style={styles.title}>Login</Text>

            <Text style={styles.text}>Email</Text>
            <MindfulTextInput
                margin={10}
                onChangeText={e => { setEnteredEmail(e) }}
                placeholder='Enter Email'
                keyboardType='text'
            />

            <Text style={styles.text}>Password</Text>

            <MindfulTextInput
                margin={10}
                onChangeText={e => { setEnteredPassword(e) }}
                placeholder='Enter Password'
                keyboardType='text'
            />

            <MindfulButton
                title='LOGIN'
                onPress={() => props.onLogin(enteredEmail, enteredPassword)}
            />

        </React.Fragment>

    )

}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'gray'
    },

    text: {
        fontSize: 16,
        fontWeight: 'normal',
        color: 'gray'
    },

});
