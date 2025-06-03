import React from "react";
import { View,Text, Button, ScrollView, StyleSheet,TouchableOpacity } from "react-native";

import { useNavigation } from "@react-navigation/native";

export default function SelectionScreen (){
    const navigation = useNavigation();

    return(
            <View style={styles.container}>                
                    <Button title="SingIn" onPress={() => navigation.navigate("SingIn")}></Button>
                    <Button title="Tab" onPress={() => navigation.navigate("Tab")}></Button>
                    <Button title="avatarSelect" onPress={() => navigation.navigate("avatarSelect")}></Button>
                    <Button title="SplashScreen" onPress={() => navigation.navigate("SplashScreen")}></Button>
                    <Button title="menuProfile" onPress={() => navigation.navigate("menuProfile")}></Button>
                    <Button title="HomePageContent" onPress={() => navigation.navigate("HomePageContent")}></Button>
                    <Button title="homePage" onPress={() => navigation.navigate("homePage")}></Button>
            </View>        
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',     
    },
  });