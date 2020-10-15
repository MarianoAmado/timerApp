import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Setup from './screens/Setup';
import CountDown from './screens/Countdown';
import TimeUp from './screens/TimeUp';

const App = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Setup"
        screenOptions={{animationEnabled: false}}>
        <Stack.Screen name="CountDown" component={CountDown} />
        <Stack.Screen name="Setup" component={Setup} />
        <Stack.Screen name="TimeUp" component={TimeUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
