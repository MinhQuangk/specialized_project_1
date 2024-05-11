import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = () => {
  return (
    <View>
      <Text>Home</Text>
      <Button title ='Logout' onPress={async() => await AsyncStorage.clear }></Button>

    </View>
  );
};

export default HomeScreen;