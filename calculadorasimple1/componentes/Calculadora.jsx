import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import BotonCalculadora from './Botoncalculadora';
import ResultadoCalculadora from './Resultadocalculadora';

const Calculadora = () => {
  const [resultado, setResultado] = useState('');

  const manejarPresionarBoton = (valor) => {
    if (valor === '=') {

      try {
        setResultado(eval(resultado).toString());
      } catch (error) {
        setResultado('Error');
      }
    } else if (valor === 'C') {
  
      setResultado('');
    } else {
  
      setResultado(resultado + valor);
    }
  };

  return (
    <View style={styles.container}>
      <ResultadoCalculadora resultado={resultado} />
      <View style={styles.botonesContainer}>
        <BotonCalculadora valor="7" onPress={manejarPresionarBoton} />
        <BotonCalculadora valor="8" onPress={manejarPresionarBoton} />
        <BotonCalculadora valor="9" onPress={manejarPresionarBoton} />
        <BotonCalculadora valor="/" onPress={manejarPresionarBoton} />

        <BotonCalculadora valor="4" onPress={manejarPresionarBoton} />
        <BotonCalculadora valor="5" onPress={manejarPresionarBoton} />
        <BotonCalculadora valor="6" onPress={manejarPresionarBoton} />
        <BotonCalculadora valor="-" onPress={manejarPresionarBoton} />

        <BotonCalculadora valor="1" onPress={manejarPresionarBoton} />
        <BotonCalculadora valor="2" onPress={manejarPresionarBoton} />
        <BotonCalculadora valor="3" onPress={manejarPresionarBoton} />
        <BotonCalculadora valor="+" onPress={manejarPresionarBoton} />

        <BotonCalculadora valor="0" onPress={manejarPresionarBoton} />
        <BotonCalculadora valor="." onPress={manejarPresionarBoton} />
        <BotonCalculadora valor="=" onPress={manejarPresionarBoton} />
        <BotonCalculadora valor="C" onPress={manejarPresionarBoton} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 20,
  },
  botonesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default Calculadora;
