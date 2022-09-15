
import { TextInput } from 'react-native';

export default function MindfulTextInput(props) {

    return (
        <TextInput
            style={{
                margin: props.margin,
                border: 'solid',
                borderWidth: 1,
                paddingVertical: 2,
                paddingHorizontal: 15,
                borderRadius: 4,
            }}
            onChangeText={props.onChangeText}
            value={props.value}
            placeholder={props.placeholder}
            keyboardType={props.keyboardType}
        >

        </TextInput>


    )

}
