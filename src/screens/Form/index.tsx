import React from "react";
import {
  TextInput,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import { styles } from "./style";
// import { BatLogo } from "../../../components/BatLogo";
import Batlogo from "../../../assets/bat-logo.png";

export function FormPage() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.logoContainer}>
        <Image source={Batlogo} style={styles.logoStyles} />
      </View>
      <View>
        <TextInput placeholder="Name" style={styles.inputContainer} />
      </View>
      <View>
        <Text>Celular</Text>
        <TextInput
          placeholder="(xx) xxxxx-xxxx"
          style={styles.inputContainer}
        />
      </View>
      <View>
        <Text>E-mail</Text>
        <TextInput placeholder="e-mail" style={styles.inputContainerArea} />
      </View>
      <View>
        <Text>E-mail</Text>
        <TextInput placeholder="e-mail" style={styles.inputContainerArea} />
      </View>

      <View>
        <TouchableOpacity onPress={() => console.log("pressionado")}>
          {/* <Text style={styles.buttonPress}>Active bat signal</Text> */}
          <Text
            style={styles.buttonSend}
            onPress={() => Alert.alert("Dados Enviados com Sucesso.")}
          >
            {" "}
            Enviar{" "}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
