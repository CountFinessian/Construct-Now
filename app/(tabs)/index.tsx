import { Text, View, StyleSheet } from "react-native";
import { Image } from "expo-image";

const placeHolderImage = require("../../assets/images/background-image.png")

export default function Index() {
  return (
    <View style={styles.container}>
      <Image style={ styles.image } source={ placeHolderImage }></Image>
      <Text style={styles.text}>Construct Now</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#99a196",
  },
  text: {
    color: "black",
  },
  image:{
    width: 356,
    height: 522,
    borderRadius: 18
  }
});
