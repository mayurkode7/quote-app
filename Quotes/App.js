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
import Quote from './components/Quote';

import { deviceHeight, deviceWidth, colors } from "./config";



const App = () => {


  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.title}>Quote</Text>
      <Quote author="unknown" quoteText="Text is here"></Quote>
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
});

export default App;
