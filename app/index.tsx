import { Text, View, Image, ScrollView } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import * as images from "../constants/images";

export default function Index() {
  return (
    <SafeAreaView className="bg-primary h-full">

    <ScrollView
      contentContainerStyle={{
        height: "100%",
      }}
    >
    <View className="w-full flex justify-center items-center h-full px-4">
      <Image 
        src={images.default.logo}
        className="w-[130px] h-[84px]"
        resizeMode="contain"
      />
      <Image 
        src={images.default.cards}
        className="w-[130px] h-[84px]"
        resizeMode="contain"
      />
      <Text className="text-xl">Unbarred Sports</Text>
      <Link style={{color:"blue"}} href="/home">
        Go to Home
      </Link>
    </View>

    </ScrollView>
    </SafeAreaView>
  );
}
