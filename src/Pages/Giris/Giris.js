import React ,{useState}from "react";
import { View, Text, StyleSheet, SafeAreaView} from "react-native";

import styles from './Giris.styles'
import LinearGradient from "react-native-linear-gradient";

import Input from "../../components/input";
import Button from "../../components/button";

import UyeBilgi from "../../User.json"


export default function Giris(props) {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const UyeOlPress = () => {
    props.navigation.navigate('UyeOl');
  };

  const AnasayfaGiris=()=>{
    const control= UyeBilgi.find(uye => uye.ePosta === email && uye.password === password)
    if (control) {
      setLoggedIn(true);
      props.navigation.navigate('Anasayfa');
    } else {
      alert("Giriş başarısız. E-posta veya parola hatalı.");
    }
    console.log("Giriş yapılıyor. E-posta:", email, "Parola:", password);
  
  }

  return (
    <SafeAreaView style={styles.container}>

      <LinearGradient
        colors={['#FA1F21','#8F1F1E']}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.gradientContainer}
      >
        
        <View style={styles.top_container}>
          <View style={styles.header_view}>
          <Text style={styles.headerText}>BURGER</Text>
          <Text style={[styles.headerText, { color: "yellow" }]}>BRAND</Text>
          </View>
        
        <Input label="E-Posta" 
        placeholder="E-Posta adresinizi giriniz" 
        value={email}
        onChangeText={(email) => setEmail(email)}/>
        
        <Input 
        label="Parola" 
        placeholder="Parolanızı giriniz" 
        value={password}
        onChangeText={(password) => setPassword(password)}
        />
        </View>

        <View style={styles.buttonsContainer}>
          <Button text="Oturum Aç" onPress={AnasayfaGiris}/>
          <Button text="Üye Ol" onPress={UyeOlPress}  />
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}