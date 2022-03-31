import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity, Text} from 'react-native';

const CardNews = ({data}) => {
  const renderToWebsite = () => {
    console.log('data.item.url', data.item.urlToImage);
  };
  return (
    <TouchableOpacity onPress={renderToWebsite} style={styles.cardContainer}>
      <View style={styles.cardDescription}>
        <Text style={styles.cardTitle}>{data.item.title}</Text>
        <Text style={styles.cardContent}>
          {data.item.description ? data.item.description : 'No description'}
        </Text>
      </View>
      <View style={styles.cardContainerImage}>
        <Image
          source={
            data.item.urlToImage
              ? {uri: data.item.urlToImage}
              : {
                  uri: 'https://www.stillisolutions.com/wp-content/uploads/2017/09/no-image-box.png',
                }
          }
          style={styles.cardImage}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    paddingBottom: 10,
    borderBottomColor: '#ddd',
    borderBottomWidth: 2,

    marginVertical: 5,
    backgroundColor: '#fff',
    flexDirection: 'row',
  },
  cardContainerImage: {flex: 0.7},
  cardImage: {
    flex: 1,
    borderRadius: 10,
  },
  cardDescription: {
    flex: 1,
    marginHorizontal: 10,
  },
  cardTitle: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    marginVertical: 5,
  },
  cardContent: {
    fontSize: 14,
  },
});
export default CardNews;
