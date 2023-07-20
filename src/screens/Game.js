import React, { useState, useEffect, useLayoutEffect } from 'react';
import { View, Text, Image, StatusBar, ImageBackground } from 'react-native';
import style from '../utilities/Style_Game';
import Colors from '../utilities/Colors';
import { useSelector } from 'react-redux';
import Entypo from 'react-native-vector-icons/Entypo';

// components
import Multiple from '../components/Multipple';
import Boolean from '../components/Boolean';
import PauseModal from '../components/PauseModal';

const Game = (props) => {
    const [ counter, setCounter ] = useState(1);
    const [ pastQuestions, setPastQuestions ] = useState([]);
    const [ timerColor, setTimerColor ] = useState(Colors.blueBold);
    const [ time, setTime ] = useState(30)
    useLayoutEffect(() => {
        if(!quest) {
            pickCategory();
        }
        props.navigation.setOptions({
            gestureEnabled: false,
            header: () => {
                return <View style={{
                    width:"100%",
                    height:90,
                    backgroundColor: Colors.blackBlue,
                    flexDirection:"row",
                }}>
                    <View style={{
                        width:"50%",
                        height:"100%",
                        alignItems:"flex-end",
                        paddingBottom:15,
                        paddingLeft:15,
                        flexDirection:"row"
                    }}>
                        <Entypo
                            name="controller-paus"
                            color={Colors.blueBold}
                            size={30}
                            style={{top:5}}
                            onPress={() => setIsPaused(true)}
                        />
                        <Text style={{
                            fontFamily:"Bold",
                            color:"#ffffff",
                            left: 5
                        }}>
                            Question {counter}/20
                        </Text>
                    </View>
                    <View style={{
                        width:"50%",
                        height:"100%",
                        justifyContent:"flex-end",
                        alignItems:"flex-end",
                        paddingBottom:5,
                        paddingRight:15
                    }}>
                        <Image
                            source={require('../../assets/logo.png')}
                            style={{
                                width:50,
                                height:50,
                            }}
                        />
                    </View>
                </View>
            }
        })
    },[counter]);
    const [ isClicked, setIsClicked ] = useState(false);
    const [ isPaused, setIsPaused ] = useState(false);
    let oneSec
    useEffect(() => {
        if(!isPaused) {
            oneSec = setTimeout(() => {
                if(time <= 15 && time > 10) {
                    setTimerColor(Colors.orange);
                } else if(time <= 10 && time > 0) {
                    setTimerColor(Colors.red);
                }
                setTime(time - 1); 
            }, 1000);
            
            if(time === 0 || isClicked) {
                setTimerColor(Colors.blueBold);
                setTime(30);
                setCounter(counter + 1);
                setQuest(quest.slice(1,quest.length));
                setIsClicked(false);
               return clearTimeout(oneSec);
            } 
        } else {
            return clearTimeout(oneSec);
        }

        if(isGameOver) {
            setTimeout(() => {
                setPastQuestions([]);
                setIsGameOver(false);
                props.navigation.navigate("Reviews", { allQuestions: pastQuestions });
            },3000)
            
        }
    }, [time, isPaused, isGameOver]);

    const category = props.route.params.Category.item;
    const [selector, setSelector] = useState(useSelector(state => state.allCategories));
    const [ quest, setQuest ] = useState(null);

    const orderQuestions = ( array ) => {
        array.map(item => {
            item.question.replace("&quot;", " ");
            item.question.replace("&#039;", " ");
            item.correct_answer.replace("&quot;", " ");
            item.correct_answer.replace("&#039;", " ");
            item.incorrect_answers.map(ans => {
                ans.replace("&quot;", " ");
                ans.replace("&#039;", " ");
            })
            if(item.type === "boolean" && item.incorrect_answers.length < 2
                || item.type === "multiple" && item.incorrect_answers.length < 4
            ) {
                item.incorrect_answers.push(item.correct_answer)
            }
            
            item.incorrect_answers.sort(() => Math.random() - 0.5);
        })
        const easy = array.filter(item => item.difficulty === "easy");
        const medium = array.filter(item => item.difficulty === "medium");
        const hard = array.filter(item => item.difficulty === "hard");
        const newArray = [].concat(easy, medium, hard);
        return newArray;
    }

    const pickCategory = () => {
        
        switch(category){
            case "General knowledg":
                
                return setQuest(orderQuestions(selector?.General?.results));
            case "Music":
                return setQuest(orderQuestions(selector?.Music?.results));
            case "Movies":
                return setQuest(orderQuestions(selector?.Movies?.results));
            case "Celebrities":
                return setQuest(orderQuestions(selector?.Celebrities?.results));
            case "Video Games":
                return setQuest(orderQuestions(selector?.VideoGames?.results));
            default:
                return setQuest(quest);
        }
    }
    
    const [ isGameOver, setIsGameOver ] = useState(false);
    const pickAnswer = (currentQuest, answer) => {
        setIsClicked(true);
        let pastQuest = {
            ...currentQuest,
            isCorrect: answer === currentQuest?.correct_answer,
            id:counter,
            answer: answer
        }
        let questions = pastQuestions;
        questions.push(pastQuest);
        setPastQuestions(questions);

        if(pastQuestions?.length === 20) {
            setIsGameOver(true);
            const correct = pastQuestions.filter(item => item.isCorrect === true);
            if(correct.length >= 10) {
                props.navigation.navigate("GreatJob");
            } else {
                props.navigation.navigate("Failed");
            }
        }
    }

    const quitGame = () => {
        setIsPaused(false);
        props.navigation.navigate("Entry");
    }
    console.log(quest);
    return (
        <ImageBackground 
            style={style.container}
            imageStyle={{ 
                width:500,
                height:600,
                opacity:0.7
            }}
            source={require('../../assets/success_character.png')}
        >
            <StatusBar hidden />
            <PauseModal
                isPaused={isPaused}
                play={() => setIsPaused(false)}
                quit={quitGame}
            /> 
            
            { quest !== null && 
                <View>
                    {
                        quest[0]?.type === "multiple" ?
                        (
                            <Multiple 
                                questionObject={quest[0]}
                                question={quest[0]?.question}
                                answers={quest[0]?.incorrect_answers}
                                correctAnswer={quest[0]?.correct_answer}
                                pickAnswer={pickAnswer}
                                gameOver={false}
                            />
                        )
                        :
                        (
                            <Boolean 
                                questionObject={quest[0]}
                                question={quest[0]?.question}
                                answers={quest[0]?.incorrect_answers}
                                correctAnswer={quest[0]?.correct_answer}
                                pickAnswer={pickAnswer}
                                gameOver={false}
                            />
                        )
                    }
                     <View style={{
                        width:100,
                        height:100,
                        borderWidth:10,
                        alignSelf:"center",
                        top:50,
                        borderRadius:50,
                        borderColor: timerColor,
                        alignItems:"center",
                        justifyContent:"center"
                     }}>
                        <Text style={{
                            color: timerColor,
                            fontFamily: "Bold",
                            fontSize: 15
                        }}>
                            00:{time}
                        </Text>
                     </View>
                </View>
            }
        </ImageBackground>
    );
};


export default Game;