import React from "react";
import { Home, Login, CreateAccount, EditAccount } from "./pages";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/new" element={<CreateAccount />} />
        <Route path="/account" element={<EditAccount />} />
      </Routes>
    </Router>
  );
}

export default App;
