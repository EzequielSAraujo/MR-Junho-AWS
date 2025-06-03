import React from 'react';
import { Modal, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../../pages/preferencesMenu/themeContext'; // Ajuste o caminho se necessário

interface ModalErroProps {
  visible: boolean;
  onClose: () => void;
}

export const ModalErro: React.FC<ModalErroProps> = ({ visible, onClose }) => {
  const navigation = useNavigation();
  const { theme } = useTheme();

  const errorModalStyles = StyleSheet.create({
    overlay: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.4)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalContainer: {
      backgroundColor: theme.secondaryBg,
      borderRadius: 12,
      paddingVertical: 15,
      paddingHorizontal: 20,
      alignItems: 'center',
      width: '80%',
      elevation: 100,
    },
    title: {
      fontSize: 17,
      fontWeight: 'bold',
      marginBottom: 5,
      color: theme.error,
      textAlign: 'center',
    },
    message: {
      fontSize: 14,
      color: theme.mainText,
      marginBottom: 15,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    button: {
      borderWidth: 2,
      borderColor: theme.primary,
      borderRadius: 6,
      paddingVertical: 8,
      paddingHorizontal: 40,
      marginBottom: 15,
    },
    buttonText: {
      color: theme.primary,
      fontWeight: 'bold',
      fontSize: 15,
    },
    buttonCriar: { // Mantenha este estilo se você realmente precisa dele, mas parece não ter texto
      // backgroundColor: 'blue', // Adicione uma cor de fundo para visualização se necessário
      // padding: 10,
      // borderRadius: 5,
    },
    buttonCriarText: {
      // color: 'white',
      // fontWeight: 'bold',
    },
  });

  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={errorModalStyles.overlay}>
        <View style={errorModalStyles.modalContainer}>
          <Text style={errorModalStyles.title}>Ops! Ocorreu um problema</Text>
          <Text style={errorModalStyles.message}>E-mail e/ou senha incorretos</Text>

          <TouchableOpacity style={errorModalStyles.button} onPress={onClose}>
            <Text style={errorModalStyles.buttonText}>FECHAR</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={errorModalStyles.buttonCriar}
            onPress={() => {
              onClose();
              navigation.navigate("SingUp");
            }}
          >
            {/* Você pode adicionar um texto ou ícone aqui se quiser um botão visível para "Criar Conta" */}
            {/* <Text style={errorModalStyles.buttonCriarText}>Criar Conta</Text> */}
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({ // Mantenha seus estilos antigos aqui por enquanto
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingVertical: 5,
    paddingHorizontal: 20,
    alignItems: 'center',
    width: '80%',
    elevation: 100,
    marginTop: -193,
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: -15,
    color: '#000',
    marginRight: 85,
  },
  message: {
    fontSize: 14,
    color: '#333',
    marginBottom: 10,
    marginRight: 105,
    fontWeight: 'bold',
  },
  button: {
    borderWidth: 2,
    borderColor: '#5B3CC4',
    borderRadius: 6,
    paddingVertical: 8,
    paddingHorizontal: 113,
    marginBottom: 10,
  },
  buttonText: {
    color: '#5B3CC4',
    fontWeight: 'bold',
    fontSize: 15,
  },
});