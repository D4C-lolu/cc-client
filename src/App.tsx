import { Home, CreateAccount, EditAccount } from "./pages";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/new" element={<CreateAccount />} />
        <Route path="/account/:id" element={<EditAccount />} />
      </Routes>
    </Router>
  );
}

export default App;
