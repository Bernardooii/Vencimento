import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native"
import { createStackNavigator } from '@react-navigation/stack';

import EscolhaTela from "./screens/escolhatela";
import Alimentos from "./screens/alimentos";
import EdicaoCarne from "./screens/carne";
import EdicaoUva from "./screens/uva";
import EdicaoMilho from "./screens/milho";
import Menu from "./screens/menu";
import Cadastro from "./screens/cadastro";

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "Menu" screenOptions = {{headerShown:false}}>
        <Stack.Screen name="EscolhaTela" component={EscolhaTela}/>
        <Stack.Screen name="Alimentos" component={Alimentos}/>
        <Stack.Screen name="EdicaoUva" component={EdicaoUva}/>
        <Stack.Screen name="EdicaoCarne" component={EdicaoCarne}/>
        <Stack.Screen name="EdicaoMilho" component={EdicaoMilho}/>
        <Stack.Screen name="Menu" component={Menu}/>
        <Stack.Screen name="Cadastro" component={Cadastro}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
