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

import { deviceHeight, deviceWidth, colors } from "./config";



const App = () => {


  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.title}>Quote</Text>
      <Text style={styles.quote}>"Take things as they are. Punch when you have to punch. Kick when you have to kick." </Text>
      <Text style={styles.author}>  - Bruce Lee </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    alignItems: 'center',
    height: deviceHeight,
    backgroundColor: colors.indigo
  },
  title: {
    color: colors.lightgrey,
    fontSize: 30,
    marginTop: 10
  },
  quote: {
    fontSize: 24,
    marginHorizontal: 20,
    marginTop: '35%',
    fontStyle: 'italic',
    color: colors.lightgrey
  },
  author: {
    fontSize: 16,
    marginTop: 10,
    color: colors.lightgrey,
    textAlign: 'right',
    width: deviceWidth,
    paddingRight: 20,
  }
});

export default App;
