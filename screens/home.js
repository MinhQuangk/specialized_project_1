import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Quiz from "./quiz";
import Title from "../components/title";

const Home = ({ navigation }) => { // Destructure the navigation prop here
  return (
    <View style={styles.container}>
      <Title TitleText={'Quizzler'}></Title>
      <View style={styles.bannerContainer}>
        <Image
          source={{ uri: 'https://cdni.iconscout.com/illustration/premium/thumb/online-quiz-5718736-4779390.png' }}
          style={styles.banner}
          resizeMode="contain"
        />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("Quiz")} style = {styles.button}>
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Home;

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

});
