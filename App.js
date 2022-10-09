import React from "react";
import { useState } from "react";
import { Text, View } from "react-native";
import { Checkbox, Button } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import "react-native-gesture-handler";

import Profile from "./pages/Profile";
import Registration from "./pages/Registration";
import Clients from "./pages/Clients";

const Stack = createStackNavigator();

function Router() {
  return (
    <Stack.Navigator
      initialRouteName="Clients"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="Profile"
        options={{ title: "Профиль" }}
        component={Profile}
      />
      <Stack.Screen
        name="Registration"
        options={{ title: "Регистрация" }}
        component={Registration}
      />
      <Stack.Screen
        name="Clients"
        options={{ title: "Клиент" }}
        component={Clients}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
}
