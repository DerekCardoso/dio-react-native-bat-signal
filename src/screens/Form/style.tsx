import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    // flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-evenly",
    // marginTop: 50,
  },
  logoContainer: {
    // position: "absolute",
    // bottom: 100,
    right: 125,
  },
  logoStyles: {
    // alignItems: "flex-start",
    // justifyContent: "flex-start",
    // alignContent: "flex-start",
    // backgroundColor: "red",
    resizeMode: "contain",
    height: 70,
  },
  inputContainer: {
    width: 350,
    padding: 10,
    borderColor: "#000",
    borderWidth: 2,
    borderRadius: 5,
  },
  inputContainerArea: {
    width: 350,
    height: 150,
    padding: 10,
    borderColor: "#000",
    borderWidth: 2,
    borderRadius: 5,
  },
  buttonSend: {
    fontSize: 32,
    width: 350,
    textAlign: "center",
    fontWeight: "bold",
    color: "#fff",
    borderWidth: 10,
    overflow: "hidden",
    borderRadius: 15,
    backgroundColor: "black",
  },
});
