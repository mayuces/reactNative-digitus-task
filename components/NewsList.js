import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import news1 from "../assets/news1.png";
import news2 from "../assets/news2.png";

import rnLike from "../assets/icons/rnLike.png";
import calendar from "../assets/icons/calendar.png";

const NewsList = ({ navigation }) => {
  const nav = useNavigation();

  const handlePress = () => {
    nav.navigate("News");
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <View style={styles.imageContainer}>
        <Image source={news1} style={styles.image} />
      </View>
      <Text style={styles.mainText}>Enim Ad Minim</Text>
      <View style={styles.widgetContainer}>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.button}>Button</Text>
        </TouchableOpacity>
        <View>
          <Image style={{ height: 10, width: 10 }} source={calendar} />
          <Text>12.05.2022</Text>
        </View>
        <View>
          <Text>1058</Text>
          <Image style={{ height: 10, width: 10 }} source={rnLike} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default NewsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 342,
    height: 294,
    backgroundColor: "#fff",
    borderRadius: 15,
  },
  imageContainer: {
    width: 342,
    height: 241,
    borderRadius: 15,
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
  },
  mainText: {
    fontSize: 18,
    color: "#048345",
    marginLeft: 18,
    marginTop: 25,
    fontWeight: "bold",
  },
  widgetContainer: {
    flex: 1,
    flexDirection: "row",
  },
  buttonContainer: {
    marginTop: 20,
    marginLeft: 20,
    width: 110,
    height: 19,
    borderWidth: 1,
    borderColor: "#0A8754",
    borderRadius: "15px",
    paddingLeft: 30,
    paddingBottom: 5,
  },
  button: {
    color: "#0A8754",
  },
});
