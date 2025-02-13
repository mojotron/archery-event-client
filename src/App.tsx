import { Routes, Route } from "react-router";
import Register from "./pages/Register";

const App = () => {
  return (
    <div className="min-w-[100vw] min-h-[100vh] bg-main-700">
      <Routes>
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;
