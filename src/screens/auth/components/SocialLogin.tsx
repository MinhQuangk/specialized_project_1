import React from 'react';
import { View, Text } from 'react-native';
import { ButtonComponent, SectionComponent, SpaceComponent, TextComponent } from '../../../components';
import { appColors } from '../../../constants/appColors';
import { fontFamilies } from '../../../constants/fontFamilies';
import { FaceBook,Google } from '../../../assets/svgs';

const SocialLogin = () => {
  return (
    <SectionComponent >
        <TextComponent 
        styles={{textAlign:'center'}}
        text='OR'
        color={appColors.gray4}
        size={16}
        font={fontFamilies.medium}
        />
        <SpaceComponent height={16}/>
        <ButtonComponent
        type='primary'
        color={appColors.white}
        textColor={appColors.text}
        text='Login with Google'
        icon = {<Google/>}
        iconFlex='left'
        />
        <ButtonComponent
        type='primary'
        color={appColors.white}
        textColor={appColors.text}
        text='Login with FaceBook'
        icon = {<FaceBook/>}
        iconFlex='left'
        />
    </SectionComponent>
  );
};

export default SocialLogin;
