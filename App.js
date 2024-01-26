
import React, { Component, useState } from "react";
import 'react-native-gesture-handler';
import  Icon  from "react-native-vector-icons/FontAwesome";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import login from "./screens/login";
import Principal from "./screens/Principal";
import Cadastro from "./screens/Cadastro";

//REDUX



import { Provider } from "react-redux";
import { createStore } from "redux";
import Reducers from "./screens/Reducers";


let store = createStore(Reducers);

//REDUX
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name ="login" component={login} />
      <Stack.Screen name = "Principal" component={Principal} />
      <Stack.Screen name = "Cadastro" component={Cadastro}/>
      <Stack.Screen name = "Cadastrarsse" component={Principal}/>
    </Stack.Navigator>

  );
}



    export default class App extends Component{
      render(){
        return(
          <NavigationContainer>
          <MyStack />
          <Provider store={store}>
          </Provider>
          </NavigationContainer>
        )
      }
    }