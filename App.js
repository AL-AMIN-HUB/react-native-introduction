import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Link, NativeRouter, Routes, Route } from "react-router-native";
import Doctors from "./components/Doctors";
import Home from "./components/Home";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello From React Native 2021!</Text>
      <StatusBar style="auto" />
      <NativeRouter>
        <Link to="/">
          <Text>Home</Text>
        </Link>
        <Link to="/home">
          <Text>Home</Text>
        </Link>{" "}
        <Link to="/doctor">
          <Text>Doctors</Text>
        </Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/doctor" element={<Doctors />} />
        </Routes>
      </NativeRouter>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
