import { BrowserRouter } from "react-router-dom";
import AppRouter from "./AppRouter";

import { store, persistor} from "./redux/store";
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from "react-redux";

function App() {
  return (
    <BrowserRouter>
      <PersistGate loading={null} persistor={persistor}>
        <AppRouter />
      </PersistGate>
    </BrowserRouter>
  )
}

export default App;
