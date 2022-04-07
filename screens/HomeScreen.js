import React, {useEffect, useState, useRef} from 'react';

import {StyleSheet, Text, View, FlatList, RefreshControl} from 'react-native';

//API
import {getTodayPopularNews} from '../api/getTodayPopularNews';

//COMPONENT
import CardNews from '../components/CardNews';
import Header from '../components/Header';

const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

const HomeScreen = ({navigation}) => {
  const flatlistRef = useRef();
  const [selectedId, setSelectedId] = useState('general');
  const [loading, setLoading] = useState(false);
  const [popularNews, setPopularNews] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [route, setRoute] = useState('Home');

  useEffect(() => {
    response(selectedId);
  }, []);
  const response = async selectedId => {
    const data = await getTodayPopularNews(selectedId);
    //console.log(data);
    if (!data.error) {
      setPopularNews(data.data);
    }
  };

  const onRefresh = React.useCallback(async selectedId => {
    setRefreshing(true);
    try {
      response(selectedId);
      wait(1000).then(() => {
        setRefreshing(false);
      });
    } catch (error) {
      wait(1000).then(() => {
        setRefreshing(false);
      });
    }

    wait(1000).then(() => {
      setRefreshing(false);
    });
  }, []);

  //call when change category section
  const scrollToIndex = () => {
    let index = 0;
    flatlistRef.current.scrollToIndex({animated: true, index: index});
  };
  //selectedId
  const changeSection = ele => {
    setSelectedId(ele);
    response(ele);
    scrollToIndex();
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', ele => {
      setRoute(ele.target.split('-')[0]);
    });

    return unsubscribe;
  }, [navigation]);

  const title = 'Popular ' + selectedId + ' news';
  return (
    <>
      <Header onPress={changeSection} selectedId={selectedId} route={route} />
      <View style={styles.container}>
        {popularNews.length > 0 && (
          <FlatList
            style={styles.list}
            ListHeaderComponent={<Text style={styles.header}>{title}</Text>}
            ListFooterComponent={<Text></Text>}
            data={popularNews}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={() => onRefresh(selectedId)}
              />
            }
            keyExtractor={(item, index) => index + item}
            renderItem={(item, index) => {
              return <CardNews data={item} />;
            }}
            ref={flatlistRef}
          />
        )}
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  list: {
    padding: 10,
  },
  header: {
    fontSize: 23,
    color: '#000',

    marginVertical: 10,
    marginLeft: 6,
    fontFamily: 'Aeroport-Bold',
  },
});
export default HomeScreen;
