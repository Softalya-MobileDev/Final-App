import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";

import { useSelector, useDispatch } from "react-redux";

import DrawerButton from './components/DrawerButton/DrawerButton'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import Home from './pages/Home/Home'

import Adress from './pages/Adress/Adress'
import AdressEdit from './pages/AdressEdit/AdressEdit'

import Profile from './pages/Profile/Profile'
import ProfileEdit from './pages/ProfileEdit/ProfileEdit'

import Basket from "./pages/Basket/Basket";
import BasketDetails from './pages/BasketDetails/BasketDetails'
import BasketValidation from './pages/BasketValidation/BasketValidation'

import Login from './pages/Login/Login'

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

const ProfileStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ProfileScreen" component={Profile} />
      <Stack.Screen name="ProfileEditScreen" component={ProfileEdit} />
    </Stack.Navigator>
  )
}

const AdressStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AdressScreen" component={Adress} />
      <Stack.Screen name="AdressEditScreen" component={AdressEdit} />
    </Stack.Navigator>
  )
}

const BasketStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="BasketScreen" component={Basket} />
      <Stack.Screen name="BasketDetailsScreen" component={BasketDetails} />
      <Stack.Screen name="BasketValidationScreen" component={BasketValidation} />
    </Stack.Navigator>
  )

}

const DrawerStack = ({ navigation }) => {

  const dispatch = useDispatch()

  function handleNavigateBasket() {
    navigation.navigate("BasketStackScreen")
  }

  return (
    <Drawer.Navigator initialRouteName = "BURGERBRAND" screenOptions={{

      drawerLabelStyle: {
        color: "red"
      },

      drawerContentStyle: {
        backgroundColor: "#eceff1"
      },

    }}>
      <Drawer.Screen name="HomeScreen" component={Home} initialRouteName="BURGERBRAND" options={{
        title: "BURGERBRAND",
        headerTitleStyle: {
          fontSize: 25,
          fontWeight: "bold"
        },
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "red",

        },
        headerTintColor: "white",
        headerRight: () => (
          <Icon name="basket" size={25} color="white" style={{ marginRight: 10 }} onPress={handleNavigateBasket} />
        ),

        headerLeft: () => (
          <Icon name="logout" size={25} color="white" style={{ marginLeft: 10 }} onPress={() => dispatch({ type: "REMOVE_USER" })} />
        )
      }} />
      <Drawer.Screen name="ProfileStackScreen" component={ProfileStack} options={{ headerShown: false }} />
      <Drawer.Screen name="AdressStackScreen" component={AdressStack} options={{ headerShown: false }} />
      
    </Drawer.Navigator>
    
  )
}

function Router() {

  const userSession = useSelector(state => state.user)
  const isAuthloading = useSelector(state => state.isAuthloading)
  const dispatch = useDispatch()

  return (
    <NavigationContainer>
      {!userSession ? (
        <Stack.Navigator>
          <Stack.Screen
            name="LoginPage"
            component={Login}

            options={{
              headerShown: false
            }} />
        </Stack.Navigator>) : (
        <Stack.Navigator>
          <Stack.Screen name="Drawer" component={DrawerStack} options={{
            headerShown: false,
          }} />

          <Stack.Screen name="BasketStackScreen" component={BasketStack} options={{
            headerShown: false,
          }} />

        </Stack.Navigator>
      )}

    </NavigationContainer>
  )
}

export default Router