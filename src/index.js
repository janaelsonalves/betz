// import "expo/build/Expo.fx";
// import { AppRegistry, Platform } from "react-native";
// import withExpoRoot from "expo/build/launch/withExpoRoot";

// import App from "./app/App";
// import { createRoot } from "react-dom/client";

// AppRegistry.registerComponent("main", () => withExpoRoot(App));
// if (Platform.OS === "web") {
//   const rootTag = createRoot(
//     document.getElementById("root") ?? document.getElementById("main")
//   );
//   const RootComponent = withExpoRoot(App);
//   rootTag.render(<RootComponent />);
// }

// import { registerRootComponent } from "expo";
// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";

// import App from "./app/App";

// const container = document.getElementById("root");
// const root = createRoot(container);

// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );

// registerRootComponent(App);

import { createRoot } from "react-dom/client";
import App from "./app/App";

const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);
