import { Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";
import "./App.css";
import { QueryClient } from "@tanstack/query-core";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

const queryClinet = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClinet}>
      <Toaster />
      <div className="container">
        <Routes>
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </div>
    </QueryClientProvider>
  );
}

export default App;
