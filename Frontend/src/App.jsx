import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./Pages/RegisterPage";
import LoginPage from "./Pages/LoginPage";

import { AuthProvider } from "./Context/AuthContext";
import TaskFormPage from "./Pages/TaskFormPage";
import TasksPage from "./Pages/TasksPage";


import ProtectedRoute from "./ProtectedRoute";
import ProfilePage from "./Pages/profilePage";
import HomePage from "./Pages/HomePage";

import { TaskProvider } from "./Context/TasksContext";
import NavBar from "./Components/NavBar";

function App() {
  return(
    <>
    <AuthProvider>
      <TaskProvider>
        <BrowserRouter>
          <main className="container mx-auto px-10">
           <NavBar />
            <Routes>
          
            <Route path="/" element={ <HomePage /> } />

            <Route path="/login" element={ <LoginPage /> } />

            <Route path="/register" element={ <RegisterPage /> } />


            <Route element={<ProtectedRoute />}>
              <Route path="/tasks" element={ <TasksPage /> } />

              <Route path="/add-task" element={ <TaskFormPage /> } />

              <Route path="/tasks/:id" element={ <TaskFormPage /> } />

              <Route path="/profile" element={ <ProfilePage /> } />
            </Route>

            </Routes>
          </main>
        </BrowserRouter>
      </TaskProvider>
    </AuthProvider>
    </>
  );
}

export default App;