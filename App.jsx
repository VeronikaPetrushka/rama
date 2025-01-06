import React, { useState } from 'react';
import { enableScreens } from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { MusicProvider } from './src/constants/music.js';
import MusicPlayer from './src/components/MusicPlayer';

import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen.jsx';

import Welcome from './src/components/Welcome';

enableScreens();

const Stack = createStackNavigator();

const App = () => {
    const [modalVisible, setModalVisible] = useState(true);
  
    return (
        <MusicProvider>
            <MusicPlayer />
            <NavigationContainer>
                <Welcome visible={modalVisible} onClose={() => setModalVisible(false)} />
                <Stack.Navigator initialRouteName="HomeScreen">
                    <Stack.Screen 
                        name="HomeScreen" 
                        component={HomeScreen} 
                        options={{ headerShown: false }} 
                    />
                    <Stack.Screen 
                        name="DetailsScreen" 
                        component={DetailsScreen} 
                        options={{ headerShown: false }} 
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </MusicProvider>
    );
};

export default App;
