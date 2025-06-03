import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { useTheme } from '../../pages/preferencesMenu/themeContext'; // Importe o useTheme
import getStyles from './style'; // Importe a função getStyles
import AvatarImage from '../../assets/imgs/avatar.png';
import ConfirmEditModal from '../../components/common/ConfirmEditModal';

import ChevronLeftIcon from '../../assets/icons/ChevronLeft.png';

interface Avatar {
  id: number;
  imageUrl: any;
  borderColor: string;
}

const AvatarSelectionScreen: React.FC = () => {
  const [selectedAvatarId, setSelectedAvatarId] = useState<number | null>(null);
  const [isConfirmationModalVisible, setIsConfirmationModalVisible] = useState(false);
  const navigation = useNavigation();
  const { theme } = useTheme(); // Obtenha o tema do contexto
  const styles = getStyles(theme); // Obtenha os estilos com o tema

  const avatars: Avatar[] = [
    { id: 1, imageUrl: AvatarImage, borderColor: theme.primary },
    { id: 2, imageUrl: AvatarImage, borderColor: theme.primaryLight },
    { id: 3, imageUrl: AvatarImage, borderColor: theme.secondaryAccent },
    { id: 4, imageUrl: AvatarImage, borderColor: theme.error },
    { id: 5, imageUrl: AvatarImage, borderColor: '#B58B46' }, // Cor customizada, mantenho como está
  ];

  const handleBackButton = () => {
    navigation.goBack();
    console.log('Voltar pressionado');
  };

  const handleAvatarPress = (id: number) => {
    setSelectedAvatarId(id);
  };

  const handleConfirmSelection = () => {
    if (selectedAvatarId) {
      console.log('Avatar selecionado: ', selectedAvatarId);
      setIsConfirmationModalVisible(true);
    } else {
      console.warn('Nenhum avatar selecionado.');
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
              { borderColor: avatar.borderColor },
            ]}
            onPress={() => handleAvatarPress(avatar.id)}
          >
            <Image
              source={avatar.imageUrl}
              style={[
                styles.avatarImage,
                selectedAvatarId !== avatar.id && styles.deselectedAvatarImage,
              ]}
            />
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity
        style={styles.confirmButton}
        onPress={handleConfirmSelection}
      >
        <Text style={styles.confirmButtonText}>CONFIRMAR EDIÇÃO</Text>
      </TouchableOpacity>
      <ConfirmEditModal
        visible={isConfirmationModalVisible}
        onRequestClose={() => {
          setIsConfirmationModalVisible(false);
          navigation.pop(2); // Opcional: Voltar para a tela anterior ao fechar o modal
        }}
      />
    </View>
  );
};

export default AvatarSelectionScreen;
