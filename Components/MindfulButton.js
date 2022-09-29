
import { Pressable, Text } from 'react-native';

export default function MindfulButton(props) {


    return (
        <Pressable
            title={props.title}
            style={{
                height: 48,
                width: 343,
                borderRadius: 35,
                backgroundColor: '#F5F5F5',
                ...props.style,

            }}
            onPress={props.onPress}
        >
            <Text
                style={{
                    marginTop: 7,
                    // fontFamily: Poppins,
                    fontSize: 20,
                    fontWeight: '400',
                    lineHeight: 30,
                    letterSpacing: 0,
                    textAlign: 'center'

                }}
            >{props.title}</Text>
        </Pressable >


    )

}
