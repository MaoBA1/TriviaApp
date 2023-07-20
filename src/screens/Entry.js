import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import style from '../utilities/Style_Entry';
import colors from '../utilities/Colors';
import { useDispatch } from 'react-redux';
import { 
    getGeneralAction,
    getCelebritiesAction,
    getMoviesAction,
    getMusicAction,
    getVideoGamesAction
 } from '../../store/actions';

const Entry = ({ navigation }) => {
    const dispatch = useDispatch();
    
    const getAllData = async() => {
        let actions = [
            getGeneralAction(),
            getCelebritiesAction(),
            getMoviesAction(),
            getMusicAction(),
            getVideoGamesAction()
        ]
        try{
            await dispatch(actions[0]);
            await dispatch(actions[1]);
            await dispatch(actions[2]);
            await dispatch(actions[3]);
            await dispatch(actions[4]);
        } catch(err) {
            console.log(err.massage);
        }
    }

    useEffect(() => {
        getAllData()
    },[]);
    
    return (
        <View style={style.container}>
            <Image
                source={require('../../assets/splash_logo.png')}
                style={style.imageStyle}
            />
            <TouchableOpacity onPress={() => navigation.navigate("Categories")} style={style.playButton}>
                <Text style={style.playButtonText}>Let's Play</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Entry;


export const ScreenOptions = ( props ) => {
    return {
        headerShown:false
    }
}