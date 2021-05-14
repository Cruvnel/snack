import React from 'react';
import { View, Text, Platform, KeyboardAvoidingView } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

import globalStyles from '../../../assets/css/global';
import styles from './schedulinguserStyles';

function SchedulingUserScreen({ navigation }) {
  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS == "ios" ? "padding" : "height"}
    >
        <View style={styles.schedulingFormContainer}>
          <View style={[styles.titleBar, {marginTop: -60}]}>
            <TouchableOpacity
              onPress={() => navigation.navigate('TelaPrincipal')}
            >
              <Ionicons name="chevron-back" size={29} color="#52575D"></Ionicons>
            </TouchableOpacity>

            <Text style={styles.schedulingHeader}>Agendamento</Text>
            
          </View>

          <Text style={styles.schedulingDescription}>Aqui você poderá dizer o serviço que está procurando e para quando precisa.</Text>

        
          <View style={[styles.schedulingForm, {marginTop: 30}]}>
            <Text style={styles.schedulingLabel}>O que você precisa?</Text>
            <TextInput style={[styles.schedulingInput, {marginBottom: 30}]} placeholder='Descreva o serviço' autoCapitalize={'sentences'} keyboardType={'default'} />

            <Text style={styles.schedulingLabel}>Em qual área?</Text>
            <TextInput style={[styles.schedulingInput, {marginBottom: 30}]} placeholder='Escolha a área' autoCapitalize={'sentences'} keyboardType={'default'} />

            <Text style={styles.schedulingLabel}>Para quando?</Text>
            <TextInput style={styles.schedulingInput} placeholder='Selecione uma data' autoCapitalize={'none'} keyboardType={'default'} />
            
            <TouchableOpacity
              style={[styles.schedulingButton, {marginTop: 60}]}
              onPress={() => navigation.navigate('TelaPrincipal')}
            >
              <Text style={styles.schedulingButtonText}>Finalizar agendamento</Text>
            </TouchableOpacity>
          </View>
        </View>
    </KeyboardAvoidingView>  
  );
}

export default SchedulingUserScreen;