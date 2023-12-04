import { Text, View, StyleSheet, Pressable } from "react-native";

const GoalItem = (props) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#dddddd" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({ presse }) => presse && styles.pressItem}
      >
        <Text style={styles.goalText}>{props.text} </Text>
      </Pressable>
    </View>
  );
};
export default GoalItem;
const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressItem: {
    opacity: 0.5,
  },
  goalText: {
    padding: 8,
    color: "white",
  },
});
