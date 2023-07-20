//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../utilities/Colors';

// create a component
const Multiple = ({ questionObject, question, answers, correctAnswer, pickAnswer, gameOver }) => {
    const difficulty = questionObject?.difficulty;
    const [ isClicked, setIsClicked ] = useState(false);
    const [ color, setColor ] = useState("#ffffffff");
    const [ pickedAnswer, setPickedAnswer ] = useState("");
    const handlPickanswer = (pickedAnswer) => {
        setIsClicked(true);
        setPickedAnswer(pickedAnswer);
        if(pickedAnswer !== correctAnswer) {
            setColor(Colors.red);
        } else {
            setColor(Colors.green);
        }

        setTimeout(() => {
            pickAnswer(questionObject, pickedAnswer);
            setIsClicked(false);
        }, 250)
    }

    const levelColor = () => {
        switch(difficulty){
            case "hard":
                return Colors.red
            case "medium":
                return Colors.orange
            case "easy":
                return Colors.green
            default:
                return Colors.green
        }
    }

    const setBackGrounColor = (item) => {
        if(!gameOver) {
            if(pickedAnswer === item){
                return color;
            } else {
                return "#FFFFFF";
            }
        } else {
            if(item === questionObject.correct_answer) {
                return Colors.green;
            } else if(item === questionObject.answer && item !== questionObject.correct_answer) {
                return Colors.red
            } else if(item !== questionObject.answer && item !== questionObject.correct_answer){
                return "#FFFFFF"
            }
        }
        
    }
    return (
        <View style={{
            alignItems:"center",
            justifyContent:"center"
        }}>
            <View style ={{
                flexDirection:"row",
                alignSelf:"flex-start",
                left:20
            }}>
                <Text style={{
                    fontFamily:"Regular",
                    color:Colors.greyText,
                    fontSize:18
                }}>
                    Level:    
                </Text>
                <Text style={{
                    fontFamily:"Regular",
                    fontSize:18,
                    left:5,
                    color: levelColor()
                }}>
                    {difficulty}    
                </Text>
            </View>
            <View style={{
                width:"100%",
                padding:10,
            }}>
                <Text style={{
                    fontFamily:"Bold",
                    color:Colors.blueBold,
                    fontSize:18
                }}>{question}</Text>
            </View>
            <View style={{
                marginTop: 20
            }}>
                {
                    answers?.map((item, index) => 
                        
                            !isClicked && ! gameOver ?
                            (
                                <TouchableOpacity 
                                    key={index}
                                    style={{
                                        width:300,
                                        height:70,
                                        backgroundColor: pickedAnswer === item ? color : "#FFFFFF",
                                        margin:10,
                                        justifyContent:"center",
                                        paddingLeft:10,
                                        borderRadius:15,
                                        borderWidth:3,
                                        borderColor:Colors.greyText,
                                        shadowColor:'#000', 
                                        shadowOffset:{width:0, height:20},
                                        shadowOpacity:0.5,
                                        shadowRadius :10,
                                        borderWidth:2,
                                        borderColor:Colors.blueBold,
                                        opacity:0.9,
                                    }}
                                    onPress={() => handlPickanswer(item)}
                                >
                                    <Text style={{
                                        fontFamily:"Bold",
                                        color:Colors.blueMedium,
                                        fontSize:15
                                    }}>
                                        {item}
                                    </Text>
                                </TouchableOpacity>
                            ) : 
                            (
                                <View 
                                    key={index}
                                    style={{
                                        width:300,
                                        height:70,
                                        backgroundColor: setBackGrounColor(item),
                                        margin:10,
                                        justifyContent:"center",
                                        paddingLeft:10,
                                        borderRadius:15,
                                        borderWidth:3,
                                        borderColor:Colors.greyText,
                                        shadowColor:'#000', 
                                        shadowOffset:{width:0, height:20},
                                        shadowOpacity:0.5,
                                        shadowRadius :10,
                                    }}
                                >
                                    <Text style={{
                                        fontFamily:"Bold",
                                        color:Colors.blueMedium,
                                        fontSize:15
                                    }}>
                                        {item}
                                    </Text>
                                </View>
                            )
                        
                    )
                }
            </View>
        </View>
    );
};




export default Multiple;
