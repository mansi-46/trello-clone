import './App.css';
import {store} from "./store";
import Router from "./Routes";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./Pages/login";
import {Provider} from "react-redux";

function App() {
  return (
      <>
        <Provider store={store}>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </Provider>
      </>
  );
}

export default App;

