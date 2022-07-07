import {StyleSheet, TextInput, TextInputProps} from "react-native";
import {Spacing, TextStyles} from "../../styles";
import {CustomText} from "../atoms";

interface IProps extends TextInputProps {
  text: string;
  value: string;
  secureTextEntry?: boolean;
  maxLength?: number;
}

export function CustomTextInput({
  text,
  value,
  onChangeText,
  secureTextEntry = false,
  maxLength,
}: IProps) {
  return (
    <>
      <CustomText
        text={text}
        type={"semi-bold"}
        style={TextStyles.TEXT_STYLE}
      />
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={styles.txtInput}
        secureTextEntry={secureTextEntry}
        maxLength={maxLength}
      />
    </>
  );
}

const styles = StyleSheet.create({
  txtInput: {
    backgroundColor: "white",
    paddingVertical: Spacing.s,
    paddingHorizontal: Spacing.xs,
    marginTop: Spacing.xs,
    marginBottom: Spacing.m,
    borderRadius: 4,
    fontFamily: "proxima-regular",
  },
});
