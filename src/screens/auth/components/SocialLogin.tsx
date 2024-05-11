import React from 'react';
import { View, Text } from 'react-native';
import { ButtonComponent, SectionComponent, TextComponent } from '../../../components';
import { appColors } from '../../../constants/appColors';
import { fontFamilies } from '../../../constants/fontFamilies';
import { Google } from 'iconsax-react-native';

const SocialLogin = () => {
  return (
    <SectionComponent>
        <TextComponent 
        text='OR' 
        color={appColors.gray4} 
        size={16} 
        font={fontFamilies.medium}/>
        <ButtonComponent 
        text='Google' 
        icon = {<Google size={24} color={appColors.primary}
        iconFlex ="left"
        />}/>
    </SectionComponent>
  );
};

export default SocialLogin;
