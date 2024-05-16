import React from 'react';
import {ScrollView, View, Text} from 'react-native';
import styles from '../component/Styles';

const Search = () => {
  return (
    <ScrollView>
      <View style={styles.screenView}>
        <Text style={styles.textHeaderTitle}>Search</Text>
      </View>
    </ScrollView>
  );
};

export default Search;
