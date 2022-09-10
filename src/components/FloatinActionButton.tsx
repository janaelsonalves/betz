import * as React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const FloatingActionButton = (props: any) => {
  return (
    <View style={[props.style, styles.container]}>
      <TouchableOpacity style={[styles.button]} {...props}>
        <Ionicons name="add" size={30} color="#FFF" />
      </TouchableOpacity>
    </View>
  );
};

// interface Props {
//   style: object;
// }

// interface State {

// }

// class  extends React.Component<Props, State>{
//   render() {
//     return (
//       <View style={styles.container}>
//       <TouchableOpacity style={[this.props.style, styles.button, styles.menu]}>
//         <Ionicons name="add" size={24} color="#FFF" />
//       </TouchableOpacity>
//     </View>

//      );
//   }
// }

export default FloatingActionButton;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    position: "absolute",
    bottom: 70,
    right: 50,
  },
  button: {
    backgroundColor: "#00213B",
    position: "absolute",
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    justifyContent: "center",
    alignItems: "center",
    shadowRadius: 10,
    shadowColor: "#00213B",
    shadowOpacity: 0.3,
    shadowOffset: {
      height: 10,
      width: 10,
    },
  },
});
