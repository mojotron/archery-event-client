import { Routes, Route, useNavigate } from "react-router";
// pages
import Register from "./pages/Register";
import VerifyEmail from "./pages/VerifyEmail";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import ProtectedLayout from "./components/layouts/ProtectedLayout";
import Profile from "./pages/Profile";
// set navigate in memory
import { setNavigate } from "./lib/navigation";

const App = () => {
  // set navigation in memory to use it in axios interceptor
  const navigate = useNavigate();
  setNavigate(navigate);

  return (
    <div className="min-w-[100vw] min-h-[100vh] bg-main-700">
      <Routes>
        {/* protected routes */}
        <Route path="/dashboard" element={<ProtectedLayout />}>
          <Route index element={<Profile />} />
        </Route>
        {/* auth routes */}
        <Route path="/register" element={<Register />} />
        <Route path="/email/verify/:code" element={<VerifyEmail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/password/forgot/" element={<ForgotPassword />} />
        <Route path="/password/reset/" element={<ResetPassword />} />
      </Routes>
    </div>
  );
};

export default App;
