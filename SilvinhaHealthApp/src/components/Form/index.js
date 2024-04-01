import { View, Text, TextInput, TouchableOpacity, Keyboard } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
import ResultImc from './ResultImc'

export default function Form() {
  const[height, setHeight] = useState(null);
  const[weight, setWeight] = useState(null);
  const[imc, setImc] = useState(null);
  const[messageImc, setMessageImc] = useState("Preencha o peso e a altura");
  const[textButton, setTextButton] = useState("Calcular");

  function imcCalculator(){
    return setImc((weight / (height * height)).toFixed(2));
  }
  function validationImc(){
    if (weight != null && height != null) {
      imcCalculator();
      Keyboard.dismiss();
      setHeight(null);
      setWeight(null);
      setMessageImc("Seu IMC é:")
      setTextButton("Calcular Novamente");
      return
    }
    setImc(null);
    setMessageImc("Preencha o Peso e Altura")
    setTextButton("Calcular IMC");
  }

  return (
    <View style={styles.formContext}>
     <View style={styles.formGroup}>
        <Text style={styles.formLabel}> Altura</Text>
        <TextInput
            style={styles.input}
            onChangeText={setHeight}
            value={height ?? ""}
            placeholder='Ex. 1.70'
            keyboardType='numeric'
        />
        <Text style={styles.formLabel}> Peso</Text>
        <TextInput
            style={styles.input}
            onChangeText={setWeight}
            value={weight ?? ""}
            placeholder='Ex. 80.360kgs'
            keyboardType='numeric'
        />
        <TouchableOpacity 
          style={styles.button}
          onPress={() => validationImc()}
        >
          <Text style={styles.textButton}>
            {textButton}
          </Text>    
        </TouchableOpacity> 
    </View> 
    <ResultImc messageResult={messageImc} resultImc={imc}/>
    </View>
  )
}