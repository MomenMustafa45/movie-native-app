import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import Index from "./index";

export default function App() {
  return (
    <SafeAreaView className="flex-1">
      <StatusBar backgroundColor="white" />
      <Index />
    </SafeAreaView>
  );
}
