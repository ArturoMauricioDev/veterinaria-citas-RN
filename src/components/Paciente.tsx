import {View, Text} from 'react-native';
import React from 'react';
import {paciente} from './Formulario';

interface PacienteProps {
  item: paciente;
}

const Paciente = ({item}: PacienteProps) => {
  const {paciente, fecha} = item;

  const formatearFecha = (fecha: Date) => {
    const nuevaFecha = new Date(fecha);
    const opciones: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return nuevaFecha.toLocaleDateString('es-Es', opciones);
  };

  return (
    <View>
      <Text>{paciente}</Text>
      <Text>{formatearFecha(fecha)}</Text>
    </View>
  );
};

export default Paciente;
