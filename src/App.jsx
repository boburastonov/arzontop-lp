import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Usage from "./pages/usage/usage";
import Contacts from "./pages/contacts/contacts";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/usage" element={<Usage />} />
      <Route path="/contacts" element={<Contacts />} />
    </Routes>
  );
}

export default App;
