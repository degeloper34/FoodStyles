import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import * as React from "react";
import {RootStackParamList} from "../../types";
import GuestNavigator from "./StackNavigators/GuestNavigator";
import HomeNavigator from "./StackNavigators/HomeNavigator";

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="GuestNavigator"
        component={GuestNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HomeNavigator"
        component={HomeNavigator}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
