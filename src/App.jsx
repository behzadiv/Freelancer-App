import { Navigate, Route, Routes } from "react-router-dom";
import { QueryClient } from "@tanstack/query-core";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import CompleteProfile from "./pages/CompleteProfile";
import "./App.css";
import AppLayout from "./ui/AppLayout";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import OwnerDashboard from "./pages/OwnerDashboard";
import DarkModeProvider from "./context/DarkModeProvider";
import OwnerLayout from "./features/owner/OwnerLayout";
import FreelancerLayout from "./features/freelancer/FreelancerLayout";
import FreelancerDashboard from "./pages/FreelancerDashboard";
import Proposals from "./pages/Proposals";
import SubmittedProjects from "./features/freelancer/SubmittedProjects";
import ProtectedRoute from "./ui/ProtectedRoute";
import NotAccess from "./pages/NotAccess";
import AdminLayout from "./features/admin/AdminLayout";
import AdminDashboard from "./pages/AdminDashboard";
import Users from "./pages/Users";

const queryClinet = new QueryClient();

function App() {
  return (
    <DarkModeProvider>
      <QueryClientProvider client={queryClinet}>
        <Toaster />
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/complete-profile" element={<CompleteProfile />} />
          <Route
            path="/owner"
            element={
              <ProtectedRoute>
                <OwnerLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate to={"dashboard"} replace />} />
            <Route path="dashboard" element={<OwnerDashboard />} />
            <Route path="projects" element={<Projects />} />
            <Route path="projects/:id" element={<Project />} />
          </Route>
          <Route
            path="/freelancer"
            element={
              <ProtectedRoute>
                <FreelancerLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate to={"dashboard"} replace />} />
            <Route path="dashboard" element={<FreelancerDashboard />} />
            <Route path="projects" element={<SubmittedProjects />} />
            <Route path="proposals" element={<Proposals />} />
          </Route>
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate to={"dashboard"} replace />} />
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="users" element={<Users />} />
            <Route path="projects" element={<SubmittedProjects />} />
            <Route path="proposals" element={<Proposals />} />
          </Route>
          <Route path="/" element={<Home />} />
          <Route path="not-access" element={<NotAccess />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </QueryClientProvider>
    </DarkModeProvider>
  );
}

export default App;
