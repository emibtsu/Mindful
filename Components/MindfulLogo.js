
import { Image, View } from 'react-native';


export default function MindfulLogo(props) {

    return (
        <View>
            <Image
                source={require('../assets/MindfulLogo.png')}
                style={{
                    resizeMode: 'cover',
                    height: props.height,
                    width: props.width,

                }}
            />
        </View>

    )

}
