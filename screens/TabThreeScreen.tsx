import * as React from 'react';
import {Image, ScrollView, StyleSheet} from 'react-native';
import { Text, View } from '../components/Themed';

const img_charger = require('../assets/images/charger.jpg');

export default function TabThreeScreen() {
  return (
      <View style={styles.container}>
        <ScrollView style={styles.scroll}>
          <Text style={styles.titletext}>My Daily Driver</Text>
          <View style={styles.thinbreak} />
          <Image style={styles.image} source={img_charger}/>
          <View style={styles.detailbox}>
            <Text style={styles.titletext}>Features/Specs</Text>
            <Text style={styles.text}>- Engine: 300-hp, 3.6-liter V-6 </Text>
            <Text style={styles.text}>- Drivetrain: RWD & AWD</Text>
            <Text style={styles.text}>- Color: Octane Red</Text>
            <Text style={styles.text}>- Special Features:</Text>
            <Text style={styles.text}>-- Beats Audio with Sub</Text>
            <Text style={styles.text}>-- Sunroof</Text>
          </View>
        </ScrollView>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f8f4f4"
  },
  titletext: {
    marginLeft: "auto",
    marginRight: "auto",
    justifyContent: "center",
    fontSize: 25,
    fontWeight: "bold",
  },
  text: {
    marginRight: "auto",
    fontSize: 20,
  },
  scroll: {
    flexDirection: "column",
    marginHorizontal: 20,
  },
  detailbox: {
    padding: 5,
    margin: 10,
    borderWidth: 1,
    backgroundColor: "#ecf0f1"
  },
  image: {
    height: 256,
    width: 256,
    resizeMode: "contain",
    marginLeft: "auto",
    marginRight: "auto",
  },
  thinbreak: {
    paddingBottom: 0,
    borderBottomColor: "black",
    borderBottomWidth: StyleSheet.hairlineWidth
  }
});
