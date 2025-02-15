import { Routes, Route } from "react-router";
// pages
import Register from "./pages/Register";
import VerifyEmail from "./pages/VerifyEmail";
import Login from "./pages/Login";

const App = () => {
  return (
    <div className="min-w-[100vw] min-h-[100vh] bg-main-700">
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/email/verify/:code" element={<VerifyEmail />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
