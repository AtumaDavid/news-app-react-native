import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import Color from "../../shared/Color";

export default function CategorySlider({ selectCategory }) {
  const [active, setActive] = useState(1);

  const categoryList = [
    {
      id: 1,
      name: "Latest",
    },
    {
      id: 2,
      name: "World",
    },
    {
      id: 3,
      name: "Business",
    },
    {
      id: 4,
      name: "Sports",
    },
    {
      id: 5,
      name: "Life",
    },
    {
      id: 6,
      name: "Movie",
    },
  ];

  const onCategoryClick = (id) => {
    setActive(id);
  };
  return (
    <View style={{ marginTop: 20 }}>
      <FlatList
        data={categoryList}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              onCategoryClick(item.id), selectCategory(item.name);
            }}
          >
            <Text
              style={
                active && item.id === active
                  ? styles.ActiveCategoryTextList
                  : styles.categoryTextList
              }
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  categoryTextList: {
    marginRight: 15,
    fontSize: 20,
    fontWeight: "bold",
    color: Color.gray,
  },
  ActiveCategoryTextList: {
    marginRight: 15,
    fontSize: 20,
    fontWeight: "bold",
    color: Color.primary,
  },
});
