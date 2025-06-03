import { StyleSheet } from "react-native";
import { ThemeColors } from '../../pages/preferencesMenu/themeContext';

const getStyles = (theme: ThemeColors) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      paddingTop: 30,
      backgroundColor: theme.background,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 30,
      width: "100%",
      justifyContent: 'space-between',
      paddingHorizontal: 32,
    },
    titleHead: {
      fontSize: 16,
      fontFamily: 'Roboto-Regular',
      color: theme.mainText,
    },
    backButton: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 12,
      paddingHorizontal: 12,
      backgroundColor: theme.secondaryText,
      borderRadius: 12,
    },
    backButtonIcon: {
      width: 10,
      height: 10,
      marginRight: 8,
    },
    backButtonText: {
      color: theme.secondaryBg,
      fontFamily: 'Roboto-Medium',
      fontSize: 18,
    },
    titleContainer: {
      marginBottom: 20,
    },
    title: {
      fontSize: 26,
      color: theme.mainText,
      textAlign: 'center',
      fontFamily: 'Roboto-Bold',
    },
    subtitle: {
      fontSize: 13,
      fontWeight: 400,
      color: theme.mainText,
      textAlign: 'center',
      fontFamily: 'Roboto',
    },
    avatarContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      marginBottom: 30,
      paddingHorizontal: 20,
    },
    avatarButton: {
      margin: 5,
      borderRadius: 50,
      overflow: 'hidden',
      borderWidth: 3,
      backgroundColor: '#000', // Mantive preto.
    },
    avatarImage: {
      width: 90,
      height: 90,
      borderRadius: 40,
    },
    deselectedAvatarImage: {
      opacity: 0.4,
    },
    confirmButton: {
      backgroundColor: theme.primary,
      paddingVertical: 11,
      paddingHorizontal: 70,
      borderRadius: 8,
    },
    confirmButtonText: {
      color: theme.secondaryBg,
      fontSize: 20,
      fontFamily: 'Roboto-SemiBold',
    },
  });
};

export default getStyles;
