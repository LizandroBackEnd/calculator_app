import React, { useState }  from "react"; 
import { View, Text, TextInput, Button, StyleSheet } from "react-native"; 
import * as Speech from 'expo-speech'; 
  
const App = () => { 
  const [num1, setnum1] = useState(""); 
  const [num2, setnum2] = useState(""); 
  const [result, setresult] = useState(null);  
   
   
  const handleOperation = (operation) => { 
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
      res = number1 / number2; 
      break; 
    default: 
    res = 'Invalid operation';
    }
  }
}