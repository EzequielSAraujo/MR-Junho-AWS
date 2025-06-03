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
      paddingHorizontal: 10,
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
    titleHead: {
      fontSize: 16,
      fontFamily: 'Roboto-Medium',
      color: theme.mainText,
    },
    formContainer: {
      marginBottom: 30,
    },
    label: {
      fontSize: 12,
      color: theme.mainText,
      fontFamily: 'Roboto-Medium',
      marginBottom: 5,
    },
    input: {
      borderWidth: 2,
      borderColor: theme.primary,
      borderRadius: 8,
      padding: 12,
      marginBottom: 15,
      backgroundColor: theme.secondaryBg,
      fontSize: 16,
      fontFamily: 'Roboto-Regular',
      color: theme.mainText,
    },
    errorText: {
      color: theme.error,
      fontSize: 12,
      marginBottom: 10,
      fontFamily: 'Roboto-Regular',
    },
    continueButton: {
      backgroundColor: theme.primary,
      borderRadius: 8,
      paddingVertical: 15,
      alignItems: 'center',
    },
    continueButtonText: {
      color: theme.secondaryBg,
      fontFamily: 'Roboto-SemiBold',
      fontSize: 18,
    },
  });
};

export default getStyles;
