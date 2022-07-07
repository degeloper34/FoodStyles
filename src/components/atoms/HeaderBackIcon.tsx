import {Ionicons} from "@expo/vector-icons";
import {Pressable} from "react-native";

export function HeaderBackIcon({navigation}: any) {
  const onPressBack = () => {
    navigation.goBack();
  };

  return (
    <Pressable onPress={onPressBack}>
      <Ionicons name="chevron-back-circle-sharp" size={40} color="white" />
    </Pressable>
  );
}
