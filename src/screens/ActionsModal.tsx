import {LinearGradient} from "expo-linear-gradient";
import {Alert, Image, Pressable, StyleSheet, View, Share} from "react-native";
import {CustomText} from "../components/atoms";
import {TextStyles} from "../styles";
import {useMutation} from "@apollo/client";
import {
  DELETE_CARD_MUTATION,
  DUPLICATE_CARD_MUTATION,
  SHARE_CARD_MUTATION,
} from "../api/mutations";
import {RootStackScreenProps} from "../../types";
import {client} from "../../App";
import {GET_CARDS_QUERY} from "../api/queries";
import {BlurView} from "expo-blur";
import {Ionicons} from "@expo/vector-icons";

export default function ActionsModal({
  navigation,
  route,
}: RootStackScreenProps<"ActionsModal">) {
  const {item} = route.params;

  const [share] = useMutation(SHARE_CARD_MUTATION);
  const [duplicate] = useMutation(DUPLICATE_CARD_MUTATION);
  const [remove] = useMutation(DELETE_CARD_MUTATION);

  const onPressGoBack = () => {
    navigation.goBack();
  };

  const onPressShare = async () => {
    await share({variables: {id: item.id}});

    await Share.share({
      message: item?.name,
    });
  };

  const onPressDuplicate = async () => {
    await duplicate({variables: {id: item.id}});
    await reFetchCards();

    navigation.pop();
  };

  const onPressRemove = async () => {
    Alert.alert(
      "Confirm delete",
      "This will delete the Food Style and all its settings.",
      [
        {
          text: "Delete",
          onPress: onPressDelete,
          style: "destructive",
        },
        {text: "Cancel", onPress: () => console.log("Cancel Pressed")},
      ]
    );
  };

  const onPressDelete = async () => {
    await remove({variables: {id: item.id}});
    await reFetchCards();

    navigation.pop();
  };

  const reFetchCards = async () => {
    await client.refetchQueries({
      include: [GET_CARDS_QUERY],
    });
  };

  const {
    container,
    btnBlur,
    viewBlur,
    linearGradient,
    txtName,
    viewCardName,
    viewActionsContainer,
    viewAction,
  } = styles;

  return (
    <View style={container}>
      <Pressable style={btnBlur} onPress={onPressGoBack}>
        <BlurView intensity={20} style={viewBlur} />
      </Pressable>

      <LinearGradient
        colors={["rgb(250,119,69)", "rgb(243, 196, 66)"]}
        style={linearGradient}
      >
        <View style={viewCardName}>
          <CustomText
            text={item.name}
            type={"semi-bold"}
            style={[txtName, TextStyles.TEXT_STYLE_6]}
            numberOfLines={2}
          />
        </View>

        <View style={viewActionsContainer}>
          <View style={viewAction}>
            <Pressable onPress={onPressGoBack}>
              <Ionicons
                name="chevron-back-circle-sharp"
                size={50}
                color="white"
              />
            </Pressable>

            <CustomText
              text={"Back"}
              type={"semi-bold"}
              style={TextStyles.TEXT_STYLE_6}
            />
          </View>

          <View style={viewAction}>
            <Pressable onPress={onPressShare}>
              <Image source={require("../assets/images/share.png")} />
            </Pressable>

            <CustomText
              text={"Share"}
              type={"semi-bold"}
              style={TextStyles.TEXT_STYLE_6}
            />
          </View>

          <View style={viewAction}>
            <Pressable onPress={onPressDuplicate}>
              <Image source={require("../assets/images/duplicate.png")} />
            </Pressable>

            <CustomText
              text={"Duplicate"}
              type={"semi-bold"}
              style={TextStyles.TEXT_STYLE_6}
            />
          </View>

          <View style={viewAction}>
            <Pressable onPress={onPressRemove}>
              <Image source={require("../assets/images/delete.png")} />
            </Pressable>

            <CustomText
              text={"Delete"}
              type={"semi-bold"}
              style={TextStyles.TEXT_STYLE_6}
            />
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btnBlur: {
    flex: 3,
  },
  viewBlur: {
    flex: 1,
    backgroundColor: "transparent",
  },
  linearGradient: {
    flex: 1,
  },
  viewCardName: {
    alignItems: "center",
    padding: 16,
    justifyContent: "center",
  },
  txtName: {
    textAlign: "center",
  },
  viewActionsContainer: {
    flexDirection: "row",
  },
  viewAction: {
    flex: 1,
    alignItems: "center",
  },
});
