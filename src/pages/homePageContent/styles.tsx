
import { StyleSheet } from "react-native";  

export const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:"#f4f4f4"
    },
    cont:{
        width:"85%",
    },
    header:{
        alignItems: 'center',
        flexDirection:"row",
        justifyContent:"space-between",
        marginBottom:40
    },
    txtTitle:{
        fontSize:24,
        fontWeight:700
    },
    content:{
        
    },
    checkContainer: {
        width: 22,
        height: 22,
        borderRadius: 12,
        borderWidth: 2.5,
        marginTop: 5,
        marginRight: 5,
        borderColor: '#B58B46',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      },
      checkMark: { 
        color: 'white',
        fontSize: 13,
        backgroundColor: '#30C25D',
        width: 22,
        height: 22,
        textAlign: 'center',
        borderRadius: 11,
        lineHeight: 22,
      },
    conticon:{
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    icon:{
        width:19.5,
        height:18,
        marginBottom:15
    },
    task:{
        paddingTop: 20,
        paddingHorizontal: 10,
        backgroundColor:"white",
        width:"100%",
        borderRadius: 8,
        marginBottom: 15,
        elevation: 5
    },
    tasktitle:{        
        flexWrap: 'wrap',       
        gap: 6,
        flexDirection:"row",
        justifyContent:"space-between",
        marginBottom:10
    },
    txtTi:{
        fontSize:20,
        fontFamily: 'Roboto-SemiBold',
    },
    txt:{
        fontSize:16,
        fontFamily: 'Roboto-Regular',
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
        backgroundColor:"#E6E0F7"
    },
    btn:{
        marginTop:15,
        marginBottom:25,
        alignItems:"center"
    },
    txtbtn:{        
        borderRadius:8,
        paddingVertical:3,
        paddingHorizontal:10,
        backgroundColor:"#5B3CC4",
        color:"#E6E0F7",
        fontFamily: 'Roboto-Regular',
        fontSize:16, 
    },
    criar:{        
        alignItems:"center",
    },
    txtcriar:{
        marginTop:90,
        borderRadius:8,
        fontFamily: 'Roboto-SemiBold',
        fontSize:20,
        paddingHorizontal: 113,
        paddingVertical:12,
        color:"#FFFFFF",
        backgroundColor:"#5B3CC4"
    }
}) 

