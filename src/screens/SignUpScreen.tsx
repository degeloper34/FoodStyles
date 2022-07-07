import {useMutation} from "@apollo/client";
import {LinearGradient} from "expo-linear-gradient";
import {Pressable, StyleSheet} from "react-native";
import {CustomText, Loading} from "../components/atoms";
import {Spacing, TextStyles} from "../styles";
import {useHeaderHeight} from "@react-navigation/elements";
import {SIGN_UP_WITH_EMAIL_MUTATION} from "../api/mutations";
import {Controller, useForm} from "react-hook-form";
import {CustomTextInput} from "../components/molecules";
import {SignUpForm} from "../../types";

export default function SignUpScreen() {
  const headerHeight = useHeaderHeight();

  const {handleSubmit, control, formState} = useForm<SignUpForm>({
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const [signUpWithEmail, {loading}] = useMutation(SIGN_UP_WITH_EMAIL_MUTATION);

  const onPressSignUp = async (form: SignUpForm) => {
    await signUpWithEmail({
      variables: {
        name: form?.name,
        email: form?.email,
        password: form?.password,
      },
    });
  };

  const {container, btnSignUp} = styles;

  return (
    <LinearGradient
      colors={["rgb(250,119,69)", "rgb(243, 196, 66)"]}
      style={{paddingTop: headerHeight + 12, ...container}}
    >
      {loading && <Loading />}

      <Controller
        control={control}
        name="name"
        rules={{
          required: true,
        }}
        render={({field: {onChange, value}}) => (
          <CustomTextInput
            text="Your name"
            value={value}
            onChangeText={onChange}
            maxLength={50}
          />
        )}
      />

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
            text="Password (min 6 characters)"
            value={value}
            onChangeText={onChange}
            maxLength={50}
            secureTextEntry
          />
        )}
      />

      <Pressable
        style={btnSignUp}
        onPress={handleSubmit(onPressSignUp)}
        disabled={!formState.isValid}
      >
        <CustomText
          text={"SIGN UP"}
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
  btnSignUp: {
    backgroundColor: "rgb(17,206,144)",
    alignItems: "center",
    borderRadius: 100,
    paddingVertical: Spacing.s,
    marginHorizontal: 80,
  },
});
