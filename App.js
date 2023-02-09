import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Chat from "./screens/Chat";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
const Stack = createStackNavigator();

function ChatStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator >
  );
}

function RootNavigator() {
  return (
    <NavigationContainer  >
      <ChatStack />
    </NavigationContainer >
  );
}
export default function App() {

  return <RootNavigator />;
}
