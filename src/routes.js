import React from 'react'
import { Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import logo from './assets/instagram.png'
import Feed from './pages/index'

const stack = createStackNavigator();

export default function Routes(){
    return(
        <NavigationContainer>
            <stack.Navigator headerMode= 'none'>
                <stack.Screen 
                    name='feed' 
                    component={Feed} />
            </stack.Navigator>
        </NavigationContainer>
    )
}