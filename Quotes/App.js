import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Dimensions
} from 'react-native';

import { deviceHeight, deviceWidth } from "./config";



const App = () => {


  return (
    <ScrollView>
      <View style={styles.sectionContainer}>
        <Text> Quotes </Text>
        <Text style={styles.quote}>"Take things as they are. Punch when you have to punch. Kick when you have to kick." </Text>
        <Text style={styles.author}>  - Kahlil Gibran </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    alignItems: 'center',
  },
  quote: {
    fontSize: 24,
    marginHorizontal: 20,
    marginTop: '40%'
  },
  author: {
    fontSize: 16,
    marginTop: 10,
    color: 'red',
    textAlign: 'right',
    width: deviceWidth,
    paddingRight: 20,
  }
});

export default App;
