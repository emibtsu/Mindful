import { View } from 'react-native'

export default function HLine(props) {


    return (
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
            <View
                style={{
                    display: 'flex',
                    width: '85%',
                    borderTopWidth: 3,
                    opacity: .05,
                    ...props.style
                }}
            />
        </View>
    )

}