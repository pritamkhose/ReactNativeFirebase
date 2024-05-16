import React from 'react';
import {ScrollView, View, Button, Text, Platform} from 'react-native';
import styles from '../component/Styles';
import firebase from '@react-native-firebase/app';
import analytics from '@react-native-firebase/analytics';

const GoogleAnalytics = () => {
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

  async function initAnalytics() {
    await firebase.analytics().setUserId(`${Platform.OS}-${Date.now()}`);
    await firebase.analytics().setUserProperty('OS', `${Platform.OS}}`);
    await firebase
      .analytics()
      .setUserProperty('Version', `${Platform.Version}}`);
    console.log(
      'firebase analytics -->',
      await firebase.analytics().getAppInstanceId(),
      await firebase.analytics().getSessionId(),
    );
    await firebase.analytics().setAnalyticsCollectionEnabled(true);
    await firebase.analytics().setConsent({
      analytics_storage: true,
      ad_storage: true,
      ad_user_data: true,
      ad_personalization: true,
    });
  }

  return (
    <ScrollView>
      <View style={styles.screenView}>
        <Text style={styles.textHeaderTitle}>Analytics</Text>
        <Button title={'Init Analytics'} onPress={initAnalytics} />
        <Button
          title="Add To Basket - Custom Event"
          onPress={async () =>
            await analytics().logEvent('basket', {
              id: 3745092,
              item: 'mens grey t-shirt',
              description: ['round neck', 'long sleeved'],
              size: 'L',
            })
          }
        />
        <Button
          title="Press me - Predefined Event"
          // Logs in the firebase analytics console as "select_content" event only accepts the two object properties which accept strings.
          onPress={async () =>
            await analytics().logSelectContent({
              content_type: 'clothing',
              item_id: 'abcd',
            })
          }
        />
      </View>
    </ScrollView>
  );
};

export default GoogleAnalytics;
