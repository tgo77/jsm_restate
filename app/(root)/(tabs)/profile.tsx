import { settings } from '@/constants/data'
import icons from '@/constants/icons'
import images from '@/constants/images'
import { logout } from '@/lib/appwrite'
import { usesGlobalContent } from '@/lib/global-provider'
import React from 'react'
import { Alert, Image, ImageSourcePropType, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'


interface SettingsItemProps {
  icon:ImageSourcePropType;
  title:string;
  onPress?: () => void;
  textStyle?:string;
  showArrow?:boolean;
}


const SettingsItem = ({icon, title, onPress, textStyle, showArrow=true}:SettingsItemProps) => (
  <TouchableOpacity onPress={onPress}
    className='py-3 flex flex-row items-center justify-between'>
    <View className='flex flex-row items-center gap-3'>
      <Image source={icon} className='size-6' />
      <Text className={`text-lg font-rubik-medium text-black-300 ${textStyle}`}>
        {title}
      </Text>
    </View>
    {
      showArrow && <Image source={icons.rightArrow} className='size-5' />
    }
  </TouchableOpacity>

)


const Profile = () => {
  const {user, refetch} = usesGlobalContent();

  const handleLogout = async() =>{
    const result = await logout();
    if(result){
      Alert.alert("Success", "You have been logged ut successfully");
      refetch();
    }else{
      Alert.alert("Error", `An error occurred while logging out`)
    }
  }

  return (
    <SafeAreaView className=' bg-white h-full'>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName='pb-32 px-7'
      >
        <View className='mt-5 flex flex-row justify-between '>
            <Text className='text-xl font-rubik-bold'>
              profile
            </Text>
            <Image source={icons.bell} className='size-5'/>
        </View>
        <View className='mt-5 flex flex-row justify-center'>
          <View className='mt-5 relative flex flex-col items-center'>
              <Image source={images.avatar} resizeMode='contain' 
                className='size-44 relative rounded-full'
              />
              <TouchableOpacity className='absolute bottom-11 right-2'>
                <Image source={icons.edit} className='size-9' />
              </TouchableOpacity>
              <Text className='mt-2 text-2xl font-rubik-bold'> tgo77 | INCON </Text>
          </View>
        </View>
         <View className='mt-10 flex flex-col '>
            <SettingsItem icon={icons.calendar} title='My Bookings' />
            <SettingsItem icon={icons.wallet} title='Payment' />
         </View>

         <View className='mt-5 pt-5 border-t border-primary-200 flex flex-col'>
            {
              settings.slice(2).map((item,index) => (
                <SettingsItem key={index} {...item} />
              ))
            }
         </View>
         {/* 로그아웃 */}
         <View className='mt-5 pt-5 border-t border-primary-200 flex flex-col'>
            <SettingsItem icon={icons.logout} title='Logout' 
              textStyle='text-danger' 
              showArrow={false} 
              onPress={handleLogout}
            />
         </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Profile

const styles = StyleSheet.create({})