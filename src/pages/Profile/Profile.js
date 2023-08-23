import React from "react";
import {View,Text,Button} from 'react-native'

const Profile = ({navigation}) => {

    function handleNavigation(){
        navigation.navigate("ProfileEditScreen")
    }

    return(
        <View>
            <Text>Profile</Text>
            <Button title = "Edit Profile" onPress={handleNavigation}/>
        </View>
    )
}

export default Profile