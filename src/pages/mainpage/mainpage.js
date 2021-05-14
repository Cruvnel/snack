import React from 'react';
import { View, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import globalStyles from '../../../assets/css/global';
import styles from './mainpageStyles';

function MainPageScreen({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <Text style={{marginBottom: 20}}>
        Tela da Main Page
      </Text>

      <RectButton
        style={{marginBottom: 10}}
        onPress={() => navigation.navigate('TelaPerfil')}
      >
        <Text>| Perfil |</Text>
      </RectButton>

      <RectButton
        style={{marginBottom: 10}}
        onPress={() => navigation.navigate('TodosServicos')}
      >
        <Text>| Serviços agendados |</Text>
      </RectButton>

      <RectButton
        style={{marginBottom: 10}}
        onPress={() => navigation.navigate('AgendamentoConsumidor')}
      >
        <Text>| Agendamento: Consumidor |</Text>
      </RectButton>

      <RectButton
        style={{marginBottom: 10}}
        onPress={() => navigation.navigate('AvaliacaoServico')}
      >
        <Text>| Avaliação |</Text>
      </RectButton>

      <RectButton
        onPress={() => navigation.navigate('Configuracoes')}
      >
        <Text>| Configurações |</Text>
      </RectButton>
    </View>
  );
}

export default MainPageScreen;