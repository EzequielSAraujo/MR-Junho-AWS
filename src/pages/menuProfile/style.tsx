import { StyleSheet } from 'react-native';
import { useTheme } from '../../pages/preferencesMenu/themeContext';

const createStyles = (theme) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
    paddingHorizontal: 0,
  },
  header: {
    alignItems: 'center',
    paddingVertical: 35,
  },
  avatarContainer: {
    width: 150,
    height: 150,
    borderRadius: 50,
    overflow: 'hidden',
    marginBottom: 15,
  },
  avatar: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  name: {
    fontSize: 18,
    marginBottom: 5,
    fontFamily: 'Roboto-Medium',
    color: theme.mainText,
  },
  email: {
    fontSize: 16,
    color: theme.mainText,
    marginBottom: 5,
    fontFamily: 'Roboto-Regular',
  },
  phone: {
    fontSize: 16,
    color: theme.mainText,
    fontFamily: 'Roboto-Regular',
  },
  actionsScrollView: {
    marginTop: 5,
    marginBottom: 5,
    paddingHorizontal: 25,
  },
  actionsContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 0,
  },
  actionButton: {
    backgroundColor: theme.secondaryBg,
    borderRadius: 12,
    paddingVertical: 13,
    paddingHorizontal: 13,
    alignItems: 'center',
    width: 130,
    height: 130,
    marginRight: 20,
    elevation: 4,
  },
  actionContent: {
    alignItems: 'flex-start',
  },
  actionIcon: {
    width: 20,
    height: 20,
    marginBottom: 5,
    resizeMode: 'contain',
  },
  actionText: {
    fontSize: 18,
    color: theme.mainText,
    textAlign: 'left',
    alignContent: 'center',
    alignItems: 'center',
    fontFamily: 'Roboto-Medium',
    marginBottom: 15,
  },
  menuContainer: {
    marginBottom: 90,
  },
  menuItem: {
    alignSelf: 'center',
    backgroundColor: theme.secondaryBg,
    borderRadius: 12,
    paddingVertical: 25,
    paddingHorizontal: 25,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 3,
    width: 340,
  },
  menuText: {
    fontSize: 18,
    fontFamily: 'Roboto-Medium',
    color: theme.mainText,
  },
  menuIcon: {
    fontSize: 20,
    color: theme.mainText,
  },
});

const useStyles = () => {
  const { theme } = useTheme();
  return createStyles(theme);
};

export default useStyles;