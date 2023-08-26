import { ToastContainer } from "react-toastify";
import Cards from "./components/cards.tsx";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

import Header from "./components/header.tsx";
import { Box } from "@mui/material";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Header />
      <Cards />
    </div>
  );
}

export default App;
