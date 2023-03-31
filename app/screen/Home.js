import { View, Text } from "react-native";
import CategorySlider from "../components/home/CategorySlider";
import { StyleSheet } from "react-native";
import Color from "../shared/Color";
import { Ionicons } from "@expo/vector-icons";
import TopHeadlineSlider from "../components/home/TopHeadlineSlider";
import HeadlineList from "../components/home/HeadlineList";
import { useEffect, useState } from "react";
import GlobalApi from "../Services/GlobalApi";
import { ScrollView } from "react-native";
import { ActivityIndicator } from "react-native";
import { Dimensions } from "react-native";

export default function Home() {
  const [newsList, setNewsList] = useState([]);
  //loading
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // getTopHeadline();
    getNewsByCategory("latest");
  }, []);

  const getNewsByCategory = async (category) => {
    setLoading(true);
    // const result = (await GlobalApi.getTopHeadline).data;
    const result = (await GlobalApi.getByCategory(category)).data;
    // console.log(result);
    setNewsList(result.articles);
    setLoading(false);
  };
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: "#fff" }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={styles.appName}>Atuma News</Text>
        <Ionicons name="notifications" size={30} color="black" />
      </View>

      <CategorySlider
        selectCategory={(category) => getNewsByCategory(category)}
      />
      {loading ? (
        <ActivityIndicator
          style={{ marginTop: Dimensions.get("screen").height * 0.3 }}
          size={"large"}
          color={Color.primary}
        />
      ) : (
        // Need to wrap the view in parentheses
        <View>
          <TopHeadlineSlider newsList={newsList} />
          <HeadlineList newsList={newsList} />
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  appName: {
    fontSize: 30,
    fontWeight: "bold",
    color: Color.primary,
  },
});
