import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import TopBar from "../Components/TopBar";
import TaskList from "../Components/TaskList";
import ModalTask from "../Components/Modal";


const MainScreen = () => {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [taskActive, setTaskActive] = useState({});

  const onAddTask = () => {
    setList([
      ...list,
      {
        id: list.length + 1,
        task: input,
        completed: false,
      },
    ]);
    setInput("");
  };

  const onPressTask = (task) => {
    setTaskActive(task);
    setModalVisible(!modalVisible);
  };

  const deleteTask = (taskId) => {
    setList((prevList) => prevList.filter((task) => task.id !== taskId));
  };
  
  const completedTask = (taskId) => {
    setList((prevList) =>
      prevList.map((task) => {
        if (task.id === taskId) {
          return { ...task, completed: true };
        }
        return task;
      })
    );
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
        
        <TopBar 
        input={input} 
        onAddTask={onAddTask} 
        setInput={setInput} 
        />
        
        <TaskList 
        list={list} 
        onPressTask={onPressTask} 
        deleteTask={deleteTask} 
        />

        <ModalTask 
        modalVisible={modalVisible} 
        setModalVisible={setModalVisible} 
        taskActive={taskActive} 
        completedTask={completedTask}
        />

    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
});
