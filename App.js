
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from "@expo/vector-icons/Ionicons";
import AnimationScreen from './AnimationScreen';
import SignUp from './SignUp';
import Home from './Home';
import Fruits from './Fruits'; 
import Vegetables from './Vegetables'; // For Vegetables
import LogIn from './LogIn'; // For Grains
import Dairy from './Dairy'; // For Dairy
import ListScreen from './ListScreen';
import Meat from './Meat';
import ProfileScreen from './ProfileScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Fruits" component={Fruits} />
      <Stack.Screen name="Vegetables" component={Vegetables} />
      <Stack.Screen name="Meat" component={Meat} />
      <Stack.Screen name="Dairy" component={Dairy} />
    </Stack.Navigator>
  );
}

function HomeTabs() {
  return (
    
    <Tab.Navigator
     screenOptions={({ route }) => ({
                  tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
        
                    if (route.name === 'Home') {
                      iconName = focused ? 'home' : 'home-outline';
                        
                    }
                   else if (route.name === 'ProfileScreen') {
                      iconName = focused  ? 'person' : 'person-outline';}
                        else if (route.name === 'ListScreen') {
                      
                      iconName = focused ? 'cart' : 'cart-outline';}
                    
        
                    
                    return <Ionicons name={iconName} size={size} color={color} />;
                  },
                  tabBarActiveTintColor: 'tomato',
                  tabBarInactiveTintColor: 'gray',
                })}>
      <Tab.Screen name="HomeStack" component={HomeStack} options={{ headerShown: false, title: 'Home' }} />
      <Tab.Screen name="List" component={ListScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
   
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AnimationScreen">
        <Stack.Screen
          name="AnimationScreen"
          component={AnimationScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="LogIn"
          component={LogIn}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomeTabs"
          component={HomeTabs}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}






















