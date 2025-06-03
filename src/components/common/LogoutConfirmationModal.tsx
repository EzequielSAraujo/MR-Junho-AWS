import React from "react";
import { Modal, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useTheme } from '../../pages/preferencesMenu/themeContext'; // Ajuste o caminho se necessário

interface LogoutConfirmationModalProps {
  isVisible: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}

const LogoutConfirmationModal: React.FC<LogoutConfirmationModalProps> = ({
  isVisible,
  onCancel,
  onConfirm,
}) => {
  const { theme } = useTheme();

  const logoutModalStyles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(17, 24, 39, 0.7)',
    },
    modalContent: {
      backgroundColor: theme.secondaryBg,
      borderRadius: 12,
      padding: 25,
      width: '85%',
      alignItems: 'flex-start',
    },
    modalTitle: {
      fontSize: 18,
      fontFamily: 'Roboto-Medium',
      marginBottom: 8,
      color: theme.mainText,
    },
    modalText: {
      fontSize: 16,
      color: theme.mainText,
      textAlign: 'justify',
      marginBottom: 15,
      fontFamily: 'Roboto-Regular',
    },
    buttonsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
    },
    button: {
      borderRadius: 8,
      paddingVertical: 5,
      paddingHorizontal: 25,
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: 0,
    },
    cancelButton: {
      backgroundColor: theme.secondaryBg,
      borderColor: theme.primary,
      borderWidth: 2,
    },
    confirmButton: {
      backgroundColor: theme.error,
      paddingHorizontal: 45,
    },
    buttonText: {
      color: '#fff',
      fontFamily: 'Roboto-Medium',
      fontSize: 18,
    },
    cancelButtonText: {
      color: theme.primary,
      fontFamily: 'Roboto-Medium',
    },
  });

  return (
    <Modal
      visible={isVisible}
      transparent={true}
      animationType="fade"
      onRequestClose={onCancel}
    >
      <View style={logoutModalStyles.modalContainer}>
        <View style={logoutModalStyles.modalContent}>
          <Text style={logoutModalStyles.modalTitle}>Deseja sair?</Text>
          <Text style={logoutModalStyles.modalText}>
            Tem certeza que deseja sair do aplicativo? Você poderá se conectar
            novamente a qualquer momento.
          </Text>
          <View style={logoutModalStyles.buttonsContainer}>
            <TouchableOpacity
              style={[logoutModalStyles.button, logoutModalStyles.cancelButton]}
              onPress={onCancel}
            >
              <Text style={[logoutModalStyles.buttonText, logoutModalStyles.cancelButtonText]}>
                Agora não
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[logoutModalStyles.button, logoutModalStyles.confirmButton]}
              onPress={onConfirm}
            >
              <Text style={logoutModalStyles.buttonText}>SAIR</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default LogoutConfirmationModal;