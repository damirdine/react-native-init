import React from "react";
import { useState } from "react";
import { Pressable, Text, View, TextInput } from "react-native";

export default function Index() {
  const [text, onChangeText] = useState("World");
  const onPress = () => alert("hello " + text);
  return (
    <View className="bg-red-50 flex-1 justify-center items-center">
      <Text className="text-red-700 mb-2">Tape your name here.</Text>
      <TextInput
        className="p-2 bg-white mb-4 placeholder-gray-400"
        placeholder="tape your name here"
        onChangeText={(text) => onChangeText(text)}
        onSubmitEditing={onPress}
      ></TextInput>
      <Pressable className="p-5 bg-red-400 text-white" onPress={onPress}>
        <Text>Hello</Text>
      </Pressable>
    </View>
  );
}
