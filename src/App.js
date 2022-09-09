import { BrowserRouter } from "react-router-dom";
import AppRouter from "./AppRouter";

import { persistor} from "./redux/store";
import { PersistGate } from 'redux-persist/integration/react';

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
