import React from "react";
import { MasonryFlashList } from "@shopify/flash-list";

import QuestionComponent from "../component/QuestionComponent";
import {
  Alert,
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useContext } from "react";
import { ThemeContext } from "../component/ThemeProvider";
function QuestionScreen({ route, navigation }) {
  const { theme } = useContext(ThemeContext);
  const { questionList } = route.params;
  let result = { count: 0, right: 0, wrong: 0 };
  function updateResult(isCorrect) {
    let newResult = {};
    if (isCorrect) {
      newResult = {
        ...result,
        count: result.count + 1,
        right: result.right + 1,
      };
    } else {
      newResult = {
        ...result,
        count: result.count + 1,
        wrong: result.wrong + 1,
      };
    }
    result = newResult;
  }
  function showResult() {
    Alert.alert(
      `total: ${result.count} right: ${result.right} wrong: ${result.wrong}`
    );
  }
  return (
    <ScrollView>
      <View
        style={[styles.container, { backgroundColor: theme.backgroundColor3 }]}
      >
        <MasonryFlashList
          data={questionList}
          renderItem={({ item, index }) => (
            <QuestionComponent
              updateResult={updateResult}
              questionNumber={index}
              question={item.question}
              op={[item.op1, item.op2, item.op3, item.op4]}
              answer={item.answer}
            />
          )}
          estimatedItemSize={200}
        ></MasonryFlashList>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("ScoreScreen");
          }}
        >
          <Text style={styles.text}>SHOW RESULT</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
export default QuestionScreen;
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    paddingBottom: 100,
  },
  button: {
    backgroundColor: "#bbbfff",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: -20,
    marginHorizontal: "20%",
  },
  text: {
    color: "#fff",
    fontWeight: "900",
  },
});
