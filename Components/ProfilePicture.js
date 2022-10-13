
import { Image, View } from 'react-native';

export default function ProfilePicture(props) {
    return (
        < View >
            <Image
                source={require('../assets/ProfilePicture.png')}
                style={{
                    resizeMode: 'cover',
                    height: props.height,
                    width: props.width,
                    ...props.style

                }}
            />
        </View >

    )

}
