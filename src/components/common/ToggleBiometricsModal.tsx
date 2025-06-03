import React from "react";
import { Modal, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useTheme } from '../../pages/preferencesMenu/themeContext'; // Caminho corrigido

interface BiometricToggleModalProps {
    isVisible: boolean;
    isBiometricEnabled: boolean;
    onCancel: () => void;
    onConfirm: (newState: boolean) => void;
}

const BiometricToggleModal: React.FC<BiometricToggleModalProps> = ({
    isVisible,
    isBiometricEnabled,
    onCancel,
    onConfirm,
}) => {
    const { theme } = useTheme(); // Utilize o hook para acessar o tema atual

    const modalTitle = isBiometricEnabled ? "Desativar Biometria?" : "Ativar Biometria?";
    const modalText = isBiometricEnabled
        ? "Tem certeza que deseja desabilitar a autenticação por biometria? Você precisará usar seu login e senha para acessar o app."
        : "Deseja ativar a autenticação por biometria? Isso permitirá um acesso mais rápido e seguro ao app.";
    const confirmButtonText = isBiometricEnabled ? "DESABILITAR" : "HABILITAR";
    const confirmButtonColor = isBiometricEnabled
        ? [styles.button, { backgroundColor: theme.error }]
        : [styles.button, { backgroundColor: theme.secondaryAccent }];
    const modalContentBackgroundColor = { backgroundColor: theme.secondaryBg };
    const textColor = { color: theme.mainText };
    const secondaryTextColor = { color: theme.secondaryText };
    const cancelButtonBackgroundColor = { backgroundColor: theme.secondaryBg, borderColor: theme.primary, borderWidth: 2 };
    const cancelButtonTextColor = { color: theme.primary };

    return (
        <Modal
            visible={isVisible}
            transparent={true}
            animationType="fade"
            onRequestClose={onCancel}
        >
            <View style={styles.modalContainer}> {/* backgroundColor fixo aqui */}
                <View style={[styles.modalContent, modalContentBackgroundColor]}>
                    <Text style={[styles.modalTitle, textColor]}>{modalTitle}</Text>
                    <Text style={[styles.modalText, textColor]}>{modalText}</Text>
                    <View style={styles.buttonsContainer}>
                        <TouchableOpacity
                            style={[styles.button, cancelButtonBackgroundColor]}
                            onPress={onCancel}
                        >
                            <Text style={[styles.buttonText, cancelButtonTextColor]}>
                                Agora não
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={confirmButtonColor}
                            onPress={() => onConfirm(!isBiometricEnabled)}
                        >
                            <Text style={styles.buttonText}>{confirmButtonText}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(17, 24, 39, 0.7)', // Mantendo o backgroundColor fixo
    },
    modalContent: {
        borderRadius: 12,
        padding: 25,
        width: '85%',
        alignItems: 'flex-start',
    },
    modalTitle: {
        fontSize: 18,
        fontFamily: 'Roboto-Medium',
        marginBottom: 8,
    },
    modalText: {
        fontSize: 16,
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
        paddingHorizontal: 16,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 0,
    },
    buttonText: {
        color: '#fff',
        fontFamily: 'Roboto-Medium',
        fontSize: 18,
    },
});

export default BiometricToggleModal;