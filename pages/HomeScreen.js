import React, { useCallback, useLayoutEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import search from "../assets/icons/search.png";
import contacts from "../assets/icons/contacts.png";
import DigitusLogo from "../assets/DigitusLogo.png";
import CategoryList from "../components/CategoryList";
import NewsList from "../components/NewsList";

const HomeScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <View style={styles.headerContainer}>
          <Image source={DigitusLogo} style={{ width: 115, height: 60 }} />
        </View>
      ),
      headerLeft: () => (
        <View style={{ marginLeft: 20 }}>
          <TouchableOpacity activeOpacity={0.5}>
            <Image
              source={search}
              style={{ width: 18, height: 18, margin: 20 }}
            />
          </TouchableOpacity>
        </View>
      ),
      headerRight: () => (
        <View style={{ marginLeft: 20 }}>
          <TouchableOpacity activeOpacity={0.5}>
            <Image
              source={contacts}
              style={{ width: 18, height: 18, margin: 20 }}
            />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <CategoryList />
      <NewsList />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
