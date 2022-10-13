
import { Image, View, Text } from 'react-native';
import { styles } from '../Components/MindfulStyles';
import Category from './Catetgory';


export default function Post(props) {
    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                ...props.style
            }}
        >
            <Text style={{ ...styles.smallGray, marginTop: 10, marginLeft: 30, alignSelf: 'flex-start' }}>{props.poster}</Text>

            <Image
                source={require('../assets/CatImage.png')}
                style={{
                    resizeMode: 'cover',
                    marginTop: 2,
                    borderRadius: 15,
                    height: 330,
                    width: 330,

                }}
            />
            <Category style={{ marginTop: 10 }} text={props.category} />

        </View>

    )

}
