import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { Dimensions } from "react-native";
import Color from "../../shared/Color";
import { useNavigation } from "@react-navigation/native";

export default function TopHeadlineSlider({ newsList }) {
  const navigation = useNavigation();
  return (
    <View>
      <FlatList
        data={newsList}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("read-news", { news: item })}
            style={{ width: Dimensions.get("screen").width * 0.8 }}
          >
            <Image
              source={{ uri: item.urlToImage }}
              alt="img"
              style={{
                height: Dimensions.get("screen").width * 0.7,
                marginTop: 20,
                borderRadius: 15,
                marginRight: 15,
              }}
            />
            <Text
              style={{ marginTop: 10, fontSize: 20, fontWeight: "bold" }}
              numberOfLines={3}
            >
              {item.title}
            </Text>
            <Text
              style={{
                marginTop: 10,
                color: Color.primary,
                fontWeight: "bold",
              }}
            >
              {item?.source?.name}
            </Text>
            {/* <View
              style={{
                height: 1,
                backgroundColor: Color.lightGray,
                marginTop: 10,
              }}
            ></View> */}
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
