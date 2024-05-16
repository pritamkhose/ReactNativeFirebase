import React, {useEffect, useState} from 'react';
import {ScrollView, View, Button, Text} from 'react-native';
import crashlytics from '@react-native-firebase/crashlytics';
import styles from '../component/Styles';

const Crashlytics = () => {
  useEffect(() => {
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
    <ScrollView>
      <View style={styles.screenView}>
        <Text style={styles.textHeaderTitle}>Crashlytics</Text>
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
  );
};

export default Crashlytics;
