import { Routes, Route } from "react-router-dom";

import Login from "./features/auth/pages/Login";
import Register from "./features/auth/pages/Register";
import Landing from "./features/auth/pages/Landing";
import Dashboard from "./features/auth/pages/Dashboard";
import CreateProject from "./features/project/pages/CreateProject";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/editor" element={<CreateProject />} />
    </Routes>
  );
}

export default App;
