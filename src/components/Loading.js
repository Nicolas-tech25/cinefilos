import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Loading() {
  return (
    <View style={estilos.viewLoading}>
      <ActivityIndicator size="large" color="#ff4117" />
    </View>
  );
}

const estilos = StyleSheet.create({
  viewLoading: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});
