/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DataScreen from './views/DataScreen';
import HomeScreen from './views/HomeScreen';
import CalcBills from './views/CalcBills';
import ResultScreen from './views/ResultScreen';


const Stack = createStackNavigator();

const App= () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home"
        screenOptions={screenOptions}>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
                title: 'App Minhas Contas'}}
          />
          <Stack.Screen
            name="CalcBills"
            component={CalcBills}
            options={{
            title: 'Cálculo das contas'}}
          />          
          <Stack.Screen
            name="Data"
            component={DataScreen}
            options={{
            title: 'Cálculo das contas'}}
          />
          <Stack.Screen
            name="Result"
            component={ResultScreen}
            options={{
            title: 'Cálculo das contas'}}
          />

        </Stack.Navigator>
    </NavigationContainer>
  )
}

const screenOptions = {
  headerStyle: {
    backgroundColor: '#2DABFF',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  }
}


export default App;
