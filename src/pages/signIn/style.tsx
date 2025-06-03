import { StyleSheet } from "react-native";  

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 130,
    backgroundColor: '#FFF',
  },

  containerLogo: {
    alignItems: 'center',
    marginBottom: 0,
  },

  logoImage: {
    width: 320,
    height: 110,
    resizeMode: "contain",
  },

  container: {
    width: '85%',
  },

  label: {
    textAlign: 'left',
    marginBottom: 5,
    fontSize: 12,
    fontFamily: 'Roboto-Regular',
    color: "#333",
  },

  input: {
    backgroundColor: "#FFFFFF",
    width: "100%",
    marginBottom: 20,
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
    borderColor: '#5B3CC4',
    borderRadius: 8,
    borderWidth: 2,
    padding: 10,
  },

  buttonEntrar: {
    backgroundColor: "#5B3CC4",
    width: '100%',
    height: 47,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    marginTop: 20,
  },

  textButtonWhite: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: 'bold',
  },

  buttonCriar: {
    backgroundColor: "#FFF",
    borderColor: "#5B3CC4",
    height: 47,
    width: '100%',
    borderRadius: 8,
    borderWidth: 2,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },

  textButtonPurple: {
    color: "#5B3CC4",
    fontSize: 20,
    fontWeight: "bold",
  },

  error: {
    color: 'red',
    alignSelf: 'flex-start',
    marginBottom: 10,
    fontSize: 12,
  },

  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },


  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#32C35B',
    backgroundColor: '#FFF',
    marginRight: 8,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },


  checkboxCheckmark: {
    color: '#32C35B',
    fontWeight: 'bold',
    marginTop: 10,
  },


  namecheck: {
    color: "#1E1E1E",
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
    marginTop: 10,
  },

  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingVertical: 24,
    paddingHorizontal: 20,
    width: '80%',
    elevation: 5,
  },

  modalTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 6,
    color: '#000',
    textAlign: 'left',
  },

  modalMessage: {
    fontSize: 14,
    color: '#333',
    marginBottom: 20,
    textAlign: 'left',
    fontWeight: 'bold',

  },

  modalButton: {
    borderWidth: 2,
    borderColor: '#583CC4',
    borderRadius: 7,
    paddingVertical: 8,
    paddingHorizontal: 110,
    fontWeight: 'bold',
  },

  modalButtonText: {
    color: '#583CC4',
    fontWeight: 'bold',
    fontSize: 17,
  },

});
