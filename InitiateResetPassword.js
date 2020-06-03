import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Linking,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export function InitiateResetPassword({navigation}) {
  const [email, setEmail] = React.useState('');
  const [isEmailSent, setIsEmailSent] = React.useState(false);

  const resetPassword = React.useCallback(() => {
    fetch('http://localhost:3000/reset-password', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({email}),
    }).then((response) => {
      if (response.status === 200) {
        setIsEmailSent(true);
      }
    });
  }, [email]);

  React.useEffect(() => {
    const handleOpenUrl = (event) => {
      if (event.url.includes('reset-password')) {
        navigation.navigate('Finish Reset Password');
      }
    };

    // App is open
    Linking.addEventListener('url', handleOpenUrl);
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <View
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TextInput
            placeholder="Enter your email..."
            style={{
              width: 300,
              height: 40,
              borderColor: 'gray',
              borderWidth: 1,
              padding: 10,
              marginBottom: 10,
              fontSize: 18,
            }}
            onChangeText={setEmail}
            value={email}
            autoCapitalize="none"
            keyboardType="email-address"
          />
          <TouchableOpacity onPress={resetPassword}>
            <Text style={{fontSize: 24, color: Colors.primary}}>
              Reset Password
            </Text>
          </TouchableOpacity>

          {isEmailSent && (
            <Text style={{marginTop: 20}}>
              Reset Password Email Sent! Check your email.
            </Text>
          )}
        </View>
      </SafeAreaView>
    </>
  );
}
