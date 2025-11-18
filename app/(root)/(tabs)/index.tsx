import { Card, FeaturedCard } from "@/components/Cards";
import Search from "@/components/Search";
import icons from "@/constants/icons";
import images from "@/constants/images";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
   <SafeAreaView className="h-full bg-white">
      <View className="px-5">
        <View className="mt-5 flex flex-row items-center justify-between">
            <View className="flex flex-row items-center">
              <Image source={images.avatar} className="size-12 rounded-full" />
              <View className="ml-2 flex flex-col items-start justify-center">
                  <Text className="text-xs font-rubik text-black-100">Good Morning</Text>
                  <Text className="text-base font-rubik-medium text-black-300">tgo77</Text>
              </View>
            </View>
              <Image source={icons.bell} className="size-6" />
        </View>
     
        <Search />
        <View className="my-5">
          <View className="flex flex-row items-center justify-between">
              <Text className="text-xl font-rubik-bold text-black-300">Featured</Text>
              <TouchableOpacity>
                <Text className="text-base font-rubik-bold text-primary-300">See All</Text>
              </TouchableOpacity>
          </View>
        </View>
        {/*  */}
       <FeaturedCard />
       <Card />

       
       </View>
   </SafeAreaView>
  );
}
