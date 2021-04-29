import * as React from 'react';
import {StyleSheet, ScrollView, Image, Dimensions} from 'react-native';
import { Text, View } from '../components/Themed';
import {Component} from "react";

const images = [
  require('../assets/images/games/0.jpg'),
  require('../assets/images/games/1.jpg'),
  require('../assets/images/games/2.jpg'),
  require('../assets/images/games/3.jpg'),
  require('../assets/images/games/4.jpg'),
  require('../assets/images/games/5.jpg'),
  require('../assets/images/games/6.jpg'),
  require('../assets/images/games/7.jpg'),
  require('../assets/images/games/8.jpg'),
  require('../assets/images/games/9.jpg'),
];

class ListItem extends Component {

  render() {
    return (
          <View style={styles.view_main}>
            <Image style={styles.icon} source={images[this.props.index]}/>
          </View>
    );
  }
}

export default function TabFiveScreen() {
  return (
      <ScrollView>
        <Text style={styles.titletext}>Top 10 Most Played Games</Text>
        <View style={styles.thinbreak} />
        <ScrollView style={styles.scroll}>
          <ListItem index="0" />
          <ListItem index="1" />
          <ListItem index="2" />
          <ListItem index="3" />
          <ListItem index="4" />
          <ListItem index="5" />
          <ListItem index="6" />
          <ListItem index="7" />
          <ListItem index="8" />
          <ListItem index="9" />
        </ScrollView>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  view_main: {
    flexDirection: "row",
    backgroundColor: "#ecf0f1",
  },
  scroll: {
    flexDirection: "column",
    height: "100%"
  },
  icon:{

    width: Dimensions.get('window').width,
    resizeMode: "contain",
  },
  titletext: {
    marginLeft: "auto",
    marginRight: "auto",
    fontSize: 25,
    fontWeight: "bold"
  },
  name:{
    fontSize: 25,
    fontWeight: 'bold',
    backgroundColor: "#ecf0f1",
  },
  description: {
    fontSize: 20,
    fontStyle: 'italic',
    backgroundColor: "#ecf0f1",
  },
  thinbreak: {
    paddingBottom: 0,
    borderBottomColor: "black",
    borderBottomWidth: StyleSheet.hairlineWidth
  }
});
