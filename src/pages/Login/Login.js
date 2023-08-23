import React from "react"
import { Alert, View, Text } from "react-native"
import Input from "../../components/input"
import Button from "../../components/button"
import styles from "./Login.styles"
import { Formik } from "formik"
import usePost from "../../hooks/usePost/usePost"
import { useDispatch, useSelector } from "react-redux"
import LinearGradient from "react-native-linear-gradient";

const API_AUTH_URL = "https://fakestoreapi.com/auth"
const Login = () => {
    const user = useSelector(state => state.user)
    const { data, loading, error, post } = usePost();

    const dispatch = useDispatch()

    const handleLogin = (values) => {
        post(API_AUTH_URL + "/login", (values))
    }


    if (error) {
        Alert.alert("Shopping", "Bir hata oluştu")
    }
    if (data) {
        if (data.status === "Error") {
            Alert.alert("Shopping", "Kullanıcı Bulunamadı")
        } else {
            dispatch({ type: 'SET_USER', payload: { user: JSON.stringify(user) } })
        }
    }


    return (
        <View style={styles.container}>

            <LinearGradient
                colors={['#FA1F21', '#8F1F1E']}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                style={styles.gradientContainer}
            >

                <View style={styles.top_container}>
                    <View style={styles.header_view}>
                        <Text style={styles.headerText}>BURGER</Text>
                        <Text style={[styles.headerText, { color: "yellow" }]}>BRAND</Text>
                    </View>

                </View>

                <Formik
                    initialValues={{ username: '', password: '' }}
                    onSubmit={handleLogin}
                >
                    {({ handleChange, handleSubmit, values }) => (
                        <View style={styles.input_container}>
                            <Input
                                placeholder="Kullanıcı Adınızı giriniz..."
                                value={values.username}
                                onType={handleChange('username')}
                                iconName="account"
                            />
                            <Input
                                placeholder="Şifrenizi giriniz..."
                                value={values.password}
                                onType={handleChange('password')}
                                iconName="key"
                                isSecure
                            />
                            
                            <View style = {styles.buttonsContainer}>
                                <Button text="Giriş yap" onPress={handleSubmit} loading={loading} />
                            </View>

                            
                        </View>
                    )}
                </Formik>

            </LinearGradient>
        </View>
    )
}

export default Login;

