import { useState } from "react";
import { Pressable, Text, View , TextInput} from "react-native";

export default function Index() {
  const [text, onChangeText] = useState('Useless Text');
  return (
    <View className="bg-red-50 flex-1 justify-center items-center">
      <Text className="text-red-700">
        Edit app/index.tsx to edit this screen.
      </Text>
      <TextInput className="p-2" placeholder="tape your name here" onChangeText={(text)=> onChangeText(text)} onSubmitEditing={()=> alert("TEST SUBMiT")}></TextInput>
      <Pressable className="p-5 bg-red-400"
      onPress={()=> alert("hello " + text)}>Hello</Pressable>
    </View>
  );
}
