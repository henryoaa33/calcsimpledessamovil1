import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Botoncalculadora = ({ valor, onPress }) => {
  return (
    <TouchableOpacity style={styles.boton} onPress={() => onPress(valor)}>
      <Text style={styles.textoBoton}>{valor}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  boton: {
    width: '25%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  textoBoton: {
    fontSize: 24,
  },
});

export default Botoncalculadora;
