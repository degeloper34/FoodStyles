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

  const {
    container,
    viewHeader,
    viewLogo,
    imgLogo,
    viewFoodStyles,
    viewWelcomeText,
    viewAuthOptions,
    iconSocial,
    btnLogIn,
    btnSignIn,
    viewTerms,
  } = styles;

  return (
    <LinearGradient
      colors={["rgb(250,119,69)", "rgb(243, 196, 66)"]}
      style={container}
    >
      <View style={viewHeader} />

      <View style={viewLogo}>
        <Image
          source={require("../assets/images/logo.png")}
          style={imgLogo}
          resizeMode={"contain"}
        />
        <View style={viewFoodStyles}>
          <CustomText
            style={TextStyles.TEXT_STYLE_8}
            text={"FoodStyles"}
            type={"bold"}
          />
        </View>

        <View style={viewWelcomeText}>
          <CustomText
            style={TextStyles.TEXT_STYLE_3}
            text={"Sign in to be able to save your\rpreferences and settings."}
            type={"regular"}
          />
        </View>
      </View>

      <View style={viewAuthOptions}>
        <Pressable style={btnSignIn}>
          <FontAwesome
            name="apple"
            size={20}
            color={Colors.GREYISH_BROWN}
            style={iconSocial}
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
            style={iconSocial}
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
            style={iconSocial}
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

        <Pressable style={btnLogIn} onPress={onPressLogIn}>
          <CustomText
            style={TextStyles.TEXT_STYLE}
            text={"Log in with Email"}
            type={"semi-bold"}
          />
        </Pressable>
      </View>

      <View style={viewTerms}>
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
  viewHeader: {
    flex: 1,
  },
  viewLogo: {
    flex: 2,
    alignItems: "center",
  },
  imgLogo: {
    width: 71,
    height: 84,
  },
  viewFoodStyles: {flex: 1, justifyContent: "center"},
  viewWelcomeText: {
    flex: 2,
    justifyContent: "center",
  },
  viewAuthOptions: {
    flex: 3,
    paddingHorizontal: 70,
  },
  iconSocial: {
    marginRight: Spacing.s,
  },
  btnLogIn: {
    marginTop: Spacing.l,
    alignItems: "center",
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
    padding: Spacing.s,
    marginTop: Spacing.m,
    flexDirection: "row",
  },
  viewTerms: {
    flex: 1,
    justifyContent: "center",
  },
});
