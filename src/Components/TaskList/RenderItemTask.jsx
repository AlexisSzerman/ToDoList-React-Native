import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const RenderItemTask = ({item, onPressTask}) => {
    return (
        <Pressable onPress={() => onPressTask(item)}>
            <View style={styles.task} key={item.id}>
                <Text style={styles.taskText}>{item.task}</Text>
            </View>
        </Pressable>
    )
}

export default RenderItemTask

const styles = StyleSheet.create({
    task: {
      width: 350,
      padding: 10,
      backgroundColor: "grey",
      borderRadius: 6,
      borderColor: "#FFFFFF",
      borderWidth: 2,
      marginBottom: 15,
    },
    taskText: {
      fontSize: 20,
    },
  });
  