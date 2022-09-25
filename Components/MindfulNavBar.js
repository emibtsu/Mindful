
import { Pressable, Text, SafeAreaView, StyleSheet } from 'react-native';

export default class MindfulNavBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <SafeAreaView style={styles.navBar} flexDirection='row'>

                <Text style={{ marginHorizontal: 8 }}>000</Text>
                <Text style={{ marginHorizontal: 8 }}>000</Text>
                <Text style={{ marginHorizontal: 8 }}>000</Text>
                <Text style={{ marginHorizontal: 8 }}>000</Text>
                <Text style={{ marginHorizontal: 8 }}>000</Text>
                <Text style={{ marginHorizontal: 8 }}>000</Text>

            </SafeAreaView>


        )
    }

}

const styles = StyleSheet.create({
    navBar: {
        paddingVertical: 4,
        paddingHorizontal: 4,
        borderWidth: 1,

    },
});