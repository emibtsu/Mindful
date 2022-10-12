
import { Image, Pressable } from 'react-native';


export default function BackArrow(props) {

    return (
        <Pressable
            onPress={props.onPress}
        >
            <Image
                source={require('../assets/BackArrow.png')}
                style={{
                    resizeMode: 'cover',
                    height: 18,
                    width: 18,
                    ...props.style

                }}
            />
        </Pressable>

    )

}
