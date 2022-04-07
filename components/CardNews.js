import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  Linking,
} from 'react-native';

const CardNews = ({data}) => {
  const openUrl = url => {
    const handlePress = async url => {
      //console.log('data.item.url', url.split(' '));
      await Linking.openURL(url);
      // const supported = await Linking.canOpenURL(url);
      // console.log('supported', supported);
      // if (supported) {
      //   await Linking.openURL(url);
      // } else {
      //   Alert.alert(`Don't know how to open this URL: ${url}`);
      // }
    };
    handlePress(url);
  };

  const publish = publishDate => {
    const split = publishDate.split('T');
    const date = split[0];
    return date;
  };
  return (
    <TouchableOpacity
      onPress={() => openUrl(data.item.url)}
      style={styles.cardContainer}>
      <View style={styles.cardContainerImage}>
        <Image
          source={
            data.item.urlToImage
              ? {uri: data.item.urlToImage}
              : require('../assets/no-image-box.png')
          }
          style={data.item.urlToImage ? styles.cardImage : styles.cardNoImage}
        />
      </View>
      <View style={styles.cardDescription}>
        <Text style={styles.cardTitle}>{data.item.title}</Text>
        <Text style={styles.cardContent}>
          {data.item.author ? data.item.author : 'No author'}
        </Text>
        <Text style={styles.cardPubblication}>
          {publish(data.item.publishedAt)}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    padding: 5,
    marginVertical: 8,
    marginHorizontal: 4,
    backgroundColor: '#fff',
    flexDirection: 'column',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    height: 300,
  },
  cardContainerImage: {flex: 1},
  cardImage: {
    flex: 1,
    borderRadius: 10,
  },
  cardNoImage: {
    width: '100%',
  },
  cardDescription: {
    marginHorizontal: 10,
  },
  cardTitle: {
    color: '#000',
    paddingTop: 5,
    fontSize: 16.5,
    fontFamily: 'Aeroport-Bold',
  },
  cardContent: {
    fontSize: 14,
    paddingTop: 5,
    color: '#E3CA9A',
    fontFamily: 'Aeroport',
  },
  cardPubblication: {
    paddingTop: 5,
    color: '#0005',
    fontFamily: 'Aeroport',
  },
});
export default CardNews;
