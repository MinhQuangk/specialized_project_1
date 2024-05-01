import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Home from "./home";
import Title from "../components/title";
const Result = ({navigation,route}) =>{
  const {score}=route.params
  const resultBanner=score>8 ? "https://cdni.iconscout.com/illustration/premium/thumb/victory-3162001-2639367.png?f=webp":"https://cdni.iconscout.com/illustration/premium/thumb/concept-about-business-failure-1862195-1580189.png?f=webp"
  const textencourage = score>8? "good job ": "Don't worry, keep going!"
  return(
    <View style={styles.container}>
    <Title TitleText={'RESULTS'}></Title>
    <Text style={styles.ScoreValue}>{score}</Text>
    <Text style={styles.encourage}>{textencourage}</Text>
    <View style={styles.bannerContainer}>
      <Image
        source={{ uri: resultBanner  }}
        style={styles.banner}
        resizeMode="contain"
      />
    </View>
    <TouchableOpacity onPress={() => navigation.navigate("Home")} style = {styles.button}>
      <Text style={styles.buttonText}>Back to home</Text>
    </TouchableOpacity>
  </View>
  )
}

export default Result

const styles = StyleSheet.create({
  banner: {
    height: 300,
    width: 300,
  },
  bannerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex : 1
  },
  container:{
    padding : 40 ,
    paddingHorizontal: 20,
    height: '100%'
  },
  button:{
    width: '100%',
    backgroundColor:'#1A759F',
    padding : 16 ,
    borderRadius : 16 ,
    alignItems: 'center',
    marginBottom : 30,
  },
  buttonText:{
    fontSize: 24 ,
    fontWeight: '600',
    color : 'white'
  },
  ScoreValue:{
    fontSize: 24,
    fontWeight : '800',
    textAlign : 'center'
  },
  encourage:{
    marginTop: 10,
    fontSize: 28,
    fontWeight : '800',
    textAlign : 'center'
  }
})