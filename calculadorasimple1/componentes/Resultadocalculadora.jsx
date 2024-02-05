import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Resultadocalculadora = ({ resultado }) => {
  return (
    <View style={styles.resultadoContainer}>
      <Text style={styles.resultadoTexto}>{resultado}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  resultadoContainer: {
    marginBottom: 20,
  },
  resultadoTexto: {
    fontSize: 36,
  },
});

export default Resultadocalculadora;
