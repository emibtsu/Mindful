
import { Button, Text, View } from 'react-native';


const ProfileSection = props => {


    return (
        <View style={{ border: 'solid' }}>
            <Text>Profile</Text>
            <Text>Name: {props.name}</Text>
            <Text>Email: {props.email}</Text>
            <Text>Phone Number: {props.phone}</Text>

            <Button
                title='Close Profile'
                onPress={props.onClose}
            />
        </View>
    )
}

export default ProfileSection;