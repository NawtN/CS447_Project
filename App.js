import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from './SignUp';
import LogIn from './LogIn';
import AnimationScreen from './AnimationScreen';
import Home from './Home';



const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="AnimationScreen"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="AnimationScreen" component={AnimationScreen} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="LogIn" component={LogIn} />

       
      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  // container: {
  //   // flex: 1,
  //   // backgroundColor: "#fff",
  //   padding: 10,
  //   flexDirection: "row",
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
});
