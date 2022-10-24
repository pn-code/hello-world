import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Inbox from "./components/Inbox";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";
import "./App.css";


const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/inbox" element={<Inbox/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
