import icons from '@/constants/icons';
import images from '@/constants/images';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

interface Props {
  onPress?:() => void;
}


export const FeaturedCard = ({onPress}:Props) => {
  return (
    <TouchableOpacity onPress={onPress} className='w-60 h-80 relative flex flex_col items-start'>
      <Image source={images.japan} className='size-full rounded-2xl' />
      <Image source={images.cardGradient} className='absolute bottom-0 size-full rounded-2xl' />
      <View className='px-3 py-1.5 absolute top-5 right-5 rounded-full bg-white/90 flex flex-row items-center'>
        <Image source={icons.star} className='size-3-5' />
        <Text className='ml-1 text-xs font-rubik-bold text-primary-300'>4.4</Text>
      </View>
    
    </TouchableOpacity>
  )
}


export const Card = () => {
  return (
    <View>
      <Text>Card</Text>
    </View>
  )
}

