//import liraries
import React, {  } from 'react';
import { View, Text, StyleSheet, StatusBar, Image } from 'react-native';
import Colors from '../utilities/Colors';

// create a component
const Failed = ({ navigation }) => {
    return (
        <View style={{
            flex:1,
            alignItems:"center",
            justifyContent:"center"
        }}>
            <StatusBar hidden />
            <Text style={{
                color:Colors.red,
                fontFamily:"ExtraBold",
                fontSize:50
            }}>
                FAILED
            </Text>
            <Text numberOfLines={2} style={{
                color:Colors.greyText,
                fontFamily:"Regular",
                fontSize:25,
                width:"80%"
            }}>
                You need to answer 10 correct answers
            </Text>
            <Image
                source={require('../../assets/failed_character.png')}
                style={{ marginTop:20 }}
            />
        </View>
    );
};

export default Failed;
