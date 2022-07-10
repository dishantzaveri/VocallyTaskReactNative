import React, { useEffect } from 'react';
import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './src/screens/Splash';
import BottomTabs from './src/screens/bottomtabs';
import Location from './src/screens/location';
import AddProject from './src/screens/AddProject';
import Location1 from './src/screens/location1';
import Location2 from './src/screens/location2';
import Location3 from './src/screens/location3';
import Search from './src/screens/search';

const Stack = createStackNavigator();
function App() {
  useEffect(() => {console.disableYellowBox = true;
    

  })
  return (
    <NavigationContainer theme={DarkTheme}>
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
          name="location"
          component={Location}
          options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen
          name="location1"
          component={Location1}
          options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen
          name="location2"
          component={Location2}
          options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen
          name="location3"
          component={Location3}
          options={{ headerShown: false }}></Stack.Screen>

        <Stack.Screen
          name="search"
          component={Search}
          options={{ headerShown: false }}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;