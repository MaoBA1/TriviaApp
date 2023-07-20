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
})