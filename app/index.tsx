import React, { useState } from "react"; 
import { View, StyleSheet } from "react-native"; 
import { Button, TextInput, Headline, Provider as PaperProvider } from 'react-native-paper';
import * as Speech from "expo-speech"; 

const App = () => { 
  const [num1, setnum1] = useState(""); 
  const [num2, setnum2] = useState(""); 
  const [result, setresult] = useState<number | null>(null); 

  const handleOperation = (operation: 'suma' | 'resta' | 'multiplicacion' | 'division') => { 
    const number1 = parseFloat(num1); 
    const number2 = parseFloat(num2); 
    let res = 0; 
     
    switch (operation) { 
      case 'suma': 
        res = number1 + number2; 
        break; 
      case 'resta': 
        res = number1 - number2; 
        break; 
      case 'multiplicacion': 
        res = number1 * number2; 
        break; 
      case 'division': 
        if (number2 !== 0) { 
          res = number1 / number2;
        } else { 
          throw new Error("No se puede dividir por 0");
        } 
        break; 
      default: 
        throw new Error("Operación no válida");
    } 
    setresult(res);
  }; 

  const speakResult = () => { 
    Speech.speak(`El resultado de tu operacion es ${result}`);
  }; 

  return (
    <PaperProvider>
      <View style={{ flex: 1, justifyContent: 'center', padding: 20, backgroundColor: '#000'}}>
        <Headline style={{ textAlign: 'center', marginBottom: 20 }}>Calculadora</Headline>
        <TextInput
          label="Ingresa el primer número"
          keyboardType="numeric"
          value={num1}
          onChangeText={setnum1}
          style={{ marginBottom: 10 }}
        />
        <TextInput
          label="Ingresa el segundo número"
          keyboardType="numeric"
          value={num2}
          onChangeText={setnum2}
          style={{ marginBottom: 10 }}
        />
        <Button mode="contained" onPress={() => handleOperation('suma')} style={{ marginBottom: 10 }}>Sumar</Button>
        <Button mode="contained" onPress={() => handleOperation('resta')} style={{ marginBottom: 10 }}>Restar</Button>
        <Button mode="contained" onPress={() => handleOperation('multiplicacion')} style={{ marginBottom: 10 }}>Multiplicar</Button>
        <Button mode="contained" onPress={() => handleOperation('division')} style={{ marginBottom: 10 }}>Dividir</Button>
        <Button mode="contained" onPress={speakResult}>Hablar resultado</Button>
      </View>
    </PaperProvider>
  );
};


 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  resultContainer: {
    alignItems: 'center',
  },
  resultText: {
    fontSize: 20,
    marginBottom: 10,
  },
});

  
export default App;