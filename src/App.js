import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Create from './Create'
import Update from "./Update";


// import Hooks from "./Hooks";
// import App from "./App.css";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Home/>}/>
        <Route path="/Create"  element={<Create/>}/>
        <Route path="/edit/:id"  element={<Update/>}/>


      </Routes>

      </BrowserRouter>

      {/* <Login /> */}
      {/* <Hooks/> */}
    </div>
  );
}

export default App;