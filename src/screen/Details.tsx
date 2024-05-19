import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
  // Button,
} from 'react-native';
// import SoundPlayer from 'react-native-sound-player';
import styles from '../component/Styles';

const locArr = [
  {
    id: 1,
    title: 'Hats Off',
    description: 'Alexander Calder',
    latitude: 41.033769,
    longitude: -73.6913,
    icon: 'y',
    url: 'https://lh5.googleusercontent.com/p/AF1QipNfFziPZZ2cwtkfz8ujAGrVLC_obp_nxMVBFhtY=h1440',
  },
  {
    id: 2,
    title: 'Kiosque l’evide',
    description: 'Alexander Calder',
    latitude: 41.034308,
    longitude: -73.691757,
    icon: 'y',
    url: 'https://lh5.googleusercontent.com/p/AF1QipO5IpF9Ag8S1Sk_n_dU_SUOHgfmFKCo0-2BMgFx=h1440',
  },
  {
    id: 3,
    title: 'Grande Disco',
    description: 'Arnaldo Pomodoro',
    latitude: 41.034681,
    longitude: -73.692277,
    icon: 'y',
    url: 'https://lh5.googleusercontent.com/p/AF1QipNA3bbPNWHNIEQxsBuC4kWwLpcpUElKs8M50e9-=h1440',
  },
  {
    id: 7,
    title: 'Mozart II',
    description: 'Kenneth Snelson',
    latitude: 41.035652,
    longitude: -73.692436,
    icon: 'r',
    url: 'https://lh5.googleusercontent.com/p/AF1QipNfFziPZZ2cwtkfz8ujAGrVLC_obp_nxMVBFhtY=h1440',
  },
  {
    id: 36,
    title: 'Reclining Figure',
    description: 'Henry Moore',
    latitude: 41.035749,
    longitude: -73.692196,
    icon: 'y',
    url: 'https://lh5.googleusercontent.com/p/AF1QipNfFziPZZ2cwtkfz8ujAGrVLC_obp_nxMVBFhtY=h1440',
  },
  {
    id: 36,
    title: 'Girl with a Dolphin',
    description: 'David Wynne',
    latitude: 41.034993,
    longitude: -73.69346,
    icon: 'r',
    url: 'https://lh5.googleusercontent.com/p/AF1QipPv8Ilc1-uuTPQqdnOxzp83tI-8GB3zofqobYl8=h1440',
  },
];

const Details = () => {
  const [markerData, setMarkerData] = useState(locArr[1]);

  return (
    <View style={styles.screenView}>
      <View>
        <ScrollView style={styles.scrollView} horizontal={true}>
          {locArr.map((data, index) => {
            return (
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => setMarkerData(data)}>
                <Text key={index} style={styles.textScrollTitle}>
                  {data.title}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
        <ScrollView>
          <View style={{flex: 0}}>
            <Image
              source={{
                uri: markerData?.url,
              }}
              style={{
                width: Dimensions.get('window').width,
                height: 300,
                backgroundColor: 'white',
              }}
            />
          </View>
          <Text style={styles.textTitle}>{markerData.title}</Text>
          <Text style={styles.textDescription}>{markerData.description}</Text>
          {/* <Button
            title="Play"
            onPress={() => {
              const url =
                'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3';
              console.log('Audio-->', url);
              try {
                // SoundPlayer.playSoundFile('tone', 'mp3');  // play the file tone.mp3
                SoundPlayer.playUrl(url); // or play from url
              } catch (e) {
                console.log('cannot play the sound file', e);
              }
            }}
          /> */}
          <Text style={styles.textDetails}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum.
          </Text>
        </ScrollView>
      </View>
    </View>
  );
};

export default Details;
