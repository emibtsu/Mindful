
import { Pressable, View, Image } from 'react-native';

export default function NavBar(props) {

    return (

        <View style={{
            bottom: 0,
            width: '100%',
            height: 70,
            backgroundColor: '#FFFF',
            border: 'solid',
            borderTopWidth: 1,
            borderColor: 'black',
            position: 'absolute',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center'
        }}>
            <Pressable
                onPress={() => { props.navigation.navigate('FeedScreen') }}
            >
                <Image
                    source={require('../assets/HomeIcon.png')}
                    style={{
                        resizeMode: 'cover',
                        height: 23,
                        width: 23,
                    }}
                />
            </Pressable>
            <Pressable
                onPress={() => { props.navigation.navigate('LoginScreen') }}
            >
                <Image
                    source={require('../assets/PlusIcon.png')}
                    style={{
                        resizeMode: 'cover',
                        height: 25,
                        width: 25,
                    }}
                />
            </Pressable>

            <Pressable
                onPress={() => { props.navigation.navigate('ProfileScreen') }}
            >
                <Image
                    source={require('../assets/CalendarIcon.png')}
                    style={{
                        resizeMode: 'cover',
                        height: 25,
                        width: 25,
                    }}
                />
            </Pressable>



        </View>


    )

}
