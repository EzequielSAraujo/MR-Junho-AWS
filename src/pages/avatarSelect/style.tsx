import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        paddingTop: 70,
        backgroundColor: '#f4f4f4',
    },
    titleContainer: {
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        color: '#000',
        textAlign: 'center',
        fontFamily: 'Roboto-Bold',
    },
    subtitle: {
        fontSize: 13,
        fontWeight: 400,
        color: '#000',
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
        backgroundColor: '#000',
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
        backgroundColor: '#5B3CC4',
        paddingVertical: 11,
        paddingHorizontal: 70,
        borderRadius: 8,
    },
    confirmButtonText: {
        color: '#fff',
        fontSize: 20,
        fontFamily: 'Roboto-SemiBold',
    },
});

export default styles;