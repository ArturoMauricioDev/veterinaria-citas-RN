import {View, Text} from 'react-native';
import React from 'react';
import {paciente} from './Formulario';

interface PacienteProps {
  item: paciente;
}

const Paciente = ({item}: PacienteProps) => {
  const {paciente, fecha} = item;
  return (
    <View>
      <Text>{paciente}</Text>
    </View>
  );
};

export default Paciente;
