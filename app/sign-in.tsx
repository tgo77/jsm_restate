import icons from '@/constants/icons'
import images from '@/constants/images'
import { login } from '@/lib/appwrite'
import { usesGlobalContent } from '@/lib/global-provider'
import { Redirect } from 'expo-router'
import React from 'react'
import { Alert, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
const SignIn = () => {

  const {refetch, loading, isLoggedin} =usesGlobalContent();

  if(!loading && isLoggedin) return <Redirect href={"/"} />

  const handleLogin = async() =>{
    const result = await login();
    if(result){
      console.log(`Login Success`);
      refetch();
    }else{
      Alert.alert(`Error`, 'Failed to login');
    }
  }

  return (
    <SafeAreaView className='bg-white h-full'>
      <ScrollView
        contentContainerClassName='h-full'
      >
        <Image source={images.onboarding} 
          className='w-full h-4/6' 
          resizeMode='contain' />

          {/*  */}
          <View className='px-10'>
            <Text className='text-base font-rubik text-center text-black-200 uppercase'>Welcome to ReState</Text>
            <Text className='mt-2 text-3xl font-rubik-bold text-black-300 text-center'>
              Let's Get You Closer to {"\n"}
              <Text className='text-primary-300'>Your Ideal Home</Text>
            </Text>
            <Text className='mt-12 text-lg font-rubik text-black-200 text-center'>
              Login to ReState with Google
            </Text>
            <TouchableOpacity onPress={handleLogin}
              className='w-full  mt-5 py-4 bg-white shadow-md shadow-zinc-300 rounded-full '
            >
              <View className='flex flex-row items-center justify-center'>
                <Image source={icons.google} className='w-5 h-5' resizeMode='contain' />
                <Text className='ml-2 text-lg font-rubik-medium text-black-300 '>Continue with Google</Text>
              </View>
            </TouchableOpacity>
          </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn

const styles = StyleSheet.create({})