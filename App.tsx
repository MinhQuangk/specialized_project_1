import React, { useEffect, useState } from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import { SplashScreen } from "./src/screens";
import MainNavigator from "./src/navigation/MainNavigator";
import AuthNavigator from "./src/navigation/AuthNavigator";
import { NavigationContainer } from "@react-navigation/native";


const App = () =>{

  const [isShowSplash,SetIsShowSpalsh]=useState(true);
  useEffect(()=>{
    const timeout = setTimeout(()=>{SetIsShowSpalsh(false)},5000)

    return ()=> clearTimeout(timeout)
  },[])
  return (
   <>
   {
    isShowSplash ? (<SplashScreen/>) : (<NavigationContainer><AuthNavigator/></NavigationContainer>)
   }
   </>
  );
}
export default App



