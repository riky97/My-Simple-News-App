import React, {useState} from 'react';
import {FlatList, Text, TouchableOpacity, StyleSheet, View} from 'react-native';

const category = [
  {
    id: 0,
    category: 'general',
  },
  {
    id: 1,
    category: 'business',
  },
  {
    id: 2,
    category: 'entertainment',
  },
  {
    id: 3,
    category: 'health',
  },
  {
    id: 4,
    category: 'science',
  },
  {
    id: 5,
    category: 'sports',
  },
  {
    id: 6,
    category: 'technology',
  },
];
const Button = ({item, onPress, selectedId}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={
        item.item.category === selectedId
          ? [styles.buttonCategory, styles.active]
          : [styles.buttonCategory]
      }>
      <Text style={styles.textCategory}>{item.item.category}</Text>
    </TouchableOpacity>
  );
};

const CategoryTopHeadlines = ({onPress, selectedId}) => {
  return (
    <View style={styles.categoryList}>
      <FlatList
        horizontal
        data={category}
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
    borderBottomWidth: 4,
  },
  textCategory: {
    color: '#000',
    fontSize: 16,
    textTransform: 'capitalize',
    fontWeight: '400',
  },
});

export default CategoryTopHeadlines;
// backgroundColor: '#13a8a8',
// backgroundColor: '#138585',
// borderRadius: 10,
