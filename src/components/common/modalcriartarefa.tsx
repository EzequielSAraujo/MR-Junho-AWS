import React, { useState } from 'react';
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Keyboard,
} from 'react-native';
import { useTheme } from '../../pages/preferencesMenu/themeContext'; // Ajuste o caminho se necessário

export default function ModalCriarTarefa({ visible, onClose, onCreate }) {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [prazo, setPrazo] = useState('');
  const { theme } = useTheme();

  const handleCreate = () => {
  if (!titulo.trim() || !descricao.trim() || !prazo.trim()) {
    alert('Preencha todos os campos!');
    return;
  }
  if (prazo.length !== 10) {
    alert('Por favor, insira uma data de prazo válida no formato XX/XX/XXXX.');
    return;
  }

  const novaTarefa = {
    title: titulo.trim(),
    description: descricao.trim(),
    deadline: prazo.trim(),
    done: false,
    priority: 3,
    subtasks: [],
    tags: []
  };

  onCreate(novaTarefa);
  setTitulo('');
  setDescricao('');
  setPrazo('');
  onClose();
};


  const formatarData = (text) => {
    const numeros = text.replace(/\D/g, '');
    const tamanho = numeros.length;
    let dataFormatada = '';

    if (tamanho > 0) {
      dataFormatada = numeros.substring(0, 2);
    }
    if (tamanho > 2) {
      dataFormatada += '/' + numeros.substring(2, 4);
    }
    if (tamanho > 4) {
      dataFormatada += '/' + numeros.substring(4, 8);
    }
    setPrazo(dataFormatada.substring(0, 10));
  };

  const modalStyles = StyleSheet.create({
    overlay: {
      flex: 1,
      backgroundColor: 'rgba(17, 24, 39, 0.7)',
      justifyContent: 'center',
      padding: 20,
    },
    modal: {
      backgroundColor: theme.secondaryBg,
      borderRadius: 10,
      paddingHorizontal: 25,
      paddingVertical: 25,
    },
    title: {
      fontSize: 18,
      fontFamily: 'Roboto-Medium',
      textAlign: 'left',
      color: theme.mainText,
    },
    label: {
      fontSize: 12,
      fontFamily: 'Roboto-Regular',
      marginTop: 10,
      color: theme.secondaryText,
    },
    input: {
      borderWidth: 2,
      borderColor: theme.primary,
      borderRadius: 8,
      paddingHorizontal: 16,
      paddingVertical: 12,
      marginTop: 10,
      fontSize: 16,
      fontFamily: 'Roboto-Regular',
      color: theme.mainText,
      backgroundColor: theme.secondaryBg,
    },
    buttonRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 20,
    },
    buttonCancel: {
      borderColor: theme.primary,
      borderWidth: 2,
      paddingVertical: 5,
      paddingHorizontal: 23,
      borderRadius: 8,
      alignItems: 'center',
    },
    buttonCreate: {
      backgroundColor: theme.primary,
      paddingVertical: 7,
      paddingHorizontal: 45,
      borderRadius: 8,
      alignItems: 'center',
    },
    cancelText: {
      color: theme.primary,
      fontFamily: 'Roboto-Medium',
      fontSize: 19,
    },
    createText: {
      color: '#fff',
      fontFamily: 'Roboto-Medium',
      fontSize: 19,
    },
  });

  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={modalStyles.overlay}>
        <View style={modalStyles.modal}>
          <Text style={modalStyles.title}>Criar tarefa</Text>

          <Text style={modalStyles.label}>Título</Text>
          <TextInput
            value={titulo}
            onChangeText={setTitulo}
            placeholder="Ex: bater o ponto"
            style={modalStyles.input}
            returnKeyType="next"
            onSubmitEditing={() => { /* Poderia focar no próximo input aqui */ }}
            placeholderTextColor={theme.secondaryText}
          />

          <Text style={modalStyles.label}>Descrição</Text>
          <TextInput
            value={descricao}
            onChangeText={setDescricao}
            multiline
            style={[modalStyles.input, { height: 60 }]}
            placeholder="Descreva a tarefa"
            placeholderTextColor={theme.secondaryText}
          />

          <Text style={modalStyles.label}>Prazo</Text>
          <TextInput
            value={prazo}
            onChangeText={formatarData}
            placeholder="Ex: 28/04/2025"
            style={modalStyles.input}
            keyboardType="numeric"
            maxLength={10}
            placeholderTextColor={theme.secondaryText}
          />

          <View style={modalStyles.buttonRow}>
            <TouchableOpacity style={modalStyles.buttonCancel} onPress={() => {
              setTitulo('');
              setDescricao('');
              setPrazo('');
              onClose();
            }}>
              <Text style={modalStyles.cancelText}>CANCELAR</Text>
            </TouchableOpacity>

            <TouchableOpacity style={modalStyles.buttonCreate} onPress={handleCreate}>
              <Text style={modalStyles.createText}>CRIAR</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}