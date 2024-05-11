import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import { View, Text, Button, Image, Switch } from 'react-native';
import { globalStyles } from '../../styles/globalStyles';
import InputComponent from '../../components/InputComponets';
import { Lock, Sms } from 'iconsax-react-native';
import { appColors } from '../../constants/appColors';
import ContainerComponent from '../../components/ContainerComponent';
import SectionComponent from '../../components/SectionComponent';
import { ButtonComponent, RowComponent, SpaceComponent, TextComponent } from '../../components';
import { fontFamilies } from '../../constants/fontFamilies';
import SocialLogin from './components/SocialLogin';


const LoginSreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassWord] = useState('')
  const [isRemember, setIsRemember] = useState(true)
  return (
    <ContainerComponent isImageBackground isScroll>
      <SectionComponent styles={{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 55,
      }} >
        <Image source={require('../../assets/images/Logo1.png')}
          style={
            {
              width: 160,
              height: 184,
              marginBottom: 10
            }

          }
        />
      </SectionComponent>
      <SectionComponent>
        <TextComponent size={24} font={fontFamilies.medium} text='Sign in' />
        <SpaceComponent height={21} />
        <InputComponent value={email} onChange={val => setEmail(val)}
          placeholder='Email'
          allowClear
          affix={<Sms size={22} color={appColors.gray} />} />
        <InputComponent value={password} onChange={val => setPassWord(val)}
          placeholder='Password'
          isPassword
          allowClear
          affix={<Lock size={22} color={appColors.gray} />} />
        <RowComponent justify='space-between'>
          <RowComponent onPress={() => setIsRemember(!isRemember)}>
            <Switch
              trackColor={{ true: appColors.primary }}
              thumbColor={appColors.white}
              value={isRemember}
              onChange={() => setIsRemember(!isRemember)}
            />
            <TextComponent text='Remember me' />
          </RowComponent>
          <ButtonComponent text='Forgot password?'
            onPress={() => { }}
            type='text'
          />
        </RowComponent>
      </SectionComponent>
      <SpaceComponent height={16}/>
      <SectionComponent>
        <ButtonComponent text='LOGIN ' type='primary'  />
      </SectionComponent>
          <SocialLogin/>
      <SectionComponent>
        <RowComponent justify='center'>
            <TextComponent text="Dont't have an account ?"></TextComponent>
            <ButtonComponent type='link' text='SignUp'/>
        </RowComponent>
      </SectionComponent>
    </ContainerComponent>

  );
};

export default LoginSreen;