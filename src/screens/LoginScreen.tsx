import {LinearGradient} from "expo-linear-gradient";
import {Pressable, StyleSheet, Text, TextInput} from "react-native";
import {Colors} from "../styles";

export default function LoginScreen() {
  const onPressLogIn = () => {};

  return (
    <LinearGradient
      colors={["rgb(250,119,69)", "rgb(243, 196, 66)"]}
      style={{flex: 1, justifyContent: "center"}}
    >
      <Text>Email</Text>
      <TextInput style={{backgroundColor: "white"}} />

      <Text>Password</Text>
      <TextInput style={{backgroundColor: "white"}} />

      <Pressable
        style={{backgroundColor: Colors.GREEN_TEAL}}
        onPress={onPressLogIn}
      >
        <Text>LOG IN</Text>
      </Pressable>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
