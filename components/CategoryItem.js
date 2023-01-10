import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const CategoryItem = ({ image, text }) => {
  return (
    <View style={{ marginLeft: 15 }}>
      <View
        style={{
          backgroundColor: "#2A9D8F",
          height: 50,
          width: 50,
          borderRadius: 50,
          padding: 1,
          position: "relative",
        }}
      >
        <Image
          source={{ uri: image }}
          style={{
            flex: 1,
            height: "100%",
            width: "100%",
            resizeMode: "cover",
            borderRadius: 50,
            borderWidth: 1,
            borderColor: "#fff",
          }}
        />
      </View>
      <Text
        style={{
          marginLeft: 5,
          maxWidth: 50,
          fontSize: 11,
          flex: 1,
          justifyContent: "center",
        }}
      >
        {text}
      </Text>
    </View>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({});
