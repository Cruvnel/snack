import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator  } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import {
  LoginScreen,
  SignUpRedirectScreen,
  SignUpUserScreen,
  SignUpWorkerScreen,
  ForgotPasswordScreen,
  MainPageScreen,
  ContactUsScreen,
  ProfileScreen,
  SchedulingUserScreen,
  RatingScreen,
  AllServicesScreen,
  SettingsScreen,
  HelpScreen
} from './src/pages/index';

export default function App() {

  const Stack = createStackNavigator();

  // const Drawer = createDrawerNavigator(); --Continuar daqui

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="TelaDeLogin" component={LoginScreen} />
        <Stack.Screen name="RedirecionarCadastro" component={SignUpRedirectScreen} />
        <Stack.Screen name="CadastroConsumidor" component={SignUpUserScreen} />
        <Stack.Screen name="CadastroPrestador" component={SignUpWorkerScreen} />
        <Stack.Screen name="RecuperarSenha" component={ForgotPasswordScreen} />
        <Stack.Screen name="TelaPrincipal" component={MainPageScreen} />
        <Stack.Screen name="FaleConosco" component={ContactUsScreen} />
        <Stack.Screen name="TelaPerfil" component={ProfileScreen} /> 
        <Stack.Screen name="AgendamentoConsumidor" component={SchedulingUserScreen} />
        <Stack.Screen name="AvaliacaoServico" component={RatingScreen} />
        <Stack.Screen name="TodosServicos" component={AllServicesScreen} />
        <Stack.Screen name="Configuracoes" component={SettingsScreen} />
        <Stack.Screen name="Ajuda" component={HelpScreen} />
      </Stack.Navigator>      
    </NavigationContainer>        
  );
}