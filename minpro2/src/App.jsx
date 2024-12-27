import { BrowserRouter, Routes, Route } from "react-router-dom" 
import LandingPage from "./page/LandingPage";
import LoginPage from "./page/LoginPage";
import RegisterPage from "./page/RegisterPage";
import UserDashboard from "./page/Dashboard";
import DetailPage from "./page/DetailPage";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
 
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login/" element={<LoginPage />} />
          <Route path="/register/" element={<RegisterPage />} />
        
          <Route path="/dashboard/" element={
            <ProtectedRoute>
                <UserDashboard/>
            </ProtectedRoute>
          }/>

          <Route path="/detail/:id" element={
            <ProtectedRoute>
                <DetailPage />
            </ProtectedRoute>
            }/>
            
        </Routes>
    </BrowserRouter>
  );
}

export default App;
