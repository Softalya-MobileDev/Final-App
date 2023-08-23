import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container: {
      flex: 1,
      
    },
    gradientContainer: {
      flex: 1,
    },
    top_container: {
      paddingTop: 100,
      alignItems: "center",
    },
    header_view:{
      alignItems:'center'
    },
    headerText: {
      fontSize: 40,
      fontWeight: "bold",
      color: "white",
      alignItems:'center',
      textShadowColor: "black", // Gölge işlemleri
      textShadowOffset: { width: 2, height: 2 }, //
      textShadowRadius: 10, //
    },
    buttonsContainer: { 
      marginTop: 20,
      justifyContent: "flex-end"
    },

    input_container: {
      display: "flex",
      justifyContent: "center",
      flexDirection:"column",
      alignItems:"center"
    }
  })