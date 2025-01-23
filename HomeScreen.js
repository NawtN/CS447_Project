import * as React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from './Home';
import Fruits from './Fruits';
import Vegetables from './Vegetables';
import Meat from './Meat';
import Dairy from './Dairy';
import ListScreen from './ListScreen';

const Stack = createNativeStackNavigator();

export default function HomeScreen() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Fruits" component={Fruits} />
      <Stack.Screen name="Vegetables" component={Vegetables} />
      <Stack.Screen name="Meat" component={Meat} />
      <Stack.Screen name="Dairy" component={Dairy} />
      <Stack.Screen name="List" component={ListScreen} />
    </Stack.Navigator>
  );
}