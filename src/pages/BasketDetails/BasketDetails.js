import React from "react";
import {View,Text,Button} from 'react-native'

const Basket = ({navigation}) => {

    function handleNavigation(){
        navigation.navigate("BasketValidationScreen")
    }

    return(
        <View>
            <Text>Basket</Text>
            <Button title = "Devam Et" onPress={handleNavigation}/>
        </View>
    )
}

export default Basket