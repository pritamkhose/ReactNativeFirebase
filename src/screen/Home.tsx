import React from 'react';
import {View, Text} from 'react-native';
import styles from '../component/Styles';
import AppConstant from '../component/AppConstant';

const Home = () => {
  return (
    <View style={styles.screenView}>
      <Text style={styles.textHeaderTitle}>{AppConstant.appName}</Text>
    </View>
  );
};

export default Home;
