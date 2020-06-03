import React from 'react';
import {Text, SafeAreaView, View, TextInput, StyleSheet} from 'react-native';

export function FinalizeResetPassword() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TextInput
          style={styles.input}
          placeholder="Current Password"
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="New Password"
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 10,
    width: 200,
  },
});
