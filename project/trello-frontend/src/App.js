import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Board from './pages/Boards';
import BoardList from "./pages/ViewBoards";

function App() {
  return (
      <>
        <Router>
          <Routes>
            {/*<Route  path="/createBoard" element={<CreateBoardForm/>}/>*/}
            <Route  path="/Boards" element={<Board/>}/>
            <Route  path="/ViewBoards" element={<BoardList/>}/>
          </Routes>
        </Router>
      </>
  );
}

export default App;

