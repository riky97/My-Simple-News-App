import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Icon, SearchBar} from 'react-native-elements';

//JSON
import CategoryTopHeadlines from './CategoryTopHeadlines';

const Header = ({onPress, selectedId, route, updateSearch}) => {
  return (
    <View style={{overflow: 'hidden', paddingBottom: 5, flex: 0.25}}>
      <View style={styles.header}>
        <View style={{flex: 0.6, justifyContent: 'flex-end'}}>
          <Text style={styles.logo}>NEWS APP</Text>
        </View>
        <View style={{flex: 1.2, justifyContent: 'flex-end'}}>
          {route === 'Home' && (
            <CategoryTopHeadlines onPress={onPress} selectedId={selectedId} />
          )}
          {route === 'Search' && (
            <SearchBar
              containerStyle={{
                backgroundColor: '#fff',
                borderTopWidth: 0,
                borderBottomWidth: 0,
              }}
              inputContainerStyle={{
                backgroundColor: 'whitesmoke',
                borderRadius: 20,
              }}
              lightTheme
              placeholder="Search news..."
              value={selectedId}
              onChangeText={ele => updateSearch(ele)}
              searchIcon={
                <TouchableOpacity
                  style={{backgroundColor: 'whitesmoke'}}
                  onPress={onPress}>
                  <Icon name="search" />
                </TouchableOpacity>
              }
            />
          )}
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    backgroundColor: '#fff',
    flex: 1,
    flexDirection: 'column',
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 3,
  },
  logo: {
    fontSize: 25,
    textTransform: 'uppercase',
    color: '#000',
    paddingLeft: 15,
    fontFamily: 'Aeroport-Bold',
  },
});

export default Header;
