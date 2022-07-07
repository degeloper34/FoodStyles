import {ActivityIndicator, StyleSheet} from "react-native";
import {Colors} from "../../styles";

export function Loading() {
  return (
    <ActivityIndicator
      size={"large"}
      color={Colors.WHITE}
      style={styles.activityIndicator}
    />
  );
}

const styles = StyleSheet.create({
  activityIndicator: {
    flex: 1,
    justifyContent: "center",
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    zIndex: 2,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
});
