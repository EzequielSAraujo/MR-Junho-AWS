import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import homePage from "../pages/homePage";
import Menu from "../pages/menuProfile";
import { Image } from "react-native";


const Tab = createBottomTabNavigator();


export default function Routes(){
    return(        
          <Tab.Navigator>
            <Tab.Screen 
              name="home"
              component={homePage}
              options={{             
                
                headerShown:false, 
                tabBarShowLabel: false,    
                tabBarIcon: ({ focused }) => (
                  <Image
                    source={
                      focused
                        ? require('../assets/icons/listactive.png')
                        : require('../assets/icons/list1.png')
                    }
                    style={{ width: 56, height: 56, marginTop: 30}}
                  />
                ),
              }}
            />
            <Tab.Screen 
              name="Menu"
              component={Menu}
              options={{       
                headerShown:false, 
                tabBarShowLabel: false,        
                tabBarIcon: ({ focused }) => (
                  <Image
                    source={
                      focused
                        ? require('../assets/icons/bell(2).png')
                        : require('../assets/icons/bell(2).png')
                    }
                    style={{ width: 46, height: 46, marginTop: 30}}
                  />
                ),
              }}
            />
            <Tab.Screen 
              name="menu"
              component={Menu}
              options={{       
                headerShown:false, 
                tabBarShowLabel: false,        
                tabBarIcon: ({ focused }) => (
                  <Image
                    source={
                      focused
                        ? require('../assets/icons/menuactive.png')
                        : require('../assets/icons/menu.png')
                    }
                    style={{ width: 56, height: 56, marginTop: 30}}
                  />
                ),
              }}
            />
          </Tab.Navigator>        
    )
}