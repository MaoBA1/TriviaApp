import React, { useLayoutEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ImageBackground } from 'react-native';
import style from '../utilities/Style_Categories';
import Colors from '../utilities/Colors';
import  Entypo  from 'react-native-vector-icons/Entypo';



const Categories = ({ navigation }) => {

    useLayoutEffect(() => {
        navigation.setOptions({
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
                            onPress={() => navigation.navigate("Entry")}
                        />
                    </View>
                )
            }
        })
    },[navigation])
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
            <FlatList
               data={[
                {item: "General knowledg", id: 1},
                {item: "Music", id: 2},
                {item: "Movies", id: 3},
                {item: "Celebrities", id: 4},
                {item: "Video Games", id: 5},
               ]} 
               keyExtractor={ item => item.id }
               renderItem={({item, index}) => 
                    <TouchableOpacity onPress={() => navigation.navigate("Game", { Category: item })} style={style.categoriesButton}>
                        <Text style={style.categoriesText}>{item.item}</Text>
                    </TouchableOpacity>

               }
            />
        </ImageBackground>
    );
};



export default Categories;