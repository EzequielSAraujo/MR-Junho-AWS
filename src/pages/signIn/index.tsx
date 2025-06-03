import React, { useState } from 'react';
import {
  Text, View, Image, TextInput,
  KeyboardAvoidingView, TouchableOpacity,
  Alert
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';


import { useNavigation } from '@react-navigation/native';

import { styles } from './style';


export default function App() {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [isCSenhaVisible, setIsCSenhaVisible] = useState(false); // Estado para alternar a visibilidade
  

  
  const navigation = useNavigation();

  const [rememberMe, setRememberMe] = useState(false);


  const handleLogin = async () => {
    if (!email || !senha) {
      Alert.alert("Preencha todos os campos!");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      Alert.alert('Digite um e-mail válido');
      return;
    }
    if (senha.length < 8){
      Alert.alert('a senha precisa ter no minimo 8 caracteres')
      return;
    }
  
    try {
      const storedUsers = await AsyncStorage.getItem('users');
      const users = storedUsers ? JSON.parse(storedUsers) : [];
  
      const userFound = users.find(
        (user) => user.email === email && user.senha === senha
      );
      
     

      if (userFound) {
        await AsyncStorage.setItem("loggedUserEmail", userFound.email); 
        await AsyncStorage.setItem("loggedUserNome", userFound.nome); 
        await AsyncStorage.setItem("loggedUserNumero", userFound.numero); 
        navigation.navigate("Tab"); 
        
      } else {
        Alert.alert("Email ou senha incorretos!");
       
      }
    } catch (error) {
      console.error("Erro ao buscar usuários:", error);
      Alert.alert("Erro interno. Tente novamente.");
    }
  };
  
  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.containerLogo}>
        <Image
          source={require('../../assets/imgs/frame1.png')}
          style={styles.logoImage}
        />
      </View>

      <View style={styles.container}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu email"
          autoCorrect={false}
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          secureTextEntry={!isCSenhaVisible}
          maxLength={8}
          autoCorrect={false}
          value={senha}
          onChangeText={setSenha}
        />
        
        <TouchableOpacity onPress={() => setIsCSenhaVisible(!isCSenhaVisible)}>
          <Text>Ver Senha</Text>
        </TouchableOpacity>

        
        {/* Checkbox personalizado */}
        <View style={styles.checkboxContainer}>
          <TouchableOpacity
            onPress={() => setRememberMe(!rememberMe)}
            style={[
              styles.checkbox,
            ]}
          >
            {rememberMe && (
              <Text style={styles.checkboxCheckmark}>✓</Text>
            )}
          </TouchableOpacity>
          <Text style={styles.namecheck}>Lembrar de mim</Text>
        </View>

        <TouchableOpacity style={styles.buttonEntrar} onPress={handleLogin}>
          <Text style={styles.textButtonWhite}>ENTRAR</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonCriar} onPress={() => navigation.navigate("SingUp")}>
          <Text style={styles.textButtonPurple}>CRIAR CONTA</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}