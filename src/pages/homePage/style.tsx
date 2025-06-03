import { StyleSheet } from 'react-native';
import { ThemeColors } from '../../pages/preferencesMenu/themeContext';

const createStyles = (theme: ThemeColors) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.background,
        paddingTop: 40,
        paddingHorizontal: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 30,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: theme.mainText,
        width: 85,
        height: 28,
    },
    logo3: { // Avatar
        width: 50,
        height: 50,
        borderRadius: 20,
    },
    content: {
        alignItems: 'center',
        flex: 1,
        width: '100%',
    },
    logo1: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
        marginBottom: 20,
        marginTop: '20%',
    },
    message: {
        fontSize: 16,
        color: theme.secondaryText,
        marginBottom: 30,
        textAlign: 'center',
    },
    button: {
        backgroundColor: theme.primary,
        width: '100%',
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
        marginTop: 20,
        marginBottom: 20,
    },
    buttonText: {
        color: theme.secondaryBg,
        fontSize: 20,
        fontWeight: 'bold',
    },
    txtTitle:{
        fontSize:24,
        fontWeight: '700',
        color: theme.mainText,
    },
    containerTesk:{
        width:"100%",
        marginBottom: 15,
    },
    contentTesk:{
        backgroundColor: theme.secondaryBg,
        padding:15,
        width:"100%",
        borderRadius:8,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    txth1:{
        color: theme.mainText,
        fontSize:20,
        fontWeight:"bold",
        flex: 1,
        marginRight: 10,
    },
    txtp:{
        fontSize:16,
        marginTop: 15,
        color: theme.secondaryText,
    },
    taskCompletedText: {
        textDecorationLine: 'line-through',
        color: theme.secondaryText,
    },
    contSpan:{
        marginTop:10,
        flexDirection:"row",
        justifyContent:"space-between",
        overflow: "hidden"
    },
    span:{
        fontSize:12,
        margin:5,
        paddingHorizontal:8,
        paddingVertical:2,
        borderRadius:8,
        backgroundColor: theme.primaryLight,
        color: theme.primary,
    },
    btn:{
        marginTop:15,
        alignSelf:"center",
    },
    txtbtn:{
        borderRadius:8,
        paddingVertical:5,
        paddingHorizontal:15,
        backgroundColor: theme.primary,
        color: theme.primaryLight,
        fontWeight: '400',
        fontSize:16
    },
    checkContainer: {
        width: 24,
        height: 24,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#B58B46',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    checkContainerChecked: {
        backgroundColor: theme.secondaryAccent,
        borderColor: theme.secondaryAccent,
    },
    checkMark: {
        color: theme.secondaryBg,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        lineHeight: 20,
    },
    tasktitle:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
    }
});

export default createStyles;