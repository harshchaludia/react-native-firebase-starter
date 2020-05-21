import React, { memo, useState } from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import BackButton from "../components/BackButton";
import { themeColors } from "../core/themeColors";
import { emailValidation, passwordValidation } from "../core/FormValidation";
import { loginUser } from "../auth/auth-handle";
import Toast from "../components/Toast";

const LoginScreen = ({ navigation }) => {
  const [emailField, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const _onLoginPressed = async () => {
    if (loading) return;

    const emailError = emailValidation(emailField.value);
    const passwordError = passwordValidation(password.value);

    if (emailError || passwordError) {
      setEmail({ ...emailField, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }

    setLoading(true);

    const response = await loginUser({
      email: emailField.value,
      password: password.value
    });

    if (response.error) {
      setError(response.error);
    }

    setLoading(false);
  };

  return (
    <Background>
      <BackButton goBack={() => navigation.navigate("HomeScreen")} />

      <Logo />

      <Header>Welcome back.</Header>

      <TextInput
        label="Email"
        returnKeyType="next"
        value={emailField.value}
        onChangeText={text => setEmail({ value: text, error: "" })}
        error={!!emailField.error}
        errorText={emailField.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />

      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={text => setPassword({ value: text, error: "" })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
        autoCapitalize="none"
      />

      <View style={styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => navigation.navigate("ForgotPasswordScreen")}
        >
          <Text style={styles.label}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>

      <Button loading={loading} mode="contained" onPress={_onLoginPressed}>
        Login
      </Button>

      <View style={styles.row}>

          <Button mode="contained" onPress={() => navigation.navigate("RegisterScreen")}>
        REGISTER
      </Button>
      </View>

      <Toast message={error} onDismiss={() => setError("")} />
    </Background>
  );
};

const styles = StyleSheet.create({
  forgotPassword: {
    width: "100%",
    alignItems: "flex-start",
    marginBottom: 24
  },
  row: {
    flexDirection: "row",
    marginTop: 4
  },
  label: {
    color: themeColors.colors.secondary
  },
  link: {
    fontWeight: "bold",
    color: themeColors.colors.primary
  }
});

export default memo(LoginScreen);
