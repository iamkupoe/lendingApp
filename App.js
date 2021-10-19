import React from "react";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import AppContainer from "./navigation/Navigation";
import { PersistGate } from "redux-persist/integration/react";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppContainer />
      </PersistGate>
    </Provider>
  );
};

export default App;
