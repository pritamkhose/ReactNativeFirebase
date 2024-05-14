/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import firebase from '@react-native-firebase/app';
import remoteConfig from '@react-native-firebase/remote-config';
import crashlytics from '@react-native-firebase/crashlytics';
// import analytics from '@react-native-firebase/analytics';

const RNfirebaseConfig = {
  apiKey: 'AIzaSyCEOOmqcBusHrh7Bql1BL-G4GLMENHVCcA',
  authDomain: 'reactapp-b78b7.firebaseapp.com',
  projectId: 'reactapp-b78b7',
  storageBucket: 'reactapp-b78b7.appspot.com',
  messagingSenderId: '689068388329',
  appId: '1:689068388329:web:ab225b3ef298a59d646578',
  measurementId: 'G-37P2WSXT99',
};
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(RNfirebaseConfig);
} else {
  app = firebase.app();
}
// const db = firebase.firestore();
console.log('app-->', firebase);

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [awRemote, setAwRemote] = useState('null');

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
        setAwRemote(JSON.stringify(parameters));
      });
    crashlytics().log('App mounted.');
  }, []);

  const [enabled, setEnabled] = useState(
    crashlytics().isCrashlyticsCollectionEnabled,
  );

  async function toggleCrashlytics() {
    await crashlytics()
      .setCrashlyticsCollectionEnabled(!enabled)
      .then(() => setEnabled(crashlytics().isCrashlyticsCollectionEnabled));
  }

  async function onSignIn(user: {
    uid: any;
    username: any;
    email: any;
    credits: any;
  }) {
    crashlytics().log('User signed in.');
    await Promise.all([
      crashlytics().setUserId(user.uid),
      crashlytics().setAttribute('credits', String(user.credits)),
      crashlytics().setAttributes({
        role: 'admin',
        followers: '13',
        email: user.email,
        username: user.username,
      }),
    ]);
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>React Native Firebase</Text>
          <Text style={styles.sectionDescription}>Firebase</Text>
          <Text style={styles.sectionDescription}>
            Remote Config : {awRemote}
          </Text>
          <Button
            title={enabled ? 'Disable Crashlytics' : 'Enable Crashlytics'}
            onPress={toggleCrashlytics}
          />
          <Button title="Test Crash" onPress={() => crashlytics().crash()} />
          <Button
            title="Crashlytics Log Sign In"
            onPress={() =>
              onSignIn({
                uid: 'Aa0Bb1Cc2Dd3Ee4Ff5Gg6Hh7Ii8Jj9',
                username: 'Joaquin Phoenix',
                email: 'phoenix@example.com',
                credits: 42,
              })
            }
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
