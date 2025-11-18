import { usesGlobalContent } from '@/lib/global-provider';
import { Slot } from 'expo-router';
import React from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const AppLayout = () => {

    const {loading, isLoggedin} = usesGlobalContent()

    if(loading){
        return (
            <SafeAreaView className='h-full bg-white flex justify-center items-center'>
            <ActivityIndicator size={"large"} className='text-primary-300' />
            </SafeAreaView>
        )
    }

    //if(!isLoggedin) return <Redirect href={"/sign-in"} />
  
    return <Slot />

}

export default AppLayout;

const styles = StyleSheet.create({})