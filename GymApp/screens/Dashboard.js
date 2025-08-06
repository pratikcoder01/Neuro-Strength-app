import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome5, MaterialIcons, Ionicons } from '@expo/vector-icons';

export default function Dashboard({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Welcome to Gym Dashboard</Text>

      <View style={styles.cardContainer}>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Members')}>
          <FontAwesome5 name="users" size={40} color="#fff" />
          <Text style={styles.cardText}>Members</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Workouts')}>
          <MaterialIcons name="fitness-center" size={40} color="#fff" />
          <Text style={styles.cardText}>Workout Plans</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Attendance')}>
          <Ionicons name="calendar" size={40} color="#fff" />
          <Text style={styles.cardText}>Attendance</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Settings')}>
          <Ionicons name="settings-sharp" size={40} color="#fff" />
          <Text style={styles.cardText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flexGrow: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#2c3e50',
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
  },
  card: {
    backgroundColor: '#1abc9c',
    width: '47%',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
    elevation: 5,
  },
  cardText: {
    marginTop: 10,
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
});
