
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import HomePage from "./pages/HomePage";
import AuthCallBackPages from "./pages/AuthCallBackPages";
import UserProfilePage from "./pages/UserProfilePage";
import ProtectedRoute from "./auth/ProtectedRoute";




const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout showHero><HomePage/></Layout>} />
      <Route path="/auth-callback" element={<AuthCallBackPages/>} />
      <Route element={<ProtectedRoute/>}>
      <Route path="/user-profile" element={<Layout><UserProfilePage/></Layout>} />
      </Route>
       
    
      <Route path="*" element={<Navigate to="/"/>} />
    </Routes>
  );
};

export default AppRoutes;
