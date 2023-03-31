import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Home from "./app/screen/Home";
import { Ionicons } from "@expo/vector-icons";
import HomeNavigator from "./app/navigations/HomeNavigator";
import { NavigationContainer } from "@react-navigation/native";

//SafeAreaView only available for iOS

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <HomeNavigator />
      </NavigationContainer>
      {/* <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" /> */}
      {/* <Home /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // paddingTop: 40,
    // padding: 20,
    margin: 20,
    marginTop: 50,
    // paddingHorizontal: 20,
  },
});
