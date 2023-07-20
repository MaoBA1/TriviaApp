import { createStackNavigator } from '@react-navigation/stack';
import { View, Image } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Colors from '../utilities/Colors';


// Screens

import Entry, { ScreenOptions as EntryScreeOptions } from '../screens/Entry';
import Categories from '../screens/Categories';
import Game from '../screens/Game';
import Reviews from '../screens/Reviews';
import Failed from '../screens/Failed';
import GreatJob from '../screens/GreatJob';

const StackNavigator = createStackNavigator();
export const Stack = () => {
    return(
        <StackNavigator.Navigator>
            <StackNavigator.Screen name="Entry" component={Entry} options={EntryScreeOptions}/>
            <StackNavigator.Screen name="Categories" component={Categories} options={{
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
                            />
                        </View>
                    )
                }
            }}/>
            <StackNavigator.Screen name="Game" component={Game} />
            <StackNavigator.Screen name="Reviews" component={Reviews}/>
            <StackNavigator.Screen name="GreatJob" component={GreatJob} options={{
                header:() => {
                    return <View style={{
                        height:80,
                        backgroundColor:Colors.green,
                        flexDirection:"row-reverse",
                        alignItems:"center",
                        padding:25
                    }}>
                        <Image
                            source={require('../../assets/logo.png')}
                            style={{ width:40, height:40 }}
                        />
                    </View>
                },
                presentation:"modal"
            }}/>
            <StackNavigator.Screen name="Failed" component={Failed} options={{
                header:() => {
                    return <View style={{
                        height:80,
                        backgroundColor:Colors.red,
                        flexDirection:"row-reverse",
                        alignItems:"center",
                        padding:25
                    }}>
                        <Image
                            source={require('../../assets/logo.png')}
                            style={{ width:40, height:40 }}
                        />
                    </View>
                },
                presentation:"modal"
            }}/>
        </StackNavigator.Navigator>
    )
}