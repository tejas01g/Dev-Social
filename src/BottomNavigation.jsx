import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import HomeScreen from "./HomeScreen";
import ExploreScreen from "./ExploreScreen";
import AddPostScreen from "./AddPostScreen";
import ProfileScreen from "./ProfileScreen"

const Tab = createBottomTabNavigator();

export default function BottomNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#fff",
          height: 60,
          paddingBottom: 6,
        },

        tabBarIcon: ({ color }) => {
          let icon;

          if (route.name === "Home") icon = "home-outline";
          if (route.name === "Explore") icon = "search-outline";
          if (route.name === "AddPost") icon = "add-circle-outline";
          if (route.name === "Profile") icon = "person-outline";

          return <Ionicons name={icon} size={26} color={color} />;
        },

        tabBarActiveTintColor: "#0EA5E9",
        tabBarInactiveTintColor: "#777",
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Explore" component={ExploreScreen} />
      <Tab.Screen name="AddPost" component={AddPostScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
