import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert
} from "react-native";

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from "@react-navigation/native";

import { styles } from "./style";
import ModalBiometrics from "../../components/common/modalBiometrics";

export default function SingUp() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const openModal = () => setIsModalVisible(true);
  const closeModal = () => setIsModalVisible(false);

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [numero, setNumero] = useState("");
  const [senha, setSenha] = useState("");
  const [cSenha, setCSenha] = useState("");

  const [erroNome, setErroNome] = useState("");
  const [erroEmail, setErroEmail] = useState("");
  const [erroNumero, setErroNumero] = useState("");
  const [erroSenha, setErroSenha] = useState("");
  const [erroCSenha, setErroCSenha] = useState("");

  const [isSenhaVisible, setIsSenhaVisible] = useState(false);
  const [isCSenhaVisible, setIsCSenhaVisible] = useState(false);

  const navigation = useNavigation();

  const users = async () => {
    let hasError = false;

    if (nome.trim().split(" ").length < 2) {
      setErroNome("Digite seu nome e sobrenome");
      hasError = true;
    } else {
      setErroNome("");
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErroEmail("Digite um e-mail válido");
      hasError = true;
    } else {
      setErroEmail("");
    }

    if (numero.replace(/\D/g, "").length < 11) {
      setErroNumero("Digite o número com o DDD");
      hasError = true;
    } else {
      setErroNumero("");
    }

    if (senha.length < 8) {
      setErroSenha("A senha precisa ter no mínimo 8 caracteres");
      hasError = true;
    } else {
      setErroSenha("");
    }

    if (senha !== cSenha) {
      setErroCSenha("As senhas não coincidem!");
      hasError = true;
    } else {
      setErroCSenha("");
    }

    if (hasError) return;

    try {
      const storedUsers = await AsyncStorage.getItem('users');
      const parsedUsers = storedUsers ? JSON.parse(storedUsers) : [];

      console.log(storedUsers)

      const emailExists = parsedUsers.some(user => user.email === email);
      if (emailExists) {
        setErroEmail("Esse e-mail já está cadastrado!");
        return;
      }

      const newUser = {
        id: Date.now(),
        nome,
        email,
        numero,
        senha,
      };

      const updatedUsers = [...parsedUsers, newUser];
      await AsyncStorage.setItem('users', JSON.stringify(updatedUsers));

      
      await AsyncStorage.setItem("loggedUserEmail", email);
      await AsyncStorage.setItem("loggedUserNome", nome);
      await AsyncStorage.setItem("loggedUserNumero", numero);

      setNome("");
      setEmail("");
      setNumero("");
      setSenha("");
      setCSenha("");

      openModal();

      setTimeout(() => {
        closeModal();
        navigation.navigate("avatarSelect");
      }, 1500);

    } catch (error) {
      Alert.alert("Erro ao salvar dados!");
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.cont}>
        <Text style={styles.txth1}>CADASTRO</Text>

        <Text style={styles.label}>Nome Completo</Text>
        <TextInput
          style={styles.txtinput}
          placeholder="Ex: João Gabriel"
          value={nome}
          onChangeText={setNome}
        />
        <Text style={styles.txterro}>{erroNome}</Text>

        <Text style={styles.label}>E-mail</Text>
        <TextInput
          style={styles.txtinput}
          placeholder="example@example.com"
          value={email}
          onChangeText={setEmail}
        />
        <Text style={styles.txterro}>{erroEmail}</Text>

        <Text style={styles.label}>Número</Text>
        <TextInput
          style={styles.txtinput}
          placeholder="(DDD) 9 NNNN-NNNN"
          keyboardType="numeric"
          value={numero}
          onChangeText={(text) => setNumero(text.replace(/[^0-9]/g, ''))}
          maxLength={11}
        />
        <Text style={styles.txterro}>{erroNumero}</Text>

        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.txtinput}
          placeholder="* * * * * * * *"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry={!isCSenhaVisible}
          maxLength={8}
        />       
        <Text style={styles.txterro}>{erroSenha}</Text>

        <Text style={styles.label}>Confirmar Senha</Text>
        <TextInput
          style={styles.txtinput}
          placeholder="* * * * * * * *"
          value={cSenha}
          onChangeText={setCSenha}
          secureTextEntry={!isCSenhaVisible}
          maxLength={8}
        />
        <TouchableOpacity onPress={() => setIsCSenhaVisible(!isCSenhaVisible)}>
          <Text>{isCSenhaVisible ? "Ocultar senha" : "Ver senha"}</Text>
        </TouchableOpacity>
        <Text style={styles.txterro}>{erroCSenha}</Text>

        <TouchableOpacity style={styles.btn} onPress={users}>
          <Text style={styles.txtbtn}>CRIAR CONTA</Text>
        </TouchableOpacity>

        <ModalBiometrics visible={isModalVisible} onClose={closeModal} />
      </View>
    </View>
  );
}
