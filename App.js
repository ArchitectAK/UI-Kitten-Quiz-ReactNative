import * as React from "react";
import { mapping, light as lightTheme } from "@eva-design/eva";
import { ApplicationProvider, Layout } from "react-native-ui-kitten";

const App = () => (
  <ApplicationProvider mapping={mapping} theme={lightTheme}>
    <Layout style={{ flex: 1 }} />
  </ApplicationProvider>
);

export default App;
