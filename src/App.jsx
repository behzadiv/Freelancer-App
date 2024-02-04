import { Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </div>
  );
}

export default App;
