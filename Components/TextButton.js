
import { Pressable, Text } from 'react-native';

export default function TextButton(props) {

    return (
        <Pressable
            onPress={props.onPress}
            style={{
                ...props.style
            }}
        >
            <Text
                style={{
                    ...props.textStyle
                }}
            >{props.title}</Text>
        </Pressable >

    )
}
