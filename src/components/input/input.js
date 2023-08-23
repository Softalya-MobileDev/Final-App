import React from "react";
import { View, Text, TextInput } from "react-native";
import inputStyles from "./input.style";

function Input({ label, placeholder, value,onType }) {
  return (
    <View style={inputStyles.inputContainer}>
      <Text style={inputStyles.label}>{label}</Text>
      <TextInput
        style={inputStyles.input}
        placeholder={placeholder}
        placeholderTextColor="#888"
        value={value}
        onChangeText={onType}
      />
    </View>
  );
}

export default Input;
