import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './src/screens/Splash';
import BottomTabs from './src/screens/bottomtabs';
import Location from './src/screens/location';
import AddProject from './src/screens/AddProject';

const Stack = createStackNavigator();
function App() {
  useEffect(() => {
    console.disableYellowBox = true
  })
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" independent={true}>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen
          name="bottomtabs"
          component={BottomTabs}
          options={{ headerShown: false }}></Stack.Screen>
      <Stack.Screen
          name="AddProject"
          component={AddProject}
          options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen
          name="Location"
          component={Location}
          options={{ headerShown: false }}></Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
