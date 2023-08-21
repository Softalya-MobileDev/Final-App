import * as React from 'react';
import { View } from 'react-native';
import { Avatar, Button, Card, Text } from 'react-native-paper';
import Counter from '../../components/CounterCard'

import styles from './Basket.styles'

const ProductCard = () => (
  <Card style={styles.card}>
    <Card.Content>
      <View style={styles.header}>
        <Avatar.Icon size={64} icon="folder" />

        <View style={styles.titleContainer}>
          <Text style={styles.title}>Ürün Adı</Text>
          <View style={styles.titleDivider} />
        </View>

        <Button icon="plus" mode="contained" compact={true} style={styles.addButton} />
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>Açıklama: Ürün açıklaması burada yazılacak.</Text>
        <Text style={styles.infoText}>Fiyat: $99.99</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Counter/>
      </View>
    </Card.Content>
  </Card>
);

export default ProductCard;
