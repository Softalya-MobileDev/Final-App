import React ,{useState} from "react";
import { View,SafeAreaView,Text, FlatList, ScrollView,TouchableOpacity,Image} from "react-native";

import styles from './Anasayfa.styles'

import ProductsCard from "./ProductsCard/ProductsCard";

import products from '../../products.json'
import category from "../../category.json";
import banner from '../../food_banner.json';


function Anasayfa(props){
    const renderProducts=({item})=><ProductsCard product={item}/>
    const keyEextractorF=((item)=>item.id.toString())

    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleCategorySelect = (categoryID) => {
        setSelectedCategory(categoryID === selectedCategory ? null : categoryID);
    };

    const goBasket = () => {
        props.navigation.navigate('Basket');
    ;
    }
    

    return(
        <SafeAreaView style={styles.container} >
            <Text onPress={goBasket}>selam</Text>
            <Image source={{ uri: banner[0].imageUrl }} style={styles.banner} />

            <FlatList
            ListHeaderComponent={()=>
                <View style={{ backgroundColor: 'yellow', padding: 10 }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {category.map(FoodCategory=>
                <TouchableOpacity 
                key={FoodCategory.categoryID} 
                style={{ marginRight: 10 }}
                onPress={() => handleCategorySelect(FoodCategory.categoryID)}> 
                    <Text style={{ color: 'red' , fontSize:22 }}>
                        {FoodCategory.categoryName}
                    </Text>
                </TouchableOpacity>
                )
            }
            </ScrollView>
            </View>
        }
        keyExtractor={keyEextractorF}
        data={products.filter(product => selectedCategory === null || product.category === selectedCategory)}
        renderItem={renderProducts}
        numColumns={2}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        />

        
        </SafeAreaView>
    )
}
export default Anasayfa;