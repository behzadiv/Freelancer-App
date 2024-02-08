import { Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";
import CompleteProfile from "./pages/CompleteProfile";
import { QueryClient } from "@tanstack/query-core";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import "./App.css";

const queryClinet = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClinet}>
      <Toaster />
      <div className="container">
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/complete-profile" element={<CompleteProfile />} />
        </Routes>
      </div>
    </QueryClientProvider>
  );
}

export default App;
