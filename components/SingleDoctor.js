import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  doctorName: {
    color: "goldenrod",
    fontSize: "30px",
  },
});
export default function SingleDoctor({ doctor }) {
  const { name, image } = doctor;
  return (
    <View>
      <Image
        source={{
          uri: `data:image/png;base64,${image}`,
        }}
        style={{ width: 200, height: 200 }}
      />
      <Text style={styles.doctorName}>Doctor:{name}</Text>
    </View>
  );
}
