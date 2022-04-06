import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CategoryTopHeadlines from './CategoryTopHeadlines';

const Header = ({onPress, selectedId}) => {
  return (
    <View style={{overflow: 'hidden', paddingBottom: 5, flex: 0.25}}>
      <View style={styles.header}>
        <View style={{flex: 0.6, justifyContent: 'flex-end'}}>
          <Text style={styles.logo}>NEWS APP</Text>
        </View>
        <View style={{flex: 1.2, justifyContent: 'flex-end'}}>
          <CategoryTopHeadlines onPress={onPress} selectedId={selectedId} />
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
