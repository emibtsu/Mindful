
import { Pressable, Text, SafeAreaView, StyleSheet } from 'react-native';

export default function MindfulNavBar(props) {

    return (
        <SafeAreaView style={styles.navBar} flexDirection='row'>

            <Text style={{marginHorizontal: 8}}>000</Text>
            <Text style={{marginHorizontal: 8}}>000</Text>
            <Text style={{marginHorizontal: 8}}>000</Text>
            <Text style={{marginHorizontal: 8}}>000</Text>
            <Text style={{marginHorizontal: 8}}>000</Text>
            <Text style={{marginHorizontal: 8}}>000</Text>

        </SafeAreaView>


    )

}

const styles = StyleSheet.create({
    navBar: {
        paddingVertical: 4,
        paddingHorizontal: 4,
        borderWidth: 1,
        
    },
  });