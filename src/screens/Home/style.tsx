import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  logoContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignSelf: "center",
  },
  buttonPress: {
    fontSize: 32,
    textAlign:'center',
    fontWeight: "bold",
    color: "#fff",
    borderWidth: 10,
    overflow: "hidden",
    borderRadius: 15,
    backgroundColor: "black",
  },
});
