import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  image: {
    padding: 5,
    height: 100,
    width: 100,
    borderRadius: 400,
  },
  header: {
    width: "100%",
    height: "10%",
    backgroundColor: "#43A047",
    alignItems: "center",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 15,
  },
  dogLogo: {
    alignItems: "center",
    marginBottom: 20,
  },
  openScreenContainer: {
    alignItems: "center",
  },
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "white",
    borderColor: "#ccc",
    borderWidth: 1,
  },
  listtext: {
    alignSelf: "flex-end",
    fontSize: 20,
    color: "black",
  },
  nameText: {
    alignSelf: "center",
    marginVertical: 30,
    fontSize: 42,
  },
  logOutBtn: {
    width: 150,
    alignSelf: "center",
    alignItems: "center",
    padding: 10,
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: "red",
    borderRadius: 10,
  },
  openScreenBtn: {
    width: 250,
    alignSelf: "center",
    alignItems: "center",
    padding: 10,
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: "#BDF271",
    borderRadius: 10,
  },
  timeText: {
    fontSize: 30,
    marginTop: 20,
    marginBottom: 15,
    alignSelf: "center",
  },
  picktimeText: {
    fontSize: 40,
    marginTop: 20,
    marginBottom: 30,
    alignSelf: "center",
  },
  inputContainer: {
    paddingTop: 5,
    alignSelf: "center",
  },
  messageinstruction: {
    fontSize: 10,
    marginBottom: 10,
  },
  textInput: {
    borderColor: "#CCCCCC",
    borderWidth: 1,
    width: 300,
    height: 50,
    fontSize: 25,
    paddingLeft: 20,
    paddingRight: 20,
  },
});
