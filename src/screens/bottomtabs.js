import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Location from './location';

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
        name="Location"
        component={Location}
        options={{
          headerShown: false,
          tabBarLabel: 'Locations',
          tabBarColor: 'blue',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Dashboard"
        options={{
          headerShown: false,
          // title:'Project Details'
          tabBarLabel: 'Dashboard',
          tabBarColor: '#1f65ff',

          tabBarIcon: ({ color }) => (
            <Icon name="md-desktop-outline" color={color} size={26} />
          ),
        }}
        component={Location}
      />
      <Tab.Screen
        name="Violations"
        options={{
          headerShown: false,
          tabBarLabel: 'Violations',
          tabBarColor: '#000000',
          tabBarIcon: ({ color }) => (
            <Icon name="analytics-sharp" color={color} size={26} />
          ),
        }}
        component={Location}
      />
      <Tab.Screen
        name="Contractorlist"
        component={Location}
        options={{
          headerShown: false,
          tabBarLabel: 'Contractors',
          tabBarColor: '#1f65ff',
          tabBarIcon: ({ color }) => (
            <Icon name="person-sharp" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default BottomTabs;
