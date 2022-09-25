import React, { useState, useRef } from 'react';
import { FormLabel } from 'react-bootstrap';
import { StyleSheet, Text, View, Image, TextInput, Button, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-web';

export default class MindfulHorizontalScroll extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <ScrollView style={styles.scrollContainer} horizontal={true}>
                <Text style={{ marginHorizontal: 8 }}>000</Text>
                <Text style={{ marginHorizontal: 8 }}>000</Text>
                <Text style={{ marginHorizontal: 8 }}>000</Text>
                <Text style={{ marginHorizontal: 8 }}>000</Text>
                <Text style={{ marginHorizontal: 8 }}>000</Text>
                <Text style={{ marginHorizontal: 8 }}>000</Text>
                <Text style={{ marginHorizontal: 8 }}>000</Text>
                <Text style={{ marginHorizontal: 8 }}>000</Text>
                <Text style={{ marginHorizontal: 8 }}>000</Text>
                <Text style={{ marginHorizontal: 8 }}>000</Text>
                <Text style={{ marginHorizontal: 8 }}>000</Text>
                <Text style={{ marginHorizontal: 8 }}>000</Text>
                <Text style={{ marginHorizontal: 8 }}>000</Text>

            </ScrollView>

        )
    }

}

const styles = StyleSheet.create({
    scrollContainer: {
        flex: 1,
        padding: 5,
        border: 'solid',
        backgroundColor: 'blue',
    },
});
