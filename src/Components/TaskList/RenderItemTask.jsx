import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

const RenderItemTask = ({ item, onPressTask, deleteTask }) => {
  const handleDeleteTask = () => {
    deleteTask(item.id);
  };

  return (
    <Pressable onPress={() => onPressTask(item)}>
      <View style={styles.task} key={item.id}>
        <Text style={styles.taskText}>{item.task}</Text>
        <Pressable onPress={handleDeleteTask} style={styles.deleteButton}>
          <Text style={styles.deleteButtonText}>X</Text>
        </Pressable>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  task: {
    width: 350,
    padding: 10,
    backgroundColor: 'grey',
    borderRadius: 6,
    borderColor: '#FFFFFF',
    borderWidth: 2,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  taskText: {
    fontSize: 20,
    color: '#FFFFFF'
  },
  deleteButton: {
    backgroundColor: 'black',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 4,
  },
  deleteButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default RenderItemTask;
