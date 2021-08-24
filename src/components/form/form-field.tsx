import React, { ReactElement } from "react";
import { View, TextInput } from "react-native";
import Text from "../text/text";
import styles from "./forms.styles";
const FormField = (props: any): ReactElement => {
  const {
    placeholder,
    form: { errors, touched, setFieldTouched },
    field: { name, onBlur, onChange, value },
    ...inputProps
  } = props;

  const hasError = errors[name] && touched[name];

  return (
    <View>
      <Text weight="400" style={styles.inputLabel}>
        {name}
      </Text>
      <TextInput
        style={styles.inputBox}
        placeholder={placeholder}
        onChangeText={text => {
          onChange(name)(text);
          setFieldTouched(name);
        }}
        onBlur={() => {
          onBlur(name);
        }}
        autoCorrect={false}
        autoCapitalize="none"
        autoCompleteType={name}
        value={value}
        {...inputProps}
      />
      {!hasError && name === "password" ? (
        <Text weight="400" style={[styles.validationText, { color: "#565656" }]}>
          {"* 영어, 숫자, 특수문자를 조합해 8자리 이상으로 입력해주세요."}
        </Text>
      ) : (
        hasError && (
          <Text weight="400" style={styles.validationText}>
            {errors[name]}
          </Text>
        )
      )}
    </View>
  );
};

FormField.displayName = "FormField";
export default FormField;
