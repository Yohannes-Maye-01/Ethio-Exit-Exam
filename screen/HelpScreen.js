import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const HelpScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Help & Support</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🚀 Getting Started</Text>
        <Text style={styles.sectionContent}>
          Welcome to our app! Here’s a quick guide to get you started and
          explore all the available features.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>👤 Account Management</Text>
        <Text style={styles.sectionContent}>
          Learn how to update your profile, change your password, and manage
          your account settings.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>❓ FAQs</Text>
        <Text style={styles.sectionContent}>
          Find answers to the most commonly asked questions and troubleshooting
          tips.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>📧 Contact Us</Text>
        <Text style={styles.sectionContent}>
          Need further assistance? Contact our support team at
          support@example.com and we'll be happy to help.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#F4F6F9',
    flexGrow: 1,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#1E3A8A',
    textAlign: 'center',
    marginBottom: 25,
  },
  section: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 18,
    marginBottom: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2563EB',
    marginBottom: 10,
  },
  sectionContent: {
    fontSize: 16,
    color: '#475569',
    lineHeight: 24,
  },
});

export default HelpScreen;
