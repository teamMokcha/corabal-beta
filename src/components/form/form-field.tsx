import React, { ReactElement } from "react";
import { View, TextInput } from "react-native";
import Text from "../text/text";

export default function FormField(props: any): ReactElement {
  const {
    placeholder,
    form: { errors, touched, setFieldTouched },
    field: { name, onBlur, onChange, value },
    ...inputProps
  } = props;

  const hasError = errors[name] && touched[name];

  return (
    <View>
      <Text>{name}</Text>
      <TextInput
        placeholder={placeholder}
        onChangeText={text => onChange(name)(text)}
        onBlur={() => {
          setFieldTouched(name);
          onBlur(name);
        }}
        autoCorrect={false}
        autoCapitalize="none"
        autoCompleteType={name}
        value={value}
        {...inputProps}
      />
      {hasError && <Text>{errors[name]}</Text>}
    </View>
  );
}
