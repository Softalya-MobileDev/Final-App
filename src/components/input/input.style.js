import { StyleSheet } from "react-native";

const inputStyles = StyleSheet.create({
  inputContainer: {
    width: "80%",
    marginTop: 16,
  },
  label: {
    fontSize: 20,
    marginBottom: 8,
    fontWeight: "bold",
    color: "white",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 12,
    fontSize: 16,
    marginBottom: 16,
    color: "black",
    backgroundColor: "#EBEFF2", // Gri arka plan rengi
    shadowColor: "black", // Gölge rengi
    shadowOffset: { width: 0, height: 2 }, // Gölge yönü ve boyutu
    shadowOpacity: 0.2, // Gölge opaklığı
    shadowRadius: 4, // Gölge yarıçapı
    elevation: 5, // Android için yükseltme değeri
  },
});

export default inputStyles;
