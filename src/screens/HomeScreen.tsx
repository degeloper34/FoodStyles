import {useQuery} from "@apollo/client";
import {LinearGradient} from "expo-linear-gradient";
import {StyleSheet, View, Image, Pressable, FlatList} from "react-native";
import {Card, RootStackScreenProps} from "../../types";
import {GET_CARDS_QUERY} from "../graphql/queries";
import {CustomText, Loading} from "../components/atoms";
import {Colors, Spacing, TextStyles} from "../styles";

export default function HomeScreen({
  navigation,
}: RootStackScreenProps<"HomeScreen">) {
  const onPressNewFoodStyle = () => {
    navigation.navigate("ModalScreen");
  };

  const {data, loading} = useQuery(GET_CARDS_QUERY);

  const {
    container,
    viewCard,
    viewCardName,
    linearGradient,
    viewBody,
    flatList,
    viewBottom,
    btnAdd,
  } = styles;

  const renderItem = ({item}: {item: Card}) => {
    return (
      <View style={viewCard}>
        <View style={viewCardName}>
          <CustomText
            text={item?.name}
            type={"bold"}
            style={TextStyles.TEXT_STYLE_6}
            numberOfLines={2}
          />
        </View>
        <Pressable onPress={() => navigation.navigate("ActionsModal", {item})}>
          <Image source={require("../assets/images/options.png")} />
        </Pressable>
      </View>
    );
  };

  return (
    <View style={container}>
      {loading && <Loading />}
      <LinearGradient
        colors={["rgb(250,119,69)", "rgb(243, 196, 66)", "rgb(248, 248, 248)"]}
        style={linearGradient}
      />

      <View style={viewBody}>
        <FlatList
          data={data?.cards}
          renderItem={renderItem}
          keyExtractor={(_, index) => String(index)}
          contentContainerStyle={flatList}
          showsVerticalScrollIndicator={false}
          initialNumToRender={10}
        />
      </View>

      <View style={viewBottom}>
        <Pressable style={btnAdd} onPress={onPressNewFoodStyle}>
          <Image source={require("../assets/images/add.png")} />
          <CustomText
            text={"New Food Style"}
            type={"bold"}
            style={TextStyles.TEXT_STYLE_7}
          />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewCard: {
    borderRadius: 6,
    backgroundColor: Colors.WHITE,
    shadowColor: Colors.GREYISH_40,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 7,
    shadowOpacity: 1,
    alignItems: "center",
    flexDirection: "row",
    padding: Spacing.s,
    marginBottom: Spacing.xs,
  },
  viewCardName: {
    flex: 1,
  },
  linearGradient: {
    flex: 2,
  },
  viewBody: {
    flex: 9,
    backgroundColor: "rgb(248, 248, 248)",
  },
  flatList: {
    paddingHorizontal: Spacing.l,
    paddingBottom: Spacing.l,
  },
  viewBottom: {
    flex: 1,
    backgroundColor: "white",
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 15,
    shadowOpacity: 1,
  },
  btnAdd: {
    borderRadius: 6,
    backgroundColor: Colors.WHITE,
    shadowColor: Colors.GREYISH_40,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 7,
    shadowOpacity: 1,
    marginHorizontal: Spacing.l,
    padding: Spacing.xs,
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 40,
    flexDirection: "row",
    alignItems: "center",
  },
});
