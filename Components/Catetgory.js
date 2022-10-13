
import { Text, View } from 'react-native';
import { styles } from './MindfulStyles';

export default function Category(props) {


    return (
        <View
            style={{
                width: 250,
                height: 25,
                borderRadius: 50,
                backgroundColor: '#E6E6E6',
                paddingHorizontal: 5,
                ...props.style
            }}
        >
            <Text style={{ ...styles.small, fontSize: 14, textAlign: 'center' }}>{props.text}</Text>

        </View>

    )

}
