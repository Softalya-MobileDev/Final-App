import React, { useState, useEffect } from "react";
import { View, SafeAreaView, Text, FlatList, ScrollView, TouchableOpacity, Image } from "react-native";

import styles from './Anasayfa.styles'

import ProductsCard from "../../components/ProductsCard/ProductsCard"

import products from "../../products.json"
import category from "../../category.json";
import banner from '../../food_banner.json';

function Anasayfa() {
    const renderProducts = ({ item }) => <ProductsCard product={item} />
    const keyEextractorF = ((item) => item.id.toString())

    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleCategorySelect = (categoryName) => {
        setSelectedCategory(categoryName);
    };

    return (
        <SafeAreaView style={styles.container} >
            <Image source={{ uri: banner[0].imageUrl }} style={styles.banner} />

            <FlatList
                ListHeaderComponent={() => (
                    <View style={{backgroundColor: "lightgray", padding: 10 }}>
                      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {category.map(FoodCategory => (
                          <TouchableOpacity
                          key={FoodCategory.categoryID}
                          style={{
                            marginRight: 10,
                            padding: 10,
                            backgroundColor: 'yellow', 
                            borderRadius: 5, 
                            padding: 5, 
                          }}
                          onPress={() => handleCategorySelect(FoodCategory.categoryName)}>
                          <Text style={{ color: 'red', fontSize: 20 }}>
                            {FoodCategory.categoryName}
                          </Text>
                          </TouchableOpacity>
                        ))}
                      </ScrollView>
                    </View>
                  )}
                  
                keyExtractor={keyEextractorF}
                data={products.filter(product => product.category === selectedCategory)}
                renderItem={renderProducts}
                numColumns={2}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
            />


        </SafeAreaView>
    )
}
export default Anasayfa;
