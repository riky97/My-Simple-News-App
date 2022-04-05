import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CategoryTopHeadlines from './CategoryTopHeadlines';

const Header = ({onPress, selectedId}) => {
  return (
    <View style={{overflow: 'hidden', paddingBottom: 5}}>
      <View style={styles.header}>
        <View style={{flex: 1, justifyContent: 'flex-end'}}>
          <Text style={styles.logo}>NEWS APP</Text>
        </View>
        <View style={{flex: 1, justifyContent: 'flex-end'}}>
          <CategoryTopHeadlines onPress={onPress} selectedId={selectedId} />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    backgroundColor: '#fff',
    height: 120,
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 10,
  },
  logo: {
    fontSize: 24,
    textTransform: 'uppercase',
    fontWeight: '800',
    color: '#000',
    paddingLeft: 15,
  },
});

export default Header;
