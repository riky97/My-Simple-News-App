/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import type {Node} from 'react';
import {
  StyleSheet,
  Text,
  useColorScheme,
  View,
  StatusBar,
  ScrollView,
  FlatList,
  RefreshControl,
  SafeAreaView,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

//API
import {getTodayPopularNews} from './api/getTodayPopularNews';

//COMPONENT
import CardNews from './components/CardNews';

const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

const App: () => Node = () => {
  const [popularNews, setPopularNews] = useState([]);
  const [refreshing, setRefreshing] = React.useState(false);
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  useEffect(() => {
    const response = async () => {
      const data = await getTodayPopularNews();
      console.log(data);
      if (!data.error) {
        setPopularNews(data.data);
      }
    };
    response();
  }, []);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const title = 'Popular News';

  return (
    <>
      <StatusBar style={{backgroundColor: backgroundStyle.backgroundColor}} />
      <View style={styles.container}>
        <FlatList
          ListHeaderComponent={<Text style={styles.header}>{title}</Text>}
          data={popularNews}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          keyExtractor={(item, index) => index + item}
          renderItem={(item, index) => {
            return <CardNews data={item} />;
          }}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  header: {
    fontSize: 32,
    color: '#000',
    fontWeight: '900',
    marginVertical: 10,
  },
});

export default App;
