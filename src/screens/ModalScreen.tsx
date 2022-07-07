import {LinearGradient} from "expo-linear-gradient";
import {Pressable, StyleSheet} from "react-native";
import {CustomText, Loading} from "../components/atoms";
import {Spacing, TextStyles} from "../styles";
import {useMutation} from "@apollo/client";
import {CREATE_CARD_MUTATION} from "../graphql/mutations";
import {Controller, useForm} from "react-hook-form";
import {CustomTextInput} from "../components/molecules";
import {CreateCardForm, RootStackScreenProps} from "../../types";
import {client} from "../../App";
import {GET_CARDS_QUERY} from "../graphql/queries";

export default function ModalScreen({
  navigation,
}: RootStackScreenProps<"ModalScreen">) {
  const [createCard, {loading}] = useMutation(CREATE_CARD_MUTATION);

  const {handleSubmit, control, formState} = useForm<CreateCardForm>({
    mode: "onChange",
    defaultValues: {
      name: "",
    },
  });

  const onPressCreate = async (form: CreateCardForm) => {
    await createCard({variables: {name: form.name}});

    await client.refetchQueries({
      include: [GET_CARDS_QUERY],
    });
    navigation.pop();
  };

  const {container, btnCreate} = styles;

  return (
    <LinearGradient
      colors={["rgb(250,119,69)", "rgb(243, 196, 66)"]}
      style={container}
    >
      {loading && <Loading />}
      <Controller
        control={control}
        name="name"
        rules={{
          required: true,
          minLength: 5,
        }}
        render={({field: {onChange, value}}) => (
          <CustomTextInput
            text="Name"
            value={value}
            onChangeText={onChange}
            maxLength={50}
          />
        )}
      />
      <Pressable
        style={btnCreate}
        onPress={handleSubmit(onPressCreate)}
        disabled={!formState.isValid}
      >
        <CustomText
          text={"CREATE"}
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
    paddingTop: 100,
    paddingHorizontal: Spacing.xxxl,
  },
  btnCreate: {
    backgroundColor: "rgb(17,206,144)",
    alignItems: "center",
    borderRadius: 100,
    paddingVertical: Spacing.s,
    marginHorizontal: 80,
  },
});
