import { StyleSheet, Text, View, Image } from 'react-native'
import { Redirect, Tabs } from "expo-router";
import React from 'react'
import * as icons from "../../constants/icons";

const TabIcon = ({icon, color, name, focused}: {icon:any , color: string, name: string, focused: boolean}) => {
    return (
      <View className="flex items-center justify-center">
        <Image
          source={icon}
          resizeMode="contain"
          tintColor={color}
          className="w-5 h-5"
        />
        <Text
          className={`${focused ? "font-psemibold" : "font-pregular"} text-xs`}
          style={{ color: color }}
        >
        </Text>
      </View>
    );
  };

const TabsLayout = () => {
    {
        /*
            tabBarIcon is a property inside Tabs.Screen and describes how a tab icon will be displayed
            this property has some default props {focused, color} are some of them
        */
    }
  return (
    <>
        <Tabs
            screenOptions={{
                tabBarStyle:{
                    backgroundColor: "#161622",
                    height: 85
                }
            }}
            >
            <Tabs.Screen 
                name='home' 
                options={{
                    title: "Home",
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                          icon={icons.default.home}
                          color={color}
                          name="Home"
                          focused={focused}
                        />
                      ),

                }}
            />
            <Tabs.Screen 
                name='bookmark' 
                options={{
                    title: "Bookmark",
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                          icon={icons.default.bookmark}
                          color={color}
                          name="Bookmark"
                          focused={focused}
                        />
                      ),
                }}
            />
            <Tabs.Screen 
                name='create' 
                options={{
                    title: "Create",
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                          icon={icons.default.plus}
                          color={color}
                          name="Create"
                          focused={focused}
                        />
                      ),
                }}
            />
            <Tabs.Screen 
                name='profile' 
                options={{
                    title: "Profile",
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                          icon={icons.default.profile}
                          color={color}
                          name="Profile"
                          focused={focused}
                        />
                      ),
                }}
            />
        </Tabs> 
    </>
  )
}

export default TabsLayout

const styles = StyleSheet.create({})