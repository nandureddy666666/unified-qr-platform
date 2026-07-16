import { Routes, Route } from "react-router-dom";
import MultiLink from "./pages/MultiLink";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import CreateQR from "./pages/CreateQR";
import MyQR from "./pages/MyQR";
import Profile from "./pages/Profile";
import LinksPage from "./pages/LinksPage";

function App() {
  return (
    <Routes>
      <Route path="/links/:id" element={<LinksPage />} />
      <Route path="/multilink" element={<MultiLink />} />
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/create" element={<CreateQR />} />
      <Route path="/myqr" element={<MyQR />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;