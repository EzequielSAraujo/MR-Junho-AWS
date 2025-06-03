import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '../../pages/preferencesMenu/themeContext'; // Importe o useTheme

interface ConfirmEditModalProps {
  visible: boolean;
  onRequestClose: () => void;
}

const ConfirmEditModal: React.FC<ConfirmEditModalProps> = ({ visible, onRequestClose }) => {
  const { theme } = useTheme();

  const modalStyles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'rgba(17, 24, 39, 0.7)',
    },
    modalView: {
      margin: 20,
      backgroundColor: theme.secondaryBg,
      borderRadius: 12,
      padding: 25,
    },
    modalTitle: {
      marginBottom: 10,
      textAlign: 'left',
      fontSize: 18,
      fontFamily: 'Roboto-Medium',
      color: theme.mainText,
    },
    modalText: {
      marginBottom: 10,
      textAlign: 'left',
      color: theme.mainText,
      fontFamily: 'Roboto-Regular',
      fontSize: 17,
    },
    button: {
      alignItems: 'center',
      borderRadius: 8,
      padding: 10,
      elevation: 2,
    },
    buttonClose: {
      backgroundColor: theme.secondaryAccent,
    },
    textStyle: {
      color: '#FFFFFF',
      fontSize: 18,
      fontFamily: 'Roboto-Medium',
      textAlign: 'center',
    },
  });

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onRequestClose}
    >
      <View style={modalStyles.centeredView}>
        <View style={modalStyles.modalView}>
          <Text style={modalStyles.modalTitle}>Perfil atualizado</Text>
          <Text style={modalStyles.modalText}>Suas informações foram salvas com sucesso.</Text>
          <TouchableOpacity
            style={[modalStyles.button, modalStyles.buttonClose]}
            onPress={onRequestClose}
          >
            <Text style={modalStyles.textStyle}>FECHAR</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ConfirmEditModal;