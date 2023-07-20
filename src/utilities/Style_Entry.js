import { StyleSheet } from "react-native";
import Colors from "./Colors";

export default StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor: Colors.greyBlue
    },
    imageStyle:{
        shadowColor:Colors.blueBold, 
        shadowOffset:{width:0, height:7},
        shadowOpacity:0.5,
        shadowRadius :6,
    },
    playButton:{
        marginTop:30,
        width:"80%",
        height:100,
        backgroundColor:"#FFFFFF",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:20,
        shadowColor:'#000', 
        shadowOffset:{width:0, height:20},
        shadowOpacity:0.5,
        shadowRadius :10,
        borderRadius:30,
        borderWidth:3,
        borderColor:Colors.blueMedium
    },
    playButtonText:{
        fontFamily:"ExtraBold",
        fontSize:30,
        color:Colors.greyText
    }
})