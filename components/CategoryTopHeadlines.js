import React from 'react';
import {FlatList, Text, TouchableOpacity, StyleSheet, View} from 'react-native';

import getCategory from '../assets/category.json';

const Button = ({item, onPress, selectedId}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={
        item.item.category === selectedId
          ? [styles.buttonCategory, styles.active]
          : [styles.buttonCategory]
      }>
      <Text
        style={
          item.item.category === selectedId
            ? styles.textCategoryActive
            : styles.textCategory
        }>
        {item.item.category}
      </Text>
    </TouchableOpacity>
  );
};

const CategoryTopHeadlines = ({onPress, selectedId}) => {
  return (
    <View style={styles.categoryList}>
      <FlatList
        horizontal
        data={getCategory.categories}
        keyExtractor={(item, index) => item.id}
        renderItem={(item, index) => {
          return (
            <Button
              item={item}
              onPress={() => onPress(item.item.category)}
              selectedId={selectedId}
            />
          );
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  categoryList: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  buttonCategory: {
    padding: 12,
    color: '#000',
    justifyContent: 'center',
    borderBottomColor: '#0005',
    borderBottomWidth: 4,
  },
  active: {
    borderBottomColor: 'tomato',
    borderBottomWidth: 4,
  },
  textCategory: {
    color: '#000',
    fontSize: 16,
    textTransform: 'capitalize',
    fontFamily: 'Aeroport-Medium',
  },
  textCategoryActive: {
    color: 'tomato',
    fontSize: 16,
    textTransform: 'capitalize',
    fontFamily: 'Aeroport-Bold',
  },
});

export default CategoryTopHeadlines;
