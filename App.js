import React from 'react';
import {useState} from 'react';
import { Text, View } from 'react-native';
import { Checkbox, Button } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import 'react-native-gesture-handler';

import Profile from './pages/Profile';
import Registration from './pages/Registration';
import Clients from './pages/Clients';

function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
}

function RegistrationScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Go to Notifications"
        onPress={() => navigation.navigate('Notifications')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function ClientsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Settings')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}


const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Clients" screenOptions={{headerShown:false}} >
      <Stack.Screen name="Profile" options={{title: "Профиль"}} component={ProfileScreen} />
      <Stack.Screen name="Registration" options={{title: "Регистрация"}} component={RegistrationScreen} />
      <Stack.Screen name="Clients" options={{title: "Клиент"}} component={ClientsScreen} />
      
    </Stack.Navigator>
  );
}

export default function App() {  

  return (   
   <NavigationContainer>
      <Profile />
    </NavigationContainer>
  );
}


