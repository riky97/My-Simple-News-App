import React, {useState, useEffect} from 'react';
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
    padding: 15,
    color: '#000',
    justifyContent: 'center',
  },
  active: {
    borderBottomColor: 'tomato',
    borderBottomWidth: 4,
  },
  textCategory: {
    color: '#000',
    fontSize: 16,
    textTransform: 'capitalize',
    fontWeight: '400',
  },
  textCategoryActive: {
    color: 'tomato',
    fontSize: 16,
    textTransform: 'capitalize',
    fontWeight: '600',
  },
});

export default CategoryTopHeadlines;
// backgroundColor: '#13a8a8',
// backgroundColor: '#138585',
// borderRadius: 10,
