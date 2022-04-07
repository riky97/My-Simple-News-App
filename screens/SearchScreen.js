import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList, RefreshControl} from 'react-native';

//API
import {getSearchNews} from '../api/getSearchNews';

//COMPONENT
import CardNews from '../components/CardNews';
import Header from '../components/Header';

const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

const SearchScreen = ({navigation}) => {
  const [search, setSearch] = useState('');
  const [searchNewsByName, setSearchNewsByName] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [route, setRoute] = useState('Search');

  const updateSearch = search => {
    setSearch(search);
  };
  const response = async search => {
    const data = await getSearchNews(search);
    console.log('data', data);
    if (!data.error) {
      setSearchNewsByName(data.data);
    }
  };
  const searchNews = () => {
    console.log('search', search);
    response(search);
  };

  const onRefresh = React.useCallback(async search => {
    setRefreshing(true);
    try {
      response(search);
      wait(1000).then(() => {
        setRefreshing(false);
      });
    } catch (error) {
      console.log('error', error);
      wait(1000).then(() => {
        setRefreshing(false);
      });
    }

    wait(1000).then(() => {
      setRefreshing(false);
    });
  }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', ele => {
      // console.log('first', ele);
      setRoute(ele.target.split('-')[0]);
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <>
      <Header
        onPress={searchNews}
        selectedId={search}
        route={route}
        updateSearch={updateSearch}
      />
      <View style={styles.container}>
        {searchNewsByName.length > 0 ? (
          <>
            <FlatList
              style={styles.list}
              ListHeaderComponent={
                <Text style={styles.searchText}>Search: {search}</Text>
              }
              ListFooterComponent={<Text></Text>}
              data={searchNewsByName}
              refreshControl={
                <RefreshControl
                  refreshing={refreshing}
                  onRefresh={() => onRefresh(search)}
                />
              }
              keyExtractor={(item, index) => index + item}
              renderItem={(item, index) => {
                return <CardNews data={item} />;
              }}
            />
          </>
        ) : (
          <>
            <View
              style={{
                flex: 0.5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 25, fontWeight: '600', color: '#000'}}>
                No data available!
              </Text>
            </View>
          </>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  list: {
    padding: 10,
  },
  searchText: {
    fontFamily: 'Aeroport-Medium',
    fontSize: 22,
    marginVertical: 10,
  },
});

export default SearchScreen;
