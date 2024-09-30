import { Text, View, StyleSheet } from "react-native";
import { GameEngine } from "react-native-game-engine";
export default function Index() {
  return (
    <View style={styles.maincontainer}>
      <GameEngine></GameEngine>
    </View>
  );
}

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
  },
});
