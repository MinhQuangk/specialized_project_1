import React from "react";
import { StyleSheet, Text, View } from "react-native";
const Title = ({TitleText}) =>{
  return(
    <View style={styles.container}>
      <Text style={styles.title}>{TitleText}</Text>
    </View>
  )
}

export default Title

const styles = StyleSheet.create({
  title:{
    fontSize: 36 ,
    fontWeight:'600'
  },
  container:{
    paddingHorizontal:16,
    justifyContent:'center',
    alignItems: 'center'
  }

})