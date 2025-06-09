import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Alert } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { useTheme } from '../../pages/preferencesMenu/themeContext';
import getStyles from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';

import ChevronLeftIcon from '../../assets/icons/ChevronLeft.png';
import ConfirmEditModal from '../../components/common/ConfirmEditModal';

interface Avatar {
  id: number;
  imageUrl: string;
  borderColor: string;
}

const AvatarSelectionScreen: React.FC = () => {
  const [selectedAvatarId, setSelectedAvatarId] = useState<number | null>(null);
  const [isConfirmationModalVisible, setIsConfirmationModalVisible] = useState(false);
  const navigation = useNavigation();
  const { theme } = useTheme();
  const styles = getStyles(theme);

  const avatars: Avatar[] = [
    { id: 1, imageUrl: 'https://img-teskly.s3.us-east-2.amazonaws.com/img/Ellipse%201.png', borderColor: theme.primary },
    { id: 2, imageUrl: 'https://img-teskly.s3.us-east-2.amazonaws.com/img/Ellipse%202.png', borderColor: theme.primaryLight },
    { id: 3, imageUrl: 'https://img-teskly.s3.us-east-2.amazonaws.com/img/Ellipse%203.png', borderColor: theme.secondaryAccent },
    { id: 4, imageUrl: 'https://img-teskly.s3.us-east-2.amazonaws.com/img/Ellipse%204.png', borderColor: theme.error },
    { id: 5, imageUrl: 'https://img-teskly.s3.us-east-2.amazonaws.com/img/Ellipse%205.png', borderColor: '#B58B46' },
  ];

  const getAvatarPictureId = (id: number) => `avatar_${id}`;

  const handleBackButton = () => {
    navigation.goBack();
  };

  const handleAvatarPress = (id: number) => {
    setSelectedAvatarId(id);
  };

  const handleConfirmSelection = async () => {
    if (!selectedAvatarId) {
      Alert.alert('Nenhum avatar selecionado.');
      return;
    }

    const nome = await AsyncStorage.getItem("loggedUserNome");
    const numero = await AsyncStorage.getItem("loggedUserNumero");

    if (!nome || !numero) {
      Alert.alert("Erro", "Informações do usuário ausentes.");
      return;
    }

    try {
      const token = await AsyncStorage.getItem('authToken');
      if (!token) {
        Alert.alert('Erro', 'Você não está autenticado.');
        return;
      }

      const pictureId = getAvatarPictureId(selectedAvatarId);

      const response = await fetch("http://18.219.117.124:3000/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          name: nome,
          phone_number: numero,
          picture: pictureId
        })
      });

      if (!response.ok) {
        const text = await response.text();
        throw new Error(text || "Erro ao atualizar avatar.");
      }

      await AsyncStorage.setItem("loggedUserPicture", pictureId);
      setIsConfirmationModalVisible(true);

    } catch (err: any) {
      console.error("Erro ao atualizar avatar:", err);
      Alert.alert("Erro", err.message);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackButton} style={styles.backButton}>
          <Image source={ChevronLeftIcon} style={styles.backButtonIcon} />
          <Text style={styles.backButtonText}>VOLTAR</Text>
        </TouchableOpacity>
        <Text style={styles.titleHead}>EDIÇÃO DE PERFIL</Text>
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.title}>SELECIONE SEU AVATAR</Text>
        <Text style={styles.subtitle}>(Escolha somente um.)</Text>
      </View>

      <View style={styles.avatarContainer}>
        {avatars.map((avatar) => (
          <TouchableOpacity
            key={avatar.id}
            style={[
              styles.avatarButton,
              {
                borderColor: avatar.borderColor,
                borderWidth: selectedAvatarId === avatar.id ? 3 : 1,
                backgroundColor: selectedAvatarId === avatar.id ? '#eee' : 'transparent',
              },
            ]}
            onPress={() => handleAvatarPress(avatar.id)}
          >
            <Image
              source={{ uri: avatar.imageUrl }}
              style={[
                styles.avatarImage,
                selectedAvatarId !== avatar.id && styles.deselectedAvatarImage,
              ]}
            />
            {selectedAvatarId === avatar.id && (
              <View style={styles.checkOverlay}>
                <Text style={styles.checkMark}>✓</Text>
              </View>
            )}
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.confirmButton} onPress={handleConfirmSelection}>
        <Text style={styles.confirmButtonText}>CONFIRMAR EDIÇÃO</Text>
      </TouchableOpacity>

      <ConfirmEditModal
        visible={isConfirmationModalVisible}
        onRequestClose={() => {
          setIsConfirmationModalVisible(false);
          navigation.pop(2);
        }}
      />
    </View>
  );
};

export default AvatarSelectionScreen;
