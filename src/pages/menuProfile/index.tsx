import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
import useStyles from './style';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useTheme } from '../../pages/preferencesMenu/themeContext'; // Importe o useTheme

import LogoutConfirmationModal from '../../components/common/LogoutConfirmationModal';
import ToggleBiometricsModal from '../../components/common/ToggleBiometricsModal';
import AccountDeletionModal from '../../components/common/AccountDeletionModal';

import UserIconDark from '../../assets/icons/User.png';
import UserIconLight from '../../assets/icons/UserLight.png';
import FingerprintIconDark from '../../assets/icons/menu/FingerprintSimple.png';
import FingerprintIconLight from '../../assets/icons/menu/FingerprintSimpleLight.png';
import LogoutIconDark from '../../assets/icons/menu/SignOut.png';
import LogoutIconLight from '../../assets/icons/menu/SignOutLight.png';
import ChevronRightIcon from '../../assets/icons/ChevronRight.png'; // Este parece ser o mesmo para ambos os temas
import DeleteAccIconDark from '../../assets/icons/menu/Trash.png';
import DeleteAccIconLight from '../../assets/icons/TrashLight.png';
import ProfileImage from '../../assets/imgs/avatar.png';

import AsyncStorage from '@react-native-async-storage/async-storage';

const formatPhoneNumber = (phoneNumber: string) => {
  if (!phoneNumber) {
    return '';
  }
  const cleaned = ('' + phoneNumber).replace(/\D/g, '');
  const match = cleaned.match(/^(\d{2})(\d{5})(\d{4})$/);
  if (match) {
    return `(${match[1]}) ${match[2]} - ${match[3]}`;
  }
  return cleaned;
};

