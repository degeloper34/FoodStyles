import {LinearGradient} from "expo-linear-gradient";
import {Image, Pressable, StyleSheet, View} from "react-native";
import {RootStackScreenProps} from "../../types";
import {Colors, Spacing, TextStyles} from "../styles";
import {CustomText} from "../components/atoms";
import {AntDesign, FontAwesome} from "@expo/vector-icons";

export default function GuestScreen({
  navigation,
}: RootStackScreenProps<"GuestScreen">) {
  const onPressSignUpWithEmail = () => {
    navigation.navigate("SignUpScreen");
  };

  const onPressLogIn = () => {
    navigation.navigate("LoginScreen");
  };

  const {container, btnSignIn} = styles;

  return (
    <LinearGradient
      colors={["rgb(250,119,69)", "rgb(243, 196, 66)"]}
      style={container}
    >
      <View style={{flex: 1}} />

      <View style={{flex: 2, alignItems: "center"}}>
        <Image
          source={require("../assets/images/logo.png")}
          style={{
            width: 71,
            height: 84,
          }}
          resizeMode={"contain"}
        />
        <View style={{flex: 1, justifyContent: "center"}}>
          <CustomText
            style={TextStyles.TEXT_STYLE_8}
            text={"FoodStyles"}
            type={"bold"}
          />
        </View>

        <View style={{flex: 2, justifyContent: "center"}}>
          <CustomText
            style={TextStyles.TEXT_STYLE_3}
            text={"Sign in to be able to save your\rpreferences and settings."}
            type={"regular"}
          />
        </View>
      </View>

      <View style={{flex: 3, paddingHorizontal: 70}}>
        <Pressable style={btnSignIn}>
          <FontAwesome
            name="apple"
            size={20}
            color={Colors.GREYISH_BROWN}
            style={{marginRight: Spacing.s}}
          />
          <CustomText
            style={TextStyles.TEXT_STYLE_2}
            text={"Sign in with Apple"}
            type={"semi-bold"}
          />
        </Pressable>

        <Pressable style={btnSignIn}>
          <FontAwesome
            name="facebook-official"
            size={20}
            color="#3b5998"
            style={{marginRight: Spacing.s}}
          />
          <CustomText
            style={TextStyles.TEXT_STYLE_2}
            text={"Sign in with Facebook"}
            type={"semi-bold"}
          />
        </Pressable>

        <Pressable style={btnSignIn}>
          <AntDesign
            name="google"
            size={20}
            color="#4285f4"
            style={{marginRight: Spacing.s}}
          />
          <CustomText
            style={TextStyles.TEXT_STYLE_2}
            text={"Sign in with Google"}
            type={"semi-bold"}
          />
        </Pressable>

        <Pressable style={btnSignIn} onPress={onPressSignUpWithEmail}>
          <CustomText
            style={TextStyles.TEXT_STYLE_2}
            text={"Sign up with Email"}
            type={"semi-bold"}
          />
        </Pressable>

        <Pressable
          style={{marginTop: 20, alignItems: "center"}}
          onPress={onPressLogIn}
        >
          <CustomText
            style={TextStyles.TEXT_STYLE}
            text={"Log in with Email"}
            type={"semi-bold"}
          />
        </Pressable>
      </View>

      <View style={{flex: 1, justifyContent: "center"}}>
        <CustomText
          style={TextStyles.TEXT_STYLE_4}
          text={
            "By signing in you accept the\rGeneral Terms and Privacy Policy"
          }
          type={"semi-bold"}
        />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btnSignIn: {
    borderRadius: 100,
    backgroundColor: Colors.WHITE,
    shadowColor: Colors.GREYISH_BROWN_30_20,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 7,
    shadowOpacity: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
    marginTop: 16,
    flexDirection: "row",
  },
});
