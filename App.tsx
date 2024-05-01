import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Home from "./screens/home";
import Quiz from "./screens/quiz";
import Result from "./screens/results";
import { NavigationContainer } from "@react-navigation/native";
import MyStack from "./navigation";
const App = () =>{
  return(
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
  )
}
export default App

const styles = StyleSheet.create({
  container:{
    paddingTop: 40 ,
    paddingHorizontal:16, 
  },
})
