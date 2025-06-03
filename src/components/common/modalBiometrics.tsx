import React from 'react';
import { Modal, View, Text, Pressable, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../../pages/preferencesMenu/themeContext'; // Ajuste o caminho se necessário

const ModalComponent = ({ visible, onClose }) => {
  const navigation = useNavigation();
  const { theme } = useTheme();

  const biometryModalStyles = StyleSheet.create({
    overlay: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContainer: {
      width: "85%",
      padding: 20,
      backgroundColor: theme.secondaryBg,
      borderRadius: 10,
    },
    modalTexth1: {
      fontSize: 18,
      fontFamily: 'Roboto-Medium',
      marginBottom: 15,
      color: theme.mainText,
    },
    modalText: {
      fontSize: 16,
      marginBottom: 10,
      fontFamily: 'Roboto-Regular',
      color: theme.mainText,
    },
    btn: {
      flexDirection: "row",
      justifyContent: "space-around",
    },
    btnCancel: {
      paddingHorizontal: 25,
      paddingVertical: 7,
      borderRadius: 8,
      borderWidth: 2,
      borderColor: theme.primary,
    },
    txtCanel: {
      color: theme.primary,
      fontWeight: "500",
      fontSize: 18,
    },
    btnNext: {
      paddingHorizontal: 45,
      paddingVertical: 7,
      borderRadius: 8,
      backgroundColor: theme.primary,
    },
    txtactivate: {
      color: "white",
      fontWeight: "500",
      fontSize: 18
    }
  });

  return (
    <Modal
      transparent={true}
      visible={visible}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={biometryModalStyles.overlay}>
        <View style={biometryModalStyles.modalContainer}>
          <Text style={biometryModalStyles.modalTexth1}>Ative o Desbloqueio por Biometria</Text>
          <Text style={biometryModalStyles.modalText}>Use sua impressão digital para acessar seu app de tarefas com rapidez e segurança. Se preferir, você ainda poderá usar sua senha sempre que quiser.</Text>
          <View style={biometryModalStyles.btn}>
            <Pressable style={biometryModalStyles.btnCancel} onPress={() => navigation.navigate("avatarSelect")}><Text style={biometryModalStyles.txtCanel}>Agora não</Text></Pressable>
            <Pressable style={biometryModalStyles.btnNext} onPress={() => navigation.navigate("avatarSelect")}><Text style={biometryModalStyles.txtactivate}>ATIVAR</Text></Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalComponent;