import { StyleSheet, FlatList, View } from "react-native";
import React from "react";
import RenderItemTask from "./RenderItemTask";

const TaskList = ({ list, onPressTask, deleteTask }) => {
    return (
      <View style={styles.view2}>
        <FlatList
          data={list}
          keyExtractor={(task) => task.id}
          renderItem={({ item }) => (
            <RenderItemTask item={item} onPressTask={onPressTask} deleteTask={deleteTask} />
          )}
        />
      </View>
    );
  };
  

export default TaskList;

const styles = StyleSheet.create({
    view2: {
        alignItems: "center",
    },
});
