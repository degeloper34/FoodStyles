import {TextInput, TextInputProps} from "react-native";
import {TextStyles} from "../../styles";
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
        style={{
          backgroundColor: "white",
          paddingVertical: 12,
          paddingHorizontal: 8,
          marginTop: 8,
          marginBottom: 16,
          borderRadius: 4,
          fontFamily: "proxima-regular",
        }}
        secureTextEntry={secureTextEntry}
        maxLength={maxLength}
      />
    </>
  );
}
