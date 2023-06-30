import './App.css';
import React from "react";
import {store} from "./store";
import Router from './routes';
import { Provider } from 'react-redux';
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
      <>
        <Provider store={store}>
          <BrowserRouter>
            <Router/>
          </BrowserRouter>
        </Provider>
      </>
  );
}

export default App;
