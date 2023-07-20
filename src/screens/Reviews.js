import React, { useLayoutEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import style from '../utilities/Style_Reviews';
import Multiple from '../components/Multipple';
import Boolean from '../components/Boolean';
import Colors from '../utilities/Colors';
import  Entypo  from 'react-native-vector-icons/Entypo';

const Reviews = ( props ) => {
    const allQuestions = props?.route?.params?.allQuestions;
    const correct = allQuestions?.filter(item => item.isCorrect);

    useLayoutEffect(() => {
        props.navigation.setOptions({
            gestureEnabled: false,
            headerTitleAlign:"center",
            headerStyle:{
                backgroundColor: Colors.blackBlue,
            },
            headerTitleStyle:{
                fontFamily:"ExtraBold",
                color:"#FFFFFF"
            },
            headerLeft: () => {
                return (
                    <View style={{
                        height:"100%",
                        width:80,
                        alignItems:"center",
                        justifyContent:"center"
                    }}>
                        <Entypo
                            name='chevron-left'
                            size={30}
                            color={"#ffffff"}
                            onPress={() => props.navigation.navigate("Entry")}
                        />
                    </View>
                )
            }
        })
    },[props])
    return (
        <View style={style.container}>
            <View style={{
                marginBottom:20
            }}>
                <Text style={{
                    fontFamily:"Bold",
                    color: correct?.length >= 10 ? Colors.green : Colors.red,
                    fontSize:18
                }}>
                    You answered correctly {correct?.length} / 20
                </Text>
            </View>
            <FlatList
                data={allQuestions}
                keyExtractor={item => item.id}
                renderItem={({item, index}) => 
                    item.type === "multiple" ?
                    (
                        <View style={{ marginTop: index === 0 ? 0 : 50 }}>
                            <Multiple
                                questionObject={item}
                                question={item.question}
                                answers={item.incorrect_answers}
                                correctAnswer={item.correct_answer}
                                gameOver={true}
                            />
                        </View>
                    )
                    :
                    (
                        <View style={{ marginTop: index === 0 ? 0 : 50 }}>
                            <Boolean
                                questionObject={item}
                                question={item.question}
                                answers={item.incorrect_answers}
                                correctAnswer={item.correct_answer}
                                gameOver={true}
                            />
                        </View>
                    )
                }
            />
        </View>
    );
};

export default Reviews;