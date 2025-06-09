import { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Alert } from 'react-native';
import styles from './style';
import AvatarImage from '../../assets/imgs/Ellipse1.png';
import AvatarImage2 from '../../assets/imgs/Ellipse2.png';
import AvatarImage3 from '../../assets/imgs/Ellipse3.png';
import AvatarImage4 from '../../assets/imgs/Ellipse4.png';
import AvatarImage5 from '../../assets/imgs/Ellipse5.png';

import { useNavigation } from '@react-navigation/native';

interface Avatar {
        id: number;
        imageUrl: any;
        borderColor: string;
}

const AvatarSelectionScreen: React.FC = () => {
        const [selectedAvatarId, setSelectedAvatarId] = useState<number | null>(null);

        const avatars: Avatar[] = [
                {id: 1, imageUrl: AvatarImage, borderColor: '#5B3CC4'},
                {id: 2, imageUrl: AvatarImage2, borderColor: '#E6E0F7'},
                {id: 3, imageUrl: AvatarImage3, borderColor: '#32C25B'},
                {id: 4, imageUrl: AvatarImage4, borderColor: '#E63946'},
                {id: 5, imageUrl: AvatarImage5, borderColor: '#B58B46'},
        ];

        const handleAvatarPress = (id: number) => {
                setSelectedAvatarId(id);
        };

        const handleConfirmSelection = () => {
                if (selectedAvatarId) {
                        console.log('Avatar selecionado: ', selectedAvatarId);
                        Alert.alert("Conta criada com sucesso")
                        navigation.navigate("SingIn");
                }
        }

        const navigation = useNavigation();

        return (
                <View style={styles.container}>

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
                                                {borderColor: avatar.borderColor },
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
                                <Text style={styles.confirmButtonText}>CONFIRMAR SELEÇÃO</Text>
                        </TouchableOpacity>
                </View>
        );
};

export default AvatarSelectionScreen;