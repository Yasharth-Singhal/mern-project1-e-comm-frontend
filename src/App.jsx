
import { Box } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/ui/componentsmain/Homepage";
import Createpage from "./components/ui/componentsmain/Createpage.jsx";
import Navbar from "./components/ui/componentsmain/Navbar.jsx";

function App() {
  return (
    <Box minH="100vh" bg="bg.subtle">
      <Navbar/>

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/create" element={<Createpage />} />
      </Routes>
    </Box>
  );
}

export default App;
