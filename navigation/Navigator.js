import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from '../screens/SplashScreen';
import SongListScreen from '../screens/SongListScreen';
import SongDetailScreen from '../screens/SongDetailDetailScreen';

const stack = createStackNavigator();

const Navigator = () => {
    return (
        <stack.Navigator
            screenOptions={{ headerShown: false }}
        >
            <stack.Screen
                name="Splash_Screen"
                component={SplashScreen}
            />
            <stack.Screen
                name="Song_List"
                component={SongListScreen}
            />
            <stack.Screen
                name="Song_Detail"
                component={SongDetailScreen}
            />
        </stack.Navigator>
    );
};

export default Navigator;