const ProfileScreen: React.FC = () => {
  const navigation = useNavigation();
  const styles = useStyles(); // Use o hook para obter os estilos com o tema atual
  const { currentThemeName } = useTheme(); // Acesse o nome do tema atual

  const [isLogoutConfirmationModalVisible, setIsLogoutConfirmationModalVisible] = useState(false);
  const [isBiometricModalVisible, setIsBiometricModalVisible] = useState(false);
  const [isBiometricEnabled, setIsBiometricEnabled] = useState(false);
  const [isAccountDeletionModalVisible, setIsAccountDeletionModalVisible] = useState(false);
  const [usuario, setUsuario] = useState({ nome: '', email: '', numero: '' });

  // Função auxiliar para determinar qual ícone usar
  const getIcon = (iconName: string) => {
    if (currentThemeName === 'dark') {
      switch (iconName) {
        case 'user':
          return UserIconDark;
        case 'fingerprint':
          return FingerprintIconDark;
        case 'logout':
          return LogoutIconDark;
        case 'delete':
          return DeleteAccIconDark;
        default:
          return null; // Ou um ícone padrão
      }
    } else {
      switch (iconName) {
        case 'user':
          return UserIconLight;
        case 'fingerprint':
          return FingerprintIconLight;
        case 'logout':
          return LogoutIconLight;
        case 'delete':
          return DeleteAccIconLight;
        default:
          return null; // Ou um ícone padrão
      }
    }
  };

  const handleEditProfilePress = () => {
    navigation.navigate('profileEdit');
  };

  const handlePreferencesPress = () => {
    navigation.navigate('PreferencesMenu');
  };

  const handleLogoutPress = () => {
    setIsLogoutConfirmationModalVisible(true);
  };

  const handleCancelLogout = () => {
    setIsLogoutConfirmationModalVisible(false);
  };

  const handleConfirmLogout = async () => {
    try {
      await AsyncStorage.removeItem("loggedUserEmail");
      await AsyncStorage.removeItem("loggedUserNome");
      await AsyncStorage.removeItem("loggedUserNumero");

      navigation.reset({
        index: 0,
        routes: [{ name: 'SingIn' }],
      });
    } catch (error) {
      console.error('Erro ao sair da conta:', error);
      Alert.alert("Erro", "Ocorreu um erro ao deslogar.");
    }
  };

  const handleOpenBiometricModal = () => setIsBiometricModalVisible(true);
  const handleCloseBiometricModal = () => setIsBiometricModalVisible(false);

  const handleConfirmBiometricChange = (newState: boolean) => {
    setIsBiometricEnabled(newState);
    setIsBiometricModalVisible(false);
  };

  const handleOpenDeleteAccountModal = () => setIsAccountDeletionModalVisible(true);
  const handleCloseDeleteAccountModal = () => setIsAccountDeletionModalVisible(false);

  const handleConfirmDeleteAccount = async () => {
    try {
      const emailLogado = await AsyncStorage.getItem("loggedUserEmail");

      if (!emailLogado) {
        console.warn("Nenhum usuário logado.");
        Alert.alert("Erro", "Você não está logado.");
        return;
      }

      const usuariosJson = await AsyncStorage.getItem("users");
      const usuarios = usuariosJson ? JSON.parse(usuariosJson) : [];

      const usuarioIndex = usuarios.findIndex((u) => u.email === emailLogado);
      if (usuarioIndex === -1) {
        console.warn("Usuário não encontrado.");
        Alert.alert("Erro", "Usuário não encontrado.");
        return;
      }

      usuarios.splice(usuarioIndex, 1);

      await AsyncStorage.setItem("users", JSON.stringify(usuarios));

      await AsyncStorage.removeItem("loggedUserEmail");
      await AsyncStorage.removeItem("loggedUserNome");
      await AsyncStorage.removeItem("loggedUserNumero");

      navigation.reset({
        index: 0,
        routes: [{ name: 'SingIn' }], // Altere para o nome correto da tela de login
      });
      setIsAccountDeletionModalVisible(false);
      Alert.alert("Conta excluída", "Sua conta foi excluída com sucesso.")

    } catch (error) {
      console.error("Erro ao excluir a conta:", error);
      Alert.alert("Erro", "Ocorreu um erro ao excluir sua conta.");
    }
  };

  useFocusEffect(
    useCallback(() => {
      const carregarUsuario = async () => {
        const email = await AsyncStorage.getItem("loggedUserEmail");
        const nome = await AsyncStorage.getItem("loggedUserNome");
        const numero = await AsyncStorage.getItem("loggedUserNumero");
        if (email || nome || numero) {
          setUsuario({
            nome: nome || '',
            email: email || '',
            numero: numero || '',
          });
        }
      };
      carregarUsuario();
    }, [])
  );

  const handleTermsAndConditionsPress = () => {
    navigation.navigate('WebView', {
      url: 'https://sobreuol.noticias.uol.com.br/normas-de-seguranca-e-privacidade/en/',
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatarContainer}>
          <Image source={ProfileImage} style={styles.avatar} />
        </View>
        <Text style={styles.name}>{usuario.nome}</Text>
        <Text style={styles.email}>{usuario.email}</Text>
        <Text style={styles.phone}>{formatPhoneNumber(usuario.numero)}</Text>
      </View>

      <ScrollView
        style={styles.actionsScrollView}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.actionsContainer}
      >
        <TouchableOpacity style={styles.actionButton} onPress={handleEditProfilePress}>
          <View style={styles.actionContent}>
            <Text style={styles.actionText}>Editar Informações Pessoais</Text>
            <Image source={getIcon('user')} style={styles.actionIcon} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton} onPress={handleOpenBiometricModal}>
          <View style={styles.actionContent}>
            <Text style={styles.actionText}>Mudar Biometria</Text>
            <Image source={getIcon('fingerprint')} style={styles.actionIcon} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton} onPress={handleLogoutPress}>
          <View style={styles.actionContent}>
            <Text style={styles.actionText}>Sair da Conta</Text>
            <Image source={getIcon('logout')} style={styles.actionIcon} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton} onPress={handleOpenDeleteAccountModal}>
          <View style={styles.actionContent}>
            <Text style={styles.actionText}>Excluir Conta</Text>
            <Image source={getIcon('delete')} style={styles.actionIcon} />
          </View>
        </TouchableOpacity>
      </ScrollView>

      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuItem} onPress={handlePreferencesPress}>
          <Text style={styles.menuText}>Preferências</Text>
          <Image source={ChevronRightIcon} style={styles.menuIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={handleTermsAndConditionsPress}>
          <Text style={styles.menuText}>Termos e regulamentos</Text>
          <Image source={ChevronRightIcon} style={styles.menuIcon} />
        </TouchableOpacity>
      </View>

      {isLogoutConfirmationModalVisible && (
        <LogoutConfirmationModal
          isVisible={isLogoutConfirmationModalVisible}
          onCancel={handleCancelLogout}
          onConfirm={handleConfirmLogout}
        />
      )}

      {isBiometricModalVisible && (
        <ToggleBiometricsModal
          isVisible={isBiometricModalVisible}
          isBiometricEnabled={isBiometricEnabled}
          onCancel={handleCloseBiometricModal}
          onConfirm={handleConfirmBiometricChange}
        />
      )}

      {isAccountDeletionModalVisible && (
        <AccountDeletionModal
          isVisible={isAccountDeletionModalVisible}
          onCancel={handleCloseDeleteAccountModal}
          onConfirm={handleConfirmDeleteAccount}
        />
      )}
    </View>
  );
};

export default ProfileScreen;