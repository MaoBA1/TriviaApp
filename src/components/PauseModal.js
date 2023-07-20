//import liraries
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import Colors from '../utilities/Colors';
// create a component
const PauseModal = ({isPaused, play, quit}) => {

    return (
        <Modal 
            visible={isPaused}
            transparent
        >
            <View style={{
                flex:1,
                alignItems:"center",
                justifyContent:"center"
            }}>
                <View style={{
                    backgroundColor:"#FFFFFF",
                    width:"85%",
                    height:250,
                    borderRadius:20,
                    borderWidth:2,
                    borderColor:Colors.blueMedium,
                    shadowColor:'#000', 
                    shadowOffset:{width:0, height:20},
                    shadowOpacity:0.5,
                    shadowRadius :10,
                    alignItems:"center",
                    paddingVertical:20
                }}>
                    <Text style={{
                        fontFamily:"Medium",
                        fontSize:20,
                        color:Colors.greyText
                    }}>
                        Are you sure you want to quit the game?
                    </Text>

                    <View style={{
                        flexDirection:"row",
                        top:50,
                        width:"60%",
                        justifyContent:"space-between"
                    }}>
                        <TouchableOpacity style={{
                            backgroundColor:Colors.blueBold,
                            width:90,
                            height:40,
                            alignItems:"center",
                            justifyContent:"center",
                            borderRadius:10,
                            shadowColor:'#000', 
                            shadowOffset:{width:0, height:10},
                            shadowOpacity:0.5,
                            shadowRadius :10,
                        }} onPress={quit}>
                            <Text style={{
                                fontFamily:"Regular",
                                color:"#FFFFFF"
                            }}>
                                Yes
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{
                            backgroundColor:Colors.blueBold,
                            width:90,
                            height:40,
                            alignItems:"center",
                            justifyContent:"center",
                            borderRadius:10,
                            shadowColor:'#000', 
                            shadowOffset:{width:0, height:10},
                            shadowOpacity:0.5,
                            shadowRadius :10,
                        }} onPress={play}>
                            <Text style={{
                                fontFamily:"Regular",
                                color:"#FFFFFF"
                            }}>
                                Continue
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
};


export default PauseModal;
