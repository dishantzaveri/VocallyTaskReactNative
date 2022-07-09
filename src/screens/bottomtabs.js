import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Location from './location';
import Location2 from './location2';
import Location1 from './location1';
import Location3 from './location3';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator


      independent={true}
      screenOptions={{
        tabBarActiveBackgroundColor: "#FFFFFF",
        tabBarInactiveBackgroundColor: "#FFFFFF",

      }}
    >
      <Tab.Screen
        name="location"
        component={Location}
        options={{
          headerShown: false,
          tabBarLabel: 'Default',
          tabBarColor: 'blue',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-location" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="location1"
        options={{
          headerShown: false,
          // title:'Project Details'
          tabBarLabel: 'Black',
          tabBarColor: '#1f65ff',

          tabBarIcon: ({ color }) => (
            <Icon name="ios-location" color={color} size={26} />
          ),
        }}
        component={Location1}
      />
      <Tab.Screen
        name="location2"
        options={{
          headerShown: false,
          tabBarLabel: "Aubergine",
          tabBarColor: '#000000',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-location" color={color} size={26} />
          ),
        }}
        component={Location2}
      />
      <Tab.Screen
        name="location3"
        component={Location3}
        options={{
          headerShown: false,
          tabBarLabel: "Retro",
          tabBarColor: '#1f65ff',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-location" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default BottomTabs;
