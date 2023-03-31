import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React, { useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import Color from "../shared/Color";
import { Ionicons } from "@expo/vector-icons";
import { Share } from "react-native";
import * as WebBrowser from "expo-web-browser";

export default function ReadNews() {
  const news = useRoute().params.news;

  const navigation = useNavigation();

  useEffect(() => {
    // console.log(news);
  }, []);

  const shareNews = () => {
    Share.share({
      message: news.title + "\nRead More" + news.description,
    });
  };
  return (
    <ScrollView style={{ backgroundColor: "#ffffff", flex: 1 }}>
      <View
        style={{
          marginTop: 10,
          marginBottom: 10,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => shareNews()}>
          <Ionicons name="share-social" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <Image
        source={{ uri: news.urlToImage }}
        style={{ width: "100%", height: 300, borderRadius: 10 }}
      />
      <Text style={{ marginTop: 10, color: Color.primary, fontSize: 16 }}>
        {news.source.name}
      </Text>
      <Text style={{ marginTop: 10, fontSize: 22, fontWeight: "bold" }}>
        {news.title}
      </Text>
      <Text
        style={{
          marginTop: 10,
          fontSize: 18,
          color: Color.gray,
          lineHeight: 30,
        }}
      >
        {news.description}
      </Text>

      <TouchableOpacity onPress={() => WebBrowser.openBrowserAsync(news.url)}>
        <Text
          style={{
            marginTop: 10,
            fontSize: 15,
            color: Color.primary,
          }}
        >
          Read More
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
