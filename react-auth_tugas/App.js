// src/screens/LoginScreen.js
import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button, Text, TouchableOpacity } from 'react-native';

export default function App(){
  const myEmail = "222310062@student.ibik.ac.id";
  const myPass = "220705";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handlerSubmit = () => {
    let valid = true;
    if (!email) {
      setEmailError("Email harus diisi!");
      valid = false;
    } else if (email !== myEmail) {
      setEmailError("Email yang Anda masukan salah!");
      valid = false;
    } else {
      setEmailError("");
    }

    if (!password) {
      setPasswordError("Password harus diisi!");
      valid = false;
    } else if (password !== myPass) {
      setPasswordError("Password yang Anda masukan salah!");
      valid = false;
    } else {
      setPasswordError("");
    }

    if (valid) {
      alert(`Selamat datang, ${email}`)
    }
  };

  return (
        <View style={styles.container}>
            <View style={styles.formContainer}>
                <Text style={styles.title}>Login</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    defaultValue={email}
                    onChangeText={(text) => setEmail(text)}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
                {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
                  <TextInput
                    style={styles.input}
                    placeholder="Password"
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    secureTextEntry
                    autoCapitalize="none"
                  />
                  {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
                  <TouchableOpacity style={styles.button} onPress={handlerSubmit}>
                    <Text style={styles.buttonText}>Login</Text>
                  </TouchableOpacity>
            </View>
        </View>
    );

  }
  
  const styles = StyleSheet.create({
      container: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 16,
          backgroundColor: '#d8d8d8',
      },
      formContainer: {
          width: '100%',
          maxWidth: 400,
          padding: 16,
          borderWidth: 1,
          borderColor: '#d9d9d9',
          borderRadius: 8,
          backgroundColor: '#133b34',
          elevation: 2,
      },
      title: {
          fontSize: 24,
          marginBottom: 24,
          textAlign: 'center',
          fontWeight: 'bold',
          color: '#b5b7bb',
      },
      input: {
          height: 40,
          borderColor: '#ccc',
          borderWidth: 1,
          borderRadius: 5,
          marginBottom: 16,
          paddingHorizontal: 8,
          backgroundColor: '#fff',
      },
      errorText: {
        color: 'red',
        marginBottom: 16,
        fontSize: 14,
      },
      button: {
          backgroundColor: '#b5b7bb',
          padding: 10,
          borderRadius: 5,
          alignItems: 'center',
      },
      buttonText: {
          color: '#000000',
          fontSize: 16,
          fontWeight: 'bold',
      },
  });