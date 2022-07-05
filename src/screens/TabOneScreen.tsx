import {StyleSheet} from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import {Text, View} from "react-native";
import {RootTabScreenProps} from "../../types";
import { TextStyles } from "../styles";

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  return (
    <View style={styles.container}>
      <Text style={TextStyles.TEXT_STYLE_6}>Tab One</Text>
      <View style={styles.separator} />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
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
