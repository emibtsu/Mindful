
import { Pressable, Text } from 'react-native';

export default function MindfulButton(props) {


    return (
        <Pressable
            title={props.title}
            style={{
                ...props.style,
                margin: props.margin,
                paddingVertical: 8,
                paddingHorizontal: 30,
                borderRadius: 4,
                elevation: 3,
                backgroundColor: 'gray',
            }}
            onPress={props.onPress}
        >
            <Text
                style={{
                    color: 'white'
                }}
            >{props.title}</Text>
        </Pressable>


    )

}
