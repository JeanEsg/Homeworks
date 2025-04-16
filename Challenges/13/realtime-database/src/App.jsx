import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import MessageBoard from "./components/MessageBoard";

function App() {
  return (
    <Provider store={store}>
      <MessageBoard />
    </Provider>
  );
}

export default App;
