import {Text, TextProps} from "react-native";

interface IProps extends TextProps {
  text: string | number;
  type: "regular" | "semi-bold" | "bold";
  fontSize?: number;
  textColor?: string;
  underline?: boolean;
  numberOfLines?: number;
}

export function CustomText({
  type = "regular",
  underline = false,
  style,
  text,
  numberOfLines,
}: IProps) {
  const decideFontFamilyByType = () => {
    switch (type) {
      case "regular":
        return "proxima-regular";
      case "semi-bold":
        return "proxima-semibold";
      case "bold":
        return "proxima-bold";
      default:
        return "proxima-regular";
    }
  };

  return (
    <Text
      allowFontScaling={false}
      numberOfLines={numberOfLines}
      style={[
        style,
        {
          fontFamily: decideFontFamilyByType(),
          textDecorationLine: underline ? "underline" : "none",
        },
      ]}
    >
      {text}
    </Text>
  );
}
