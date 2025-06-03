import { StyleSheet } from 'react-native';
import { ThemeColors } from '../../pages/preferencesMenu/themeContext'; // Importe a interface ThemeColors

const getStyles = (theme: ThemeColors) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
      padding: 20,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 30,
      justifyContent: 'space-between',
    },
    backButton: {
      backgroundColor: theme.secondaryText,
      borderRadius: 10,
      paddingVertical: 13,
      paddingHorizontal: 12,
    },
    backText: {
      color: theme.secondaryBg,
      fontFamily: 'Roboto-Medium',
      fontSize: 18,
    },
    headerTitle: {
      fontSize: 16,
      fontFamily: 'Roboto-Regular',
      color: theme.mainText,
    },
    button: {
      backgroundColor: theme.secondaryBg,
      borderWidth: 1,
      borderColor: theme.secondaryBg,
      borderRadius: 12,
      paddingVertical: 25,
      paddingHorizontal: 24,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    cardText: {
      fontSize: 18,
      fontFamily: 'Roboto-Medium',
      color: theme.mainText,
    },
    arrow: {
      fontSize: 20,
      color: theme.mainText,
    },

    // MODAL
    modalOverlay: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.5)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalContainer: {
      backgroundColor: theme.secondaryBg,
      borderRadius: 20,
      padding: 20,
      width: '85%',
      alignItems: 'center',
    },
    modalTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 20,
      color: theme.mainText,
    },
    themeOptions: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      gap: 20,
      marginBottom: 25,
    },
    themeBox: {
      borderWidth: 2,
      borderColor: theme.secondaryText,
      borderRadius: 12,
      padding: 10,
      backgroundColor: theme.background,
    },
    selected: {
      borderColor: theme.primary,
    },
    icon: {
      width: 80,
      height: 80,
    },
    modalButtons: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      gap: 10,
      width: '100%',
    },
    modalButton: {
      flex: 1,
      padding: 12,
      borderRadius: 10,
      alignItems: 'center',
    },
    cancelButton: {
      backgroundColor: theme.primaryLight,
      borderColor: theme.primary,
    },
    confirmButton: {
      backgroundColor: theme.secondaryAccent,
    },
    cancelButtonText: {
      color: theme.primary,
      fontWeight: 'bold',
    },
    confirmButtonText: {
      color: theme.secondaryBg,
      fontWeight: 'bold',
    },
  });
};

export default getStyles;