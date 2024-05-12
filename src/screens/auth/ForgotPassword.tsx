import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { ButtonComponent, ContainerComponent, SectionComponent, SpaceComponent, TextComponent } from '../../components';
import InputComponent from '../../components/InputComponets';
import { ArrowRight, Sms } from 'iconsax-react-native';
import { appColors } from '../../constants/appColors';

const ForgotPassword = () => {
    const [email,setEmail]= useState('')
    return (
        <ContainerComponent back isImageBackground>
            <SectionComponent>
                <TextComponent text='Resset Password ' title></TextComponent>
                <TextComponent text='Please enter your email address to request a password reset'></TextComponent>
                <SpaceComponent height={26}/>
                <InputComponent value={email} onChange={val => setEmail(val)}
                    placeholder='abc@gmail.com'
                    allowClear
                    affix={<Sms size={18} color={appColors.gray} />} />
            </SectionComponent>
            <SectionComponent>
                <ButtonComponent text='Send' type='primary' icon={<ArrowRight size={20} color='white' />} />
            </SectionComponent>
        </ContainerComponent>
    );
};

export default ForgotPassword;
