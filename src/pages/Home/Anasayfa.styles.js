import { StyleSheet, Dimensions } from "react-native";
export default styles=StyleSheet.create({
    container:{
        flex:1
    },
    top_container:{ /// Gerek yok dendi
    },
    banner:{
        alignSelf: 'center',
        height:Dimensions.get('window').height/5,//
        width:Dimensions.get('window').width/2,
        resizeMode: 'cover',
        justifyContent:'center'
    },
    category:{

    },
    products:{
        
    },

    category_card:{
        display: "flex",
        flexDirection: "row",
    }

})