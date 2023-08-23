import { StyleSheet } from "react-native"

export default styles = StyleSheet.create({

    container:{
      flex:1,
    },
    card: {
      margin: 16,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 8,
    },
    titleContainer: {
      flex: 1,
      marginLeft: 16,
    },
    title: {
      fontSize: 18,
    },
    titleDivider: {
      borderBottomWidth: 2,
      borderBottomColor: 'red',
      marginTop: 4,
    },
    addButton: {
      marginLeft: 8,
    },
    infoContainer: {
      marginTop: 8,
    },
    infoText: {
      marginBottom: 4,
    },
    buttonContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-end',
      marginTop: 8,
    },
    quantityButton: {
      marginRight: 8,
    },
    quantityText: {
      marginHorizontal: 8,
    },

    continueButton:{
      justifyContent:"flex-end",
      alignSelf:"center",
      marginTop: 20,
      backgroundColor: "red",
      padding: 7,
      borderRadius: 7,
    },

    continueText:{
      fontSize: 17,
      color: "#eceff1"
    }


  });