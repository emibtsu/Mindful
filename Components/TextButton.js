
import { Pressable, Text } from 'react-native';

export default function TextButton(props) {

    return (
        <Pressable
            onPress={props.onPress}
        >
            <Text
                style={{
                    ...props.style
                }}
            >{props.title}</Text>
        </Pressable >

    )
}
