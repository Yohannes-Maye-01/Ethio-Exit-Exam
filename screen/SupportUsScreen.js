import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Linking,
} from 'react-native';

const SupportUsScreen = () => {
  const openLink = (url) => {
    Linking.openURL(url).catch((err) =>
      console.error('Failed to open URL:', err)
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>❤️ Support Us</Text>

      <Text style={styles.description}>
        Your support helps us continue improving the app and creating new
        features. Every contribution, big or small, makes a difference. Thank
        you for supporting our work!
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          openLink('https://www.buymeacoffee.com/yourusername')
        }>
        <Text style={styles.buttonText}>☕ Buy Me a Coffee</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          openLink('https://fundrazr.com/yourcampaign')
        }>
        <Text style={styles.buttonText}>💙 FundRazr</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          openLink('https://www.gofundme.com/f/yourcampaign')
        }>
        <Text style={styles.buttonText}>🎗️ GoFundMe</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          openLink('https://www.paypal.com/paypalme/yourusername')
        }>
        <Text style={styles.buttonText}>💳 PayPal</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          openLink('https://ko-fi.com/yourusername')
        }>
        <Text style={styles.buttonText}>🎁 Ko-fi</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F6F9',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#1E3A8A',
    marginBottom: 15,
    textAlign: 'center',
  },

  description: {
    fontSize: 16,
    color: '#475569',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 30,
    paddingHorizontal: 10,
  },

  button: {
    width: '100%',
    backgroundColor: '#2563EB',
    paddingVertical: 16,
    borderRadius: 14,
    marginBottom: 15,
    alignItems: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.12,
    shadowRadius: 5,
    elevation: 5,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
});

export default SupportUsScreen;
