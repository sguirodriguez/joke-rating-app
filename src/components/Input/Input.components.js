import React from "react";
import { TextInput } from "react-native";
import styles, { colors } from "./Input.styles";

const Input = (props) => {
  const {
    onChangeText = () => {},
    value,
    placeholderTextColor = colors.grayLighter,
    placeholder,
    secureTextEntry = false,
    autoCapitalize = "none",
    style,
    editable = true,
    maxLength,
    keyboardType,
    returnKeyType,
    testID,
  } = props;

  return (
    <TextInput
      testID={testID}
      autoCapitalize={autoCapitalize}
      secureTextEntry={secureTextEntry}
      style={[styles.input, style]}
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
