import React from "react";
import {View,SafeAreaView,Text, YellowBox} from 'react-native'
import styles from './UyeOl.styles'

import LinearGradient from "react-native-linear-gradient";


import Input from '../../components/input'
import Button from "../../components/button/button";

// ... İçe aktarım bildirimleri

function Uyeol({ navigation }) {

    const girisYapPress = () => {
        navigation.navigate('Giris');
        };

    return (
        <SafeAreaView style={styles.container}>
            <LinearGradient
            colors={['#FA1F21','#8F1F1E']}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={styles.gradientContainer}
            >

            <View style={styles.gradientBackground}>
                <View style={styles.input_container}>
                    <Input label="Ad Soyad" placeholder="Adınızı ve Soyadınızı giriniz." />
                    <Input label="E-Posta" placeholder="E-postanızı giriniz." />
                    <Input label="Telefon" placeholder="Telefon numaranızı giriniz." />
                    <Input label="Parola" placeholder="Parolanızı giriniz." />
                    <Input label="Parola Doğrulama" placeholder="Parolanızı Doğrulayınız." />
                </View>
                <View style={styles.button_container}>
                    <Text style={{color:'yellow'}}onPress={girisYapPress}> Zaten üye misin? Giriş yap</Text>
                    <Button text="Üye ol" onPress={null} />
                </View>
            </View>

            </LinearGradient>
        </SafeAreaView>
    );
}

export default Uyeol;

