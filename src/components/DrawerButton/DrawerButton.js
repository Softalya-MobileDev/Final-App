import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const CustomDrawerContent = () => {

  return (
    <View>
      <TouchableOpacity onPress={null}>
        <Text>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomDrawerContent;