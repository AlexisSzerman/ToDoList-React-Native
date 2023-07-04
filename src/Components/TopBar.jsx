import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
  } from "react-native";
  import React from "react";
  
  const TopBar = ({ input, setInput, onAddTask }) => {
    return (
      <View style={styles.container}>
        <Text style={styles.topHeader}>ToDoList</Text>
        <View style={styles.view1}>
          <TextInput
            placeholder="Agregar Tarea"
            placeholderTextColor="gray"
            style={styles.input}
            value={input}
            onChangeText={setInput}
          />
          <TouchableOpacity style={styles.button} onPress={onAddTask}>
            <Text style={styles.buttonText}>Agregar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  
  export default TopBar;
  
  const styles = StyleSheet.create({
    view1: {
        alignItems: "center",
        marginTop: 15,
        marginBottom: 30
      },
    topHeader: {
      fontSize: 30,
      textAlign: "center",
      color: "white",
      fontWeight: 'bold'
    },
    container: {
      marginTop: 300,
    },
    input: {
      width: 250,
      height: 35,
      borderBottomColor: "white",
      borderBottomWidth: 3,
      color: "gray",
      fontSize: 20,
    },
    button: {
      backgroundColor: "white",
      width: 200,
      height: 40,
      borderRadius: 10,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 10
    },
    buttonText: {
      fontSize: 16,
      textAlign: "center",
      color:'black',
      fontWeight: "bold",
    },    
  });