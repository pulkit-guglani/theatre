import logo from "./logo.svg";
import "./App.css";
import RoomsList from "./Components/RoomList";
import Header from "./Components/Header";
import AdminPrompt from "./Components/Admin/AdminPrompt";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import { useContext } from "react";
import AdminLogin from "./Components/Admin/AdminLogin";
import AdminMovieSelection from "./Components/Admin/AdminMovieSelection";
import MovieRoom from "./Components/MovieRoom/MovieRoom";

function App() {
  const adminKeys = ["1234", "4321"];
  const roomCodes = ["room1", "room2"];
  return (
    <div className="App">
      <Header />
      <AllRoutes />
    </div>
  );
}

const AllRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<RoomsList count="5" />}></Route>
      <Route
        path="/adminPrompt"
        element={<AdminPrompt roomID="156" roomName="Room 2" />}
      ></Route>
      <Route path="/adminLogin" element={<AdminLogin />}></Route>
      <Route
        path="/adminMovieSelection"
        element={<AdminMovieSelection />}
      ></Route>
      <Route path="/movieRoom" element={<MovieRoom />}></Route>
    </Routes>
  </BrowserRouter>
);

const AuthenticationContext = () => useContext(); // TODO : Complete authentication code for admin and Room codes then work on this
export default App;
