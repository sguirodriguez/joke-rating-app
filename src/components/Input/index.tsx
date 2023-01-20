import React from "react";
import { KeyboardTypeOptions, ReturnKeyTypeOptions } from "react-native";
import { InputComponent } from "./styles";
import { colors } from "../../styles/config.styles";

interface Props {
  onChangeText: (value: any) => any;
  value: any;
  placeholderTextColor?: any;
  placeholder?: string;
  secureTextEntry?: boolean;
  autoCapitalize?: "none" | "sentences" | "words" | "characters" | undefined;
  style?: any;
  editable?: boolean;
  maxLength?: number | undefined;
  keyboardType?: KeyboardTypeOptions;
  returnKeyType?: ReturnKeyTypeOptions;
  testID?: string | undefined;
}

const Input: React.FC<Props> = ({
  onChangeText = () => {},
  value,
  placeholderTextColor = colors.black,
  placeholder,
  secureTextEntry = false,
  autoCapitalize = "none",
  style,
  editable = true,
  maxLength,
  keyboardType,
  returnKeyType,
  testID,
}) => {
  return (
    <InputComponent
      testID={testID}
      autoCapitalize={autoCapitalize}
      secureTextEntry={secureTextEntry}
      style={style}
      placeholder={placeholder}
      value={value}
      placeholderTextColor={placeholderTextColor}
      onChangeText={onChangeText}
      editable={editable}
      maxLength={maxLength ? maxLength : 256}
      keyboardType={keyboardType}
      returnKeyType={returnKeyType}
    />
  );
};

export default Input;
