import * as React from 'react';
import { StyleSheet, ScrollView, Image } from 'react-native';
import { Text, View } from '../components/Themed';
import {Component} from "react";

const images = [
  require('../assets/images/songs/0.jpg'),
  require('../assets/images/songs/1.jpg'),
  require('../assets/images/songs/2.jpg'),
  require('../assets/images/songs/3.jpg'),
  require('../assets/images/songs/4.jpg'),
  require('../assets/images/songs/5.jpg'),
  require('../assets/images/songs/6.jpg'),
  require('../assets/images/songs/7.jpg'),
  require('../assets/images/songs/8.jpg'),
  require('../assets/images/songs/9.jpg'),
];

class ListItem extends Component {

  render() {
    return (
          <View style={styles.view_main}>
            <Image style={styles.icon} source={images[this.props.index]}/>
            <View style={styles.view_sub}>
              <Text style={styles.name}>{this.props.title}</Text>
              <Text style={styles.description}>{this.props.description}</Text>
            </View>
          </View>
    );
  }
}

export default function TabFourScreen() {
  return (
      <ScrollView>
        <Text style={styles.titletext}>Top 10 Spotify Songs</Text>
        <View style={styles.thinbreak} />
        <ScrollView style={styles.scroll}>
          <ListItem title="Hypnotized" description="Purple Disco Machine, Sophie and the Giants" index="0" />
          <ListItem title="Icon" description="Jaden" index="1" />
          <ListItem title="MIDDLE CHILD" description="J. Cole" index="2" />
          <ListItem title="VIBEZ" description="DaBaby" index="3" />
          <ListItem title="Therefore I Am" description="Billie Eilish" index="4" />
          <ListItem title="On A Roll" description="Ashley O" index="5" />
          <ListItem title="Red Roses - Remix" description="Lil Skies, Oshi, sober rob" index="6" />
          <ListItem title="TOES" description="DaBaby, Lil Baby, Moneybagg Yo" index="7" />
          <ListItem title="Roses - Remix" description="SAINt JHN, Imanbek" index="8" />
          <ListItem title="oops!" description="Yung Gravy" index="9" />
        </ScrollView>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  view_main: {
    flexDirection: "row",
    backgroundColor: "#ecf0f1",
  },
  view_sub: {
    flexDirection: "column",
    backgroundColor: "#ecf0f1",
  },
  scroll: {
    flexDirection: "column",
    height: "100%"
  },
  icon:{
    height: 64,
    width: 64,
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
