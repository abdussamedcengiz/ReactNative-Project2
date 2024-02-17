import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
export default function SearcBar({ term, onTermChange, onTermSubmit }) {
  return (
    <View style={styles.back}>
      <AntDesign style={styles.icon} name="search1" size={30} color="black" />
      <TextInput
        style={styles.inp}
        placeholder="Ara"
        autoCorrect={false}
        autoCapitalize="none"
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  back: {
    backgroundColor: "lightgray",
    flexDirection: "row",
    margin: 10,
    height: 50,
    alignItems: "center",
    borderRadius: 20,
  },
  icon: {
    marginHorizontal: 15,
  },
  inp: {
    flex: 1,
    fontSize: 18,
  },
});
