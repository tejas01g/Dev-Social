import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "./src/LoginScreen";
import SignupScreen from "./src/SignupScreen";
import BottomNavigation from "./src/BottomNavigation";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} />

        {/* ⭐ After login → show bottom navigation */}
        <Stack.Screen name="BottomNavigation" component={BottomNavigation} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
