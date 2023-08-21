//
import { View, Text ,Button} from 'react-native';
//
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Giris from './Pages/Giris/Giris'
import UyeOl from './Pages/UyeOl/UyeOl'
import Anasayfa from './Pages/Anasayfa/Anasayfa';
import Basket from './Pages/Basket/Basket'



//
function HomeScreen({ navigation }) {
    const navigateToGiris = () => {
      navigation.navigate("Giris");
    };
  
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
        <Button title="Homeden deneme girişi" onPress={navigateToGiris} />
      </View>
    );
}
//

const Stack= createNativeStackNavigator();
export default function App(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Giris" component={Giris}/>
                <Stack.Screen name="UyeOl" component={UyeOl}/>
                <Stack.Screen name="Anasayfa" component={Anasayfa}/>
                <Stack.Screen name="Basket" component={Basket}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}