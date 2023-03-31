import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import Color from "../../shared/Color";
import { useNavigation } from "@react-navigation/native";

export default function HeadlineList({ newsList }) {
  const navigation = useNavigation();

  return (
    <View>
      <FlatList
        data={newsList}
        renderItem={({ item }) => (
          <View>
            <TouchableOpacity
              style={{ flexDirection: "row", marginTop: 10 }}
              onPress={() => navigation.navigate("read-news", { news: item })}
            >
              <Image
                source={{ uri: item.urlToImage }}
                style={{
                  width: 130,
                  height: 130,
                  borderRadius: 10,
                }}
              />
              <View style={{ marginRight: 140, marginLeft: 10 }}>
                <Text
                  style={{ fontSize: 18, fontWeight: "bold" }}
                  numberOfLines={4}
                >
                  {item.title}
                </Text>
                <Text style={{ marginTop: 15, color: Color.primary }}>
                  {item?.source?.name}
                </Text>
              </View>
            </TouchableOpacity>
            <View
              style={{
                height: 1,
                backgroundColor: Color.lightGray,
                marginTop: 10,
              }}
            ></View>
          </View>
        )}
      />
    </View>
  );
}
