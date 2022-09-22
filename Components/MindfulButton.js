
import { Pressable, Text } from 'react-native';

export default function MindfulButton(props) {

    return (
        <Pressable
            title={props.title}
            style={{
                margin: props.margin,
                paddingVertical: 8,
                paddingHorizontal: 30,
                borderRadius: 8,
                elevation: 3,
                backgroundColor: 'rgb(92,220,172)'
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
