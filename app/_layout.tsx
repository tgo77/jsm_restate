import GlobalProvider from "@/lib/global-provider";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import "./global.css";



export default function RootLayout() {

  const [fontsLoaded ] = useFonts({
    "Bubik-Bold": require("../assets/fonts/Rubik-Bold.ttf"),
    "Bubik-ExtraBold": require("../assets/fonts/Rubik-ExtraBold.ttf"),
    "Bubik-Light": require("../assets/fonts/Rubik-Light.ttf"),
    "Bubik-Medium": require("../assets/fonts/Rubik-Medium.ttf"),
    "Bubik-Regular": require("../assets/fonts/Rubik-Regular.ttf"),
    "Bubik-SemiBold": require("../assets/fonts/Rubik-SemiBold.ttf"),
    
  })

  useEffect(()=>{
    if(fontsLoaded){
      SplashScreen.hideAsync();
    }
  },[fontsLoaded])

  if(!fontsLoaded) return null;

  return (
    <GlobalProvider>
      <Stack screenOptions={{
        headerShown:false
      }} />
    </GlobalProvider>

);
}
