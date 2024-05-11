import React, { useEffect, useState } from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import { SplashScreen } from "./src/screens";
import MainNavigator from "./src/navigation/MainNavigator";
import AuthNavigator from "./src/navigation/AuthNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";


const App = () => {

  const [isShowSplash, SetIsShowSpalsh] = useState(true);
  const [accessToken, setAccessToken] = useState('');
  const { getItem, setItem } = useAsyncStorage('assetToken')
  useEffect(() => {
    const timeout = setTimeout(() => { SetIsShowSpalsh(false) }, 5000)

    return () => clearTimeout(timeout)
  }, [])
  useEffect(() => {
    CheckLogin()
  }, [])
  const CheckLogin = async () => {
    const token = await getItem()
    
    token && setAccessToken(token)
  }

  return (
    <>
      {
        isShowSplash ? (<SplashScreen />) : 
        (<NavigationContainer>{
           <AuthNavigator/>
        }
        </NavigationContainer>)
      }
    </>
  );
}
export default App



