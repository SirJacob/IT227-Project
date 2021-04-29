import * as React from 'react';
import { StyleSheet, ScrollView, Image } from 'react-native';
import Constants from 'expo-constants';
import { Text, View } from '../components/Themed';
import {Component} from "react";

const images = {
  "Steam": require('../assets/images/steam.png'),
  "Google Chrome": require('../assets/images/chrome.png'),
  "Discord": require('../assets/images/discord.png'),
  "Spotify": require('../assets/images/spotify.png')
};

class ListItem extends Component {

  render() {
    return (
        <View style={styles.container} >
          <View style={styles.descriptioncontainer} >
            <Image style={styles.icon} source={images[this.props.title]}/>
            <Text style={styles.name}>{this.props.title}</Text>
          </View>
          <Text style={styles.description}>{this.props.description}</Text>
        </View>
    );
  }
}

export default function TabTwoScreen() {
  return (
  <ScrollView>
    <Text style={styles.titletext}>My Daily App Toolkit</Text>
    <View style={styles.thinbreak} />
    <ScrollView style={styles.scroll}>
      <ListItem title="Steam" description="A very popular DRM game store and platform" />
      <ListItem title="Discord" description="The de facto communcation app for gamers" />
      <ListItem title="Spotify" description="Man, I gonna miss that half-priced student subscription :(" />
      <ListItem title="Google Chrome" description="Do I have to explain why I have the world's most popular browser?" />
    </ScrollView>
  </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flexDirection: "column",
    height: "100%"
  },
  icon:{
    height: 48,
    width: 64,
    resizeMode: "contain"
  },
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    padding: 10,
    height:120,
    margin: 2,
    backgroundColor: "#ecf0f1",
  },
  app_container: {
    margin: 10,
    justifyContent: "center",
    flex: 1,
    flexDirection: "column"
  },
  descriptioncontainer:{
    flexDirection:'row',
    flex:.6,
    justifyContent: 'center', //Centered vertically
    alignItems: 'center', // Centered horizontally
    backgroundColor: "#ecf0f1",
  },
  name:{
    flex: .8,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign : 'center',
  },
  description: {
    fontSize: 20,
    paddingTop: 30,
    fontStyle: 'italic'
  },
  titletext: {
    marginLeft: "auto",
    marginRight: "auto",
    fontSize: 25,
    fontWeight: "bold"
  },
  thinbreak: {
    paddingBottom: 0,
    borderBottomColor: "black",
    borderBottomWidth: StyleSheet.hairlineWidth
  }
});
