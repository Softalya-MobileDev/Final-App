import React from "react";
import { TouchableOpacity, Text } from "react-native";
import buttonStyles from "./button.styles";

function Button({ text, onPress }) {
  return (
    <TouchableOpacity style={buttonStyles.button} onPress={onPress}>
      <Text style={buttonStyles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
}

export default Button;
