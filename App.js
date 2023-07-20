import React, { useState, useEffect, useCallback } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import * as SplashScreen from 'expo-splash-screen';
import { Stack as Root } from './src/navigation';
import { NavigationContainer } from '@react-navigation/native'; 
import Reducer from './store/reducers';

const loadFontsFromAssets = () => {
  return Font.loadAsync({
    'Bold' : require('./assets/Fonts/Bold.ttf'),
    'Black' : require('./assets/Fonts/Black.ttf'),
    'ExtraBold' : require('./assets/Fonts/ExtraBold.ttf'),
    'ExtraLight' : require('./assets/Fonts/ExtraLight.ttf'),
    'Light' : require('./assets/Fonts/Light.ttf'),
    'Medium' : require('./assets/Fonts/Medium.ttf'),
    'Regular' : require('./assets/Fonts/Regular.ttf'),
    'SemiBold' : require('./assets/Fonts/SemiBold.ttf'),
  });
}

const rootReducer = combineReducers({
    allCategories: Reducer
}) 

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await loadFontsFromAssets();
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }
    
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Root/>
      </NavigationContainer>
    </Provider>
  );
}


