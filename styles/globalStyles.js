import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6F9A88",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
  },
  bigTitle: {
    color: "white",
    fontSize: 60,
    textAlign: "center",
    marginTop: 50,
  },
  titleText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#6F9A88",
    textAlign: "center",
  },
  titleText2: {
    fontSize: 23,
    fontWeight: "bold",
    color: "#6F9A88",
    textAlign: "center",
    marginBottom: 0,
  },
  subtitleText: {
    fontSize: 20,
    textAlign: "center",
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
    textAlign: "center",
  },
  background: {
    width: "100%",
    height: "100%",
  },
  backgroundBox: {
    marginVertical: 30,
    backgroundColor: "white",
    width: "95%",
    flexDirection: "column",
    borderRadius: 25,
    justifyContent: "space-between",
    flex: 1,
    alignSelf: "center",
    paddingVertical: 10,
  },
  logo: {
    width: 100,
    height: 100,
    marginLeft: "15%",
    marginTop: "10%",
  },
  LogInSignUpForm: {
    // flex: 1,
    justifyContent: "center",
    padding: "5%",
  },
  InputField: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    padding: "3%",
  },
  leftIconStyle: {
    marginRight: 10,
  },
  buttonGroup: {
    justifyContent: "flex-end",
    alignItems: "center",
    position: "absolute",
    width: "100%",
    height: "100%",
    flex: 1,
  },
  buttonGroupRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: "10%",
  },
  button: {
    fontSize: 20,
    backgroundColor: "#1BB49D",
    color: "#fff",
    width: "80%",
    textAlign: "center",
    borderRadius: 25,
    fontWeight: "bold",
    marginHorizontal: "10%",
    marginTop: "5%",
    marginBottom: "5%",
    paddingVertical: '5%',
    overflow: 'hidden',
  },
  buttonPlusMinus: {
    marginHorizontal: "-5%",
  },
  buttonDisabled: {
    color: "#cedbf0",
  },
  buttonRemove: {
    backgroundColor: "#1BB49D",
    color: "#fff",
    width: "100%",
    textAlign: "center",
    fontWeight: "bold",
    marginRight: "50%",
    padding: "3%",
    fontSize: 14,
    marginTop: "5%",
    marginBottom: "5%",
    borderRadius: 5,
    overflow: 'hidden'
  },
  buttonSave: {
    backgroundColor: "#1BB49D",
    color: "#fff",
    width: "50%",
    textAlign: "center",
    fontWeight: "bold",
    marginLeft: "25%",
    padding: "3%",
    fontSize: 15,
    marginTop: "5%",
    marginBottom: "5%",
    borderRadius: 5,
    overflow: 'hidden'
  },
  modalWrapper: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  modalContent: {
    height: "60%",
    width: "60%",
    backgroundColor: "white",
    padding: 22,
    marginTop: "35%",
    alignSelf: "center",
    borderRadius: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 3,
  },
  storePrefs: {
    backgroundColor: "white",
    width: "80%",
    alignSelf: "center",
    margin: "1%",
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 6,
    padding: "2%",
    flexDirection: "row",
  }
});
