import * as React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '../components/Themed';
import Constants from 'expo-constants';

export default function TabOneScreen() {
  return (
      <ScrollView style={styles.scroll}>
        <Text style={styles.titletext}>Welcome!</Text>
        <View style={styles.thinbreak} />
        <View style={styles.detailbox}>
          <Text style={styles.detailtopic}>Name:</Text>
          <Text style={styles.detaildata}>Cory Ugone</Text>

          <Text style={styles.detailtopic}>University:</Text>
          <Text style={styles.detaildata}>Marymount University</Text>

          <Text style={styles.detailtopic}>Grade:</Text>
          <Text style={styles.detaildata}>Senior (4th Year)</Text>

          <Text style={styles.detailtopic}>Class:</Text>
          <Text style={styles.detaildata}>21/SP Mobile App Development (IT-227-A)</Text>

          <Text style={styles.detailtopic}>Assignment:</Text>
          <Text style={styles.detaildata}>IT 227 Project</Text>
        </View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  titletext: {
    marginLeft: "auto",
    marginRight: "auto",
    fontSize: 30,
    fontWeight: "bold"
  },
  thinbreak: {
    paddingBottom: 0,
    borderBottomColor: "black",
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  detailbox: {
    backgroundColor: "#ecf0f1",
    padding: 5,
    margin: 10,
    paddingTop: Constants.statusBarHeight,
    borderWidth: 1
  },
  detailtopic: {
    fontWeight: "bold",
    fontSize: 20
  },
  detaildata: {
    fontStyle: "italic",
    marginBottom: 15,
    fontSize: 15
  },
  scroll: {
    flexDirection: "column",
    marginHorizontal: 20,
  }
});
