import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  RefreshControl,
} from 'react-native';
import {Icon, SearchBar} from 'react-native-elements';

//API
import {getSearchNews} from '../api/getSearchNews';

//COMPONENT
import CardNews from '../components/CardNews';

const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

const SearchScreen = () => {
  const [search, setSearch] = useState('');
  const [searchNewsByName, setSearchNewsByName] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

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
  return (
    <View style={styles.container}>
      <SearchBar
        containerStyle={{
          backgroundColor: '#fff',
          borderTopWidth: 0,
          borderBottomWidth: 2,
          shadowColor: '#000',
          shadowOffset: {width: 1, height: 1},
          shadowOpacity: 0.4,
          shadowRadius: 3,
          elevation: 10,
        }}
        inputContainerStyle={{
          backgroundColor: 'whitesmoke',
          borderRadius: 20,
        }}
        lightTheme
        placeholder="Search news..."
        value={search}
        onChangeText={ele => updateSearch(ele)}
        searchIcon={
          <TouchableOpacity
            style={{backgroundColor: 'whitesmoke'}}
            onPress={searchNews}>
            <Icon name="search" style={{backgroundColor: 'whitesmoke'}} />
          </TouchableOpacity>
        }
      />
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
            style={{flex: 0.5, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 25, fontWeight: '600', color: '#000'}}>
              No data available!
            </Text>
          </View>
        </>
      )}
    </View>
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
