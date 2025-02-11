import React, { useState } from 'react';
import { enableScreens } from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen.jsx';
import MapScreen from './src/screens/MapScreen.jsx';
import PhotoScreen from './src/screens/PhotoScreen.jsx';
import AchievesScreen from './src/screens/AchievesScreen.jsx';
import BookScreen from './src/screens/BookScreen.jsx';
import MoreScreen from './src/screens/MoreScreen.jsx';
import QuizScreen from './src/screens/QuizScreen.jsx';

import Welcome from './src/components/Welcome';

enableScreens();

const Stack = createStackNavigator();

const App = () => {
    const [modalVisible, setModalVisible] = useState(true);
  
    return (
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
                <Stack.Screen 
                    name="MapScreen" 
                    component={MapScreen} 
                    options={{ headerShown: false }} 
                />
                <Stack.Screen 
                    name="PhotoScreen" 
                    component={PhotoScreen} 
                    options={{ headerShown: false }} 
                />
                <Stack.Screen 
                    name="AchievesScreen" 
                    component={AchievesScreen} 
                    options={{ headerShown: false }} 
                />
                <Stack.Screen 
                    name="BookScreen" 
                    component={BookScreen} 
                    options={{ headerShown: false }} 
                />
                <Stack.Screen 
                    name="MoreScreen" 
                    component={MoreScreen} 
                    options={{ headerShown: false }} 
                />
                <Stack.Screen 
                    name="QuizScreen" 
                    component={QuizScreen} 
                    options={{ headerShown: false }} 
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
