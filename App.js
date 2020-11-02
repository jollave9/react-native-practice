import React from 'react';
import { StyleSheet, Text, View, StatusBar, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './screens/Home'
import Classrooms from './screens/Classrooms'


const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Classrooms" component={Classrooms} />

      </Stack.Navigator>
    </NavigationContainer>

  );
}

