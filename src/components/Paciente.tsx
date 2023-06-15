import {View, Text, StyleSheet, Pressable} from 'react-native';
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
    <View style={styles.contenedor}>
      <Text style={styles.label}>Paciente:</Text>
      <Text style={styles.texto}>{paciente}</Text>
      <Text style={styles.fecha}>{formatearFecha(fecha)}</Text>
      <View style={styles.contenedorBotones}>
        <Pressable style={[styles.btn, styles.btnEditar]}>
          <Text style={styles.btnTexto}>Editar</Text>
        </Pressable>
        <Pressable style={[styles.btn, styles.btnEliminar]}>
          <Text style={styles.btnTexto}>Eliminar</Text>
        </Pressable>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#FFF',
    padding: 20,
    borderBottomColor: '#94a3b8',
    borderBottomWidth: 1,
  },
  label: {
    color: '#374151',
    textTransform: 'uppercase',
    fontWeight: '700',
  },
  texto: {
    color: '#6D28D9',
    fontSize: 20,
    fontWeight: '700',
  },
  fecha: {
    color: '#374151',
  },
  contenedorBotones: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  btn: {
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 5,
    minWidth: 100,
  },
  btnEditar: {
    backgroundColor: '#f59e0b',
  },
  btnEliminar: {
    backgroundColor: '#EF4444',
  },
  btnTexto: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 12,
    fontWeight: '700',
    color: '#fff',
  },
});

export default Paciente;
