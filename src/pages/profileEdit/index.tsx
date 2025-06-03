import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { useTheme } from '../../pages/preferencesMenu/themeContext'; // Importe o useTheme
import getStyles from './style'; // Importe a função getStyles
import ChevronLeftIcon from '../../assets/icons/ChevronLeft.png';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProfileEdit: React.FC = () => {
  const navigation = useNavigation();
  const { theme } = useTheme(); // Obtenha o tema do contexto
  const styles = getStyles(theme); // Obtenha os estilos com o tema atual
  const [originalEmail, setOriginalEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isFormValid, setIsFormValid] = useState(true);

  const isEmailValid = (text: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(text);
  };

  const isPhoneNumberValid = (text: string) => {
    const phoneRegex = /^\d{2}9\d{8}$/;
    return phoneRegex.test(text);
  };

  const isFullnameValid = (text: string) => {
    return text.length > 0;
  };

  const handleBackButton = () => {
    navigation.goBack();
    console.log('Voltar pressionado');
  };

  const handleContinueButton = async () => {
    if (isEmailValid(email) && isFullnameValid(fullName) && isPhoneNumberValid(phoneNumber)) {
      try {
        const storedUsers = await AsyncStorage.getItem("users");
        const parsedUsers = storedUsers ? JSON.parse(storedUsers) : [];

        const updatedUsers = parsedUsers.map((user: any) => {
          if (user.email === originalEmail) {
            return {
              ...user,
              nome: fullName,
              email: email,
              numero: phoneNumber,
            };
          }
          return user;
        });

        await AsyncStorage.setItem("users", JSON.stringify(updatedUsers));
        await AsyncStorage.setItem("loggedUserNome", fullName);
        await AsyncStorage.setItem("loggedUserNumero", phoneNumber);
        await AsyncStorage.setItem("loggedUserEmail", email); // opcional

        console.log("Perfil atualizado com sucesso!");
        setIsFormValid(true);

        navigation.navigate('avatarEdit', {
          nomeCompleto: fullName,
          email: email,
          numero: phoneNumber,
        });
      } catch (error) {
        console.error("Erro ao atualizar perfil:", error);
      }
    } else {
      setIsFormValid(false);
      console.log('Validação falhou, não salvando.');
    }
  };

  useEffect(() => {
    const carregarDadosUsuario = async () => {
      const emailLogado = await AsyncStorage.getItem("loggedUserEmail");
      const usuariosArmazenados = await AsyncStorage.getItem("users");

      if (emailLogado && usuariosArmazenados) {
        const listaUsuarios = JSON.parse(usuariosArmazenados);
        const usuario = listaUsuarios.find((u: any) => u.email === emailLogado);

        if (usuario) {
          setFullName(usuario.nome);
          setEmail(usuario.email);
          setOriginalEmail(usuario.email); // aqui
          setPhoneNumber(usuario.numero);
        }
      }
    };

    carregarDadosUsuario();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackButton} style={styles.backButton}>
          <Image source={ChevronLeftIcon} style={styles.backButtonIcon} />
          <Text style={styles.backButtonText}>VOLTAR</Text>
        </TouchableOpacity>
        <Text style={styles.titleHead}>EDIÇÃO DE PERFIL</Text>
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.label}>Nome Completo</Text>
        <TextInput
          style={styles.input}
          value={fullName}
          onChangeText={setFullName}
          placeholder="Digite seu nome completo"
        />
        {(!isFormValid && !isFullnameValid(fullName)) && <Text style={styles.errorText}>Error aqui</Text>}

        <Text style={styles.label}>E-mail</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="example@example.com"
          keyboardType="email-address"
        />
        {(!isFormValid && !isEmailValid(email)) && <Text style={styles.errorText}>Error aqui</Text>}

        <Text style={styles.label}>Número</Text>
        <TextInput
          style={styles.input}
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          placeholder="(DDD) 9 NNNN-NNNN"
          keyboardType="phone-pad"
          maxLength={11}
        />
        {(!isFormValid && !isPhoneNumberValid(phoneNumber)) && <Text style={styles.errorText}>Error aqui</Text>}
      </View>

      <TouchableOpacity onPress={handleContinueButton} style={styles.continueButton}>
        <Text style={styles.continueButtonText}>CONTINUAR</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileEdit;
