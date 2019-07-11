import * as WebBrowser from "expo-web-browser";
import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

import theme from "../src/theme";
import { AntDesign } from "@expo/vector-icons";
import { logout, currentSession, updateFav } from "../src/UserSession";




export default function ItemCard(props) {
  const { navigation, item, favorite, addTofavourites, removeFromfavorites, navigateTo } = props;
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.holder}
        onPress={() => navigateTo("Item", { item: item })}
      >
        <Image
          resizeMode='stretch'  
          style={styles.image}
          source={{uri: item.Image}}
        />
        <Text style={styles.text}>{item.Name}</Text>
        <TouchableOpacity
          style={styles.heart}
          onPress={() => {
            if (favorite) {
              removeFromfavorites(item.Name)
            } else {
              addTofavourites(item, item.Name)
            }
          }}
        >
          <AntDesign
            name={favorite ? "heart" : "hearto"}
            color="red"
            size={30}
          />
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  contentContainer: {
    paddingTop: theme.spacing.unit
  },
  holder: {
    display: "flex",
    flexDirection: "row",
    padding: theme.spacing.unit / 2
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: theme.spacing.unit
  },
  text: {
    ...theme.typography.h2,
    marginTop: "auto",
    marginBottom: "auto",
    marginLeft: theme.spacing.unit * 2
  },
  heart: {
    position: "absolute",
    right: theme.spacing.unit,
    top: "33%"
  }
});
