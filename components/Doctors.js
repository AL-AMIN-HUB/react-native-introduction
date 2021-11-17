import React, { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import SingleDoctor from "./singleDoctor";

export default function Doctors() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch("https://dry-sands-38758.herokuapp.com/doctors")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);
  return (
    <View>
      <Text>This is Doctors {doctors.length}</Text>
      <ScrollView>
        {doctors.map((doctor) => (
          <SingleDoctor key={doctor._id} doctor={doctor}></SingleDoctor>
        ))}
      </ScrollView>
    </View>
  );
}
