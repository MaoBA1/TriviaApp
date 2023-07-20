import { StyleSheet } from "react-native";
import Colors from "./Colors";
import { Dimensions } from 'react-native';

const Height = Dimensions.get("window").height;

export default StyleSheet.create({
    container:{
        flex:1,
        width:"100%",
        height:"100%",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor: Colors.greyBlue,
        paddingTop: Height - 800
    },
    categoriesButton:{
        width:300,
        height: 100,
        backgroundColor:"#FFFFFF",
        borderWidth:2,
        borderColor:Colors.blueBold,
        opacity:0.9,
        margin:15,
        alignItems:"center",
        justifyContent:"center",
        shadowColor:'#000', 
        shadowOffset:{width:0, height:20},
        shadowOpacity:0.5,
        shadowRadius :10,
        borderRadius:30
    },
    categoriesText:{
        fontFamily:"Bold",
        fontSize:16,
        color:Colors.greyText
    }    
})