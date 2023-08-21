import React from "react";
import { View,Image,Text } from 'react-native';
import styles from './ProductsCard.styles';

const ProductsCard=({product})=>{
    return(
        <View style={styles.container}>
            <View >
                <View>
                <Image style={styles.image} source={{uri: product.imageUrl}}/>
                </View>
                <Text style={styles.title}>{product.name}</Text>
                <Text style={styles.price}>{product.price}</Text>
                <Text style={styles.category}>{product.categoryID}</Text> 
            </View>
        </View>
    );
};

export default ProductsCard