import icons from '@/constants/icons';
import { Tabs } from 'expo-router';
import React from 'react';
import { Image, Text, View } from 'react-native';

interface TabIconProps {
    icon:any;
    title:string;
    focused:boolean
};


const TabIcon = ({icon, title, focused}:TabIconProps) => {
    const titleStyle = focused 
        ? `text-primary-300 font-rubik-medium` 
        : `text-black-200 font-rubik`;
    return (
    <View className='flex-1 mt-3 flex flex-col items-center'>
        <Image source={icon} tintColor={focused ? "#0061ff" : "#666876"} 
            resizeMode='contain'
        className='size-6' />
        <Text className={`w-full mt-1 text-xs text-center ${titleStyle}`}>{title}</Text>
    </View>
    )
}

const TabsLayout = () => {
  return (
    // <SafeAreaView>
    <Tabs
        screenOptions={{
            tabBarShowLabel:false,
            tabBarStyle:{
                backgroundColor:"write",
                position:"absolute",
                borderTopColor:"#0061FF1A",
                borderTopWidth:1,
                minHeight:70
            }
        }}
    >
        <Tabs.Screen 
            name='index'
            options={{
                title:"Home",
                headerShown:false,
                tabBarIcon:({focused}) => (
                    <TabIcon icon={icons.home} title='Home' focused={focused}  />
                )
            }}
        />

        <Tabs.Screen 
            name='explore'
            options={{
                title:"Explore",
                headerShown:false,
                tabBarIcon:({focused}) => (
                    <TabIcon icon={icons.search} title='Explore' focused={focused}  />
                )
            }}
        />
        <Tabs.Screen 
            name='profile'
            options={{
                title:"Profile",
                headerShown:false,
                tabBarIcon:({focused}) => (
                    <TabIcon icon={icons.person} title='Profile' focused={focused}  />
                )
            }}
        />
    </Tabs>
    
  )
}

export default TabsLayout

