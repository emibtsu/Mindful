
import { TextInput } from 'react-native';

export default function MindfulTextInput(props) {

    return (
        <TextInput
            style={{
                height: 48,
                width: 343,
                borderRadius: 35,
                backgroundColor: '#F5F5F5',
                // fontFamily: Poppins,
                fontSize: 16,
                fontWeight: '400',
                lineHeight: 24,
                letterSpacing: 0,
                textAlign: 'left',
                paddingStart: 20,
                textAlignVertical: 'center',
                ...props.style

            }}
            onChangeText={props.onChangeText}
            value={props.value}
            placeholder={props.placeholder}
            keyboardType={props.keyboardType}
        >

        </TextInput >


    )

}
