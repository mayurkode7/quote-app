import React, { useEffect, useState } from 'react';
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

import { deviceHeight, deviceWidth, colors, quoteURL } from "./config";
import axios from "axios";


const App = () => {

  const [quote, setQuote] = useState('Quote is being loaded.')
  const [author, setAuthor] = useState('Unknown')

  const getData = () => {
    axios.get(quoteURL).then((response) => {
      console.log(response.data)
      setQuote(response.data.content)
      setAuthor(response.data.author)
    }).catch((error) => {
      console.warn(error)
    })
  }


  useEffect(() => {

    getData()

    return () => {
      console.log('clean up')
    }
  }, [])


  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.title}>Quote</Text>
      <Quote author={author} quoteText={quote}></Quote>
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
