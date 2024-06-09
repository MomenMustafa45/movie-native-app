import { Text, View } from "react-native";
import React from "react";
import {
  Bars3CenterLeftIcon,
  MagnifyingGlassCircleIcon,
} from "react-native-heroicons/solid";

const ScreenBar = () => {
  return (
    <View className="flex flex-row justify-between items-center">
      <Bars3CenterLeftIcon color={"white"} size={30} />
      <View className="flex flex-row ">
        <Text className="font-bold text-orange-500 text-2xl">M</Text>
        <Text className="text-white font-bold text-2xl">ovies</Text>
      </View>
      <MagnifyingGlassCircleIcon color={"white"} size={30} />
    </View>
  );
};

export default ScreenBar;
