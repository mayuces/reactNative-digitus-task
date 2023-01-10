import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useEffect, useState } from "react";

import image1 from "../assets/dataImg/image1.png";
import image2 from "../assets/dataImg/image2.png";
import image3 from "../assets/dataImg/image3.png";
import image4 from "../assets/dataImg/image4.png";
import image5 from "../assets/dataImg/image5.png";
import image6 from "../assets/dataImg/image6.png";
import CategoryItem from "./CategoryItem";

const images = [];
images.push(image1, image2, image3, image4, image5, image6);

const categoryData = [
  {
    image: images[0],
    text: "Günün Menüsü",
  },
  {
    image: images[1],
    text: "Bayram Kutlaması",
  },
  {
    image: images[2],
    text: "Günün Menüsü",
  },
  {
    image: images[3],
    text: "Günün Menüsü",
  },
  {
    image: images[4],
    text: "Günün Menüsü",
  },
  {
    image: images[5],
    text: "Günün Menüsü",
  },
  {
    image: images[0],
    text: "Günün Menüsü",
  },
  {
    image: images[1],
    text: "Günün Menüsü",
  },
  {
    image: images[2],
    text: "Günün Menüsü",
  },
];

const CategoryList = () => {
  return (
    <FlatList
      data={categoryData}
      renderItem={({ item }) => (
        <CategoryItem image={item.image} text={item.text} />
      )}
      horizontal
    />
  );
};

export default CategoryList;

const styles = StyleSheet.create({});
