import {
  TextInput,
  StyleSheet,
  View,
  Button,
  Modal,
  Image,
} from "react-native";
import { useState } from "react";
const GoalInput = (props) => {
  const [enterdGoalText, setEnterdGoalText] = useState("");

  const goalInputHandler = (enterdText) => {
    setEnterdGoalText(enterdText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enterdGoalText);
    setEnterdGoalText("");
  };
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          //source={require("../assets/images/goal.png")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
          value={enterdGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color="#f31282" />
          </View>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color="#b180f0" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    backgroundColor: "#e4d0ff",
    borderColor: "#e4d0ff",
    color: "#120483",
    borderRadius: 6,
    width: "100%",
    padding: 16,
  },
  inputContainer: {
    //flexDirection: "row", // defualt -> column
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#311b6b",
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});
