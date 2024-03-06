import React, { useState } from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { BatLogo } from "../../../components/BatLogo";
import { FormPage } from "../Form";

import { styles } from "./style";

export function Home() {
  const [navigation, setNavigation] = useState(false);

  function handlerNavigation() {
    setNavigation(!navigation);
  }

  return (
    <View style={styles.appContainer}>
      {navigation ? (
        <FormPage />
      ) : (
        <View>
          <View style={styles.logoContainer}>
            <BatLogo />
          </View>
          <TouchableOpacity onPress={handlerNavigation}>
            <Text style={styles.buttonPress}>Active bat signal</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
