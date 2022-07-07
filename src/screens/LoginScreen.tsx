import {LinearGradient} from "expo-linear-gradient";
import {Keyboard, Pressable, StyleSheet, View} from "react-native";
import {Colors, Spacing, TextStyles} from "../styles";
import {useHeaderHeight} from "@react-navigation/elements";
import {CustomText, Loading} from "../components/atoms";
import {useMutation} from "@apollo/client";
import {LoginForm, RootStackScreenProps} from "../../types";
import {CustomTextInput} from "../components/molecules";
import {Controller, useForm} from "react-hook-form";
import {LOGIN_WITH_EMAIL_MUTATION} from "../api/mutations";

export default function LoginScreen({
  navigation,
}: RootStackScreenProps<"LoginScreen">) {
  const headerHeight = useHeaderHeight();

  const {handleSubmit, control, formState} = useForm<LoginForm>({
    mode: "onChange",
    defaultValues: {
      email: __DEV__ ? "ege@akyurek.com" : "",
      password: __DEV__ ? "123456" : "",
    },
  });

  const [loginWithEmail, {loading, error}] = useMutation(
    LOGIN_WITH_EMAIL_MUTATION
  );

  const onPressLogIn = async (form: LoginForm) => {
    Keyboard.dismiss();

    await loginWithEmail({
      variables: {email: form.email, password: form.password},
    });
    navigation.navigate("HomeNavigator");
  };

  const {container, viewError, btnLogIn} = styles;

  return (
    <LinearGradient
      colors={["rgb(250,119,69)", "rgb(243, 196, 66)"]}
      style={{paddingTop: headerHeight + 12, ...container}}
    >
      {loading && <Loading />}

      <Controller
        control={control}
        name="email"
        rules={{
          required: true,
          pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        }}
        render={({field: {onChange, value}}) => (
          <CustomTextInput
            text="Email"
            value={value}
            onChangeText={onChange}
            maxLength={50}
          />
        )}
      />

      <Controller
        control={control}
        name="password"
        rules={{
          required: true,
          minLength: 6,
        }}
        render={({field: {onChange, value}}) => (
          <CustomTextInput
            text="Password"
            value={value}
            onChangeText={onChange}
            secureTextEntry
            maxLength={6}
          />
        )}
      />

      {error && (
        <View style={viewError}>
          <CustomText
            text={error.message}
            type={"semi-bold"}
            style={TextStyles.TEXT_STYLE}
          />
        </View>
      )}

      <Pressable
        style={btnLogIn}
        onPress={handleSubmit(onPressLogIn)}
        disabled={!formState.isValid}
      >
        <CustomText
          text={"LOG IN"}
          type={"bold"}
          style={TextStyles.TEXT_STYLE}
        />
      </Pressable>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: Spacing.xxxl,
  },
  viewError: {
    backgroundColor: "#f13838",
    borderRadius: Spacing.xxs,
    alignItems: "center",
    paddingVertical: Spacing.xxs,
    marginBottom: Spacing.s,
    marginHorizontal: Spacing.xxxl,
  },
  btnLogIn: {
    backgroundColor: "rgb(17,206,144)",
    alignItems: "center",
    borderRadius: 100,
    paddingVertical: Spacing.s,
    marginHorizontal: 80,
  },
});
