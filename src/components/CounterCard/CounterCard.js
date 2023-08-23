import React,{useState} from "react";
import { View,Text,Button} from "react-native";
import styles from './Counter.styles'

const Counter = () => {
    const [count, setCount] = useState(0);
  
    const increment = () => {
      setCount(count + 1);
    };
  
    const decrement = () => {
      if (count > 0) {
        setCount(count - 1);
      }
    };
  
    return (
      <View>
        <Button title="-" onPress={decrement} />
        <Text style={styles.button}>{count}</Text>
        <Button title="+" onPress={increment} />
      </View>
    );
  };
  
  export default Counter;