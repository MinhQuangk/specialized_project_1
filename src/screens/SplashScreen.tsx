import React from 'react';
import { View, Text, ImageBackground, ActivityIndicator } from 'react-native';
import { Image } from 'react-native';
import { appInfo } from '../constants/appInfos';
import { SpaceComponent } from '../assets/components';
import { appColors } from '../constants/appColors';

const SplashScreen = () => {
  return (
    <ImageBackground source={require('../assets/images/SplashArt.png')}
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}
      imageStyle={{
        flex: 1
      }}
    >
      <Image source={require('../assets/images/Logo1.png')}
        style={{
            width:appInfo.sizes.WIDTH*0.8,
            resizeMode: 'contain'
        }}
      />
      <SpaceComponent height={20}/>
      <ActivityIndicator color={appColors.white} size={30}/>
    </ImageBackground>
  );
};

export default SplashScreen;