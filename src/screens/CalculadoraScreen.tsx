import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import ButtonCal from '../components/ButtonCal';

enum Operadores {
  sumar,
  restar,
  multiplicar,
  dividir,
}

const CalculadoraScreen = () => {
  const [numeroAnterior, setNumeroAnterior] = useState('0');

  const [numero, setNumero] = useState('100');

  const n

  const limpiar = () => {
    setNumero('0');
  };
  const armarNumero = (numeroTexto: string) => {
    //ya existe un punto
    if (numero.includes('.') && numeroTexto === '.') return;
    //evaluar si es cero y hay un punto
    if (numero.startsWith('0') || numero.startsWith('-0')) {
      //punto decimal
      if (numeroTexto === '.') {
        setNumero(numero + numeroTexto);
        //evaluar si es otro cero y hay un punto
      } else if (numeroTexto === '0' && numero.includes('.')) {
        setNumero(numero + numeroTexto);
        //evaluar si es diferente de cero y no tiene un punto
      } else if (numeroTexto !== '0' && !numero.includes('.')) {
        setNumero(numeroTexto);
        //evitar 0000.0
      } else if (numeroTexto === '0' && !numero.includes('.')) {
        setNumero(numero);
      } else {
        setNumero(numero + numeroTexto);
      }
    } else {
      setNumero(numero + numeroTexto);
    }
  };
  const positivoNegativo = () => {
    if (numero.includes('-')) {
      setNumero(numero.replace('-', ''));
    } else {
      setNumero('-' + numero);
    }
  };
  const btnDelete = () => {
    let negativo = '';
    let numeroTemp = numero;
    if (numero.includes('-')) {
      negativo = '-';
      numeroTemp = numero.substr(1);
    }
    if (numeroTemp.length > 1) {
      setNumero(negativo + numeroTemp.slice(0, -1));
    } else {
      setNumero('0');
    }
  };
  const cambiarNumPorAnterior = () => {
    if (numero.endsWith('.')) {
      setNumeroAnterior(numero.slice(0, -1));
    } else {
      setNumeroAnterior(numero);
    }
    setNumero('0');
  };

  return (
    <View style={styles.calculadoraContainer}>
      <View>
        <Text style={styles.textoPequeno}>{numeroAnterior}</Text>
        <Text style={styles.texto} numberOfLines={1} adjustsFontSizeToFit>
          {numero}
        </Text>
      </View>
      {/* button */}
      <View style={styles.buttonContainer}>
        <ButtonCal texto="C" color="#9B9B9B" accion={limpiar} />
        <ButtonCal texto="+/-" color="#9B9B9B" accion={positivoNegativo} />
        <ButtonCal texto="del" color="#9B9B9B" accion={btnDelete} />
        <ButtonCal texto="/" color="#EC9316" accion={cambiarNumPorAnterior} />
      </View>
      <View style={styles.buttonContainer}>
        <ButtonCal texto="7" accion={armarNumero} />
        <ButtonCal texto="8" accion={armarNumero} />
        <ButtonCal texto="9" accion={armarNumero} />
        <ButtonCal texto="x" color="#EC9316" accion={limpiar} />
      </View>
      <View style={styles.buttonContainer}>
        <ButtonCal texto="4" accion={armarNumero} />
        <ButtonCal texto="5" accion={armarNumero} />
        <ButtonCal texto="6" accion={armarNumero} />
        <ButtonCal texto="-" color="#EC9316" accion={limpiar} />
      </View>
      <View style={styles.buttonContainer}>
        <ButtonCal texto="1" accion={armarNumero} />
        <ButtonCal texto="2" accion={armarNumero} />
        <ButtonCal texto="3" accion={armarNumero} />
        <ButtonCal texto="+" color="#EC9316" accion={limpiar} />
      </View>
      <View style={styles.buttonContainer}>
        <ButtonCal texto="0" ancho accion={armarNumero} />
        <ButtonCal texto="." accion={armarNumero} />

        <ButtonCal texto="=" color="#EC9316" accion={limpiar} />
      </View>
    </View>
  );
};

export default CalculadoraScreen;
