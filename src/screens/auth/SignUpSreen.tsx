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

const initValue = {
  usename: '',
  email: '',
  password: '',
  confirmPassword: '',
}

const SignUpSreen = ({ navigation }: any) => {
  const [values, setValues] = useState(initValue)
  const handleChangeValue = (key: string, value: string) => {
    const data: any = { ...values }
    data[`${key}`] = value;
    setValues(data)
  }

  return (
    <ContainerComponent isImageBackground isScroll title='' back>
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
        <InputComponent value={values.usename} onChange={val => handleChangeValue('username', val)}
          placeholder='Username'
          allowClear
          affix={<Sms size={22} color={appColors.gray} />} />
        <InputComponent value={values.email} onChange={val => handleChangeValue('email', val)}
          placeholder='Email  '
          isPassword
          allowClear
          affix={<Lock size={22} color={appColors.gray} />} />
        <InputComponent value={values.email} onChange={val => handleChangeValue('email', val)}
          placeholder='Email  '
          isPassword
          allowClear
          affix={<Lock size={22} color={appColors.gray} />} />
        <InputComponent value={values.email} onChange={val => handleChangeValue('email', val)}
          placeholder='Email  '
          isPassword
          allowClear
          affix={<Lock size={22} color={appColors.gray} />} />
      </SectionComponent>
      <SpaceComponent height={16} />
      <SectionComponent>
        <ButtonComponent text='SIGN UP ' type='primary' />
      </SectionComponent>
      <SocialLogin />
      <SectionComponent>
        <RowComponent justify='center'>
          <TextComponent text="Already have account ?"></TextComponent>
          <ButtonComponent type='link' text='SignIn' onPress={() => navigation.navigate("LoginScreen")} />
        </RowComponent>
      </SectionComponent>
    </ContainerComponent>

  );
};

export default SignUpSreen;