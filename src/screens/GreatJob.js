//import liraries
import React, {  } from 'react';
import { View, Text, StyleSheet, StatusBar, Image } from 'react-native';
import Colors from '../utilities/Colors';

// create a component
const GreatJob = () => {
    return (
        <View style={{
            flex:1,
            alignItems:"center",
            justifyContent:"center"
        }}>
            <StatusBar hidden />
            <Text style={{
                color:Colors.green,
                fontFamily:"ExtraBold",
                fontSize:50
            }}>
                GREAT JOB
            </Text>
            <Text numberOfLines={2} style={{
                color:Colors.greyText,
                fontFamily:"Regular",
                fontSize:25,
                width:"80%"
            }}>
                You answered all the questions correctly
            </Text>
            <Image
                source={require('../../assets/success_character.png')}
                style={{ marginTop:20 }}
            />
        </View>
    );
};

export default GreatJob;