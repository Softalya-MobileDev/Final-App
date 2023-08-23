import React from "react";
import {View,Text,Button} from 'react-native'

const Adress = ({navigation}) => {

    function handleNavigation(){
        navigation.navigate("AdressEditScreen")
    }
    return(
        <View>
            <Text>Adress</Text>
            <Button title = "Edit Adress" onPress={handleNavigation}/>
        </View>
    )
}

export default Adress