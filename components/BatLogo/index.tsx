import React from "react";
import { Image, Text, View } from "react-native";
import Batlogo from "../../assets/bat-logo.png";

// import { styles } from "./style";

export function BatLogo() {
  return (
    <>
      <Image
        source={Batlogo}
        style={{
          resizeMode: "contain",
          height: 200,
        }}
      />
    </>
  );
}
