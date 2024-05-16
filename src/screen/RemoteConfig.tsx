import React, {useEffect, useState} from 'react';
import {Dimensions, ScrollView, View, Text} from 'react-native';
import remoteConfig from '@react-native-firebase/remote-config';
import styles from '../component/Styles';

const RemoteConfig = () => {
  let {width, height} = Dimensions.get('window');

  const [config, setConfig] = useState('null');

  useEffect(() => {
    remoteConfig()
      .setDefaults({
        awesome_new_feature: 'disabled',
      })
      .then(() => {
        console.log('Default values set.');
      })
      .then(() => remoteConfig().fetchAndActivate())
      .then(fetchedRemotely => {
        if (fetchedRemotely) {
          console.log('Configs were retrieved from the backend and activated.');
        } else {
          console.log(
            'No configs were fetched from the backend, and the local configs were already activated',
          );
        }
        const parameters = remoteConfig().getAll();
        setConfig(JSON.stringify(parameters));
      });
  }, []);
  return (
    <ScrollView>
      <View style={styles.screenView}>
        <Text style={styles.textHeaderTitle}>Remote Config</Text>
        <Text style={[styles.cardView, styles.textCart]}>${config}</Text>
      </View>
    </ScrollView>
  );
};

export default RemoteConfig;
