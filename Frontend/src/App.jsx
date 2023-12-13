import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageProblemsTechs from "./Pages/PageProblemsTechs";
import { TaskProvider } from "./Context/TasksContext";

import { AuthProvider } from "./Context/AuthContext";
import RegisterPage from "./Pages/RegisterPage";
import LoginPage from "./Pages/LoginPage";

import TaskFormPage from "./Pages/TaskFormPage";
import TasksPage from "./Pages/TasksPage";
import HomePage from "./Pages/HomePage";

import TechRegisterPage from "./Pages/TechRegister";
import ProtectedRoute from "./ProtectedRoute";
import ProfilePage from "./Pages/profilePage";

import TechProfilePage from './Pages/TechProfile';
import TechLogin from "./Pages/TechLogin";

import UserPayments from "./Components/UserPayments";
import PayLoads from "./Pages/PayLoads";
import Quote from "./Pages/ToQuote";

function App() {
  return(
    <>
    <AuthProvider>
      <TaskProvider>
        <BrowserRouter>
          <main className="container mx-auto px-5">
            
            <Routes>
          
            <Route path="/" element={ <HomePage /> } />

            <Route path="/login" element={ <LoginPage /> } />

            <Route path="/register" element={ <RegisterPage /> } />

            <Route path="/techRegister" element={ <TechRegisterPage /> } />

            <Route path="/techLogin" element={ <TechLogin /> } />


            <Route element={<ProtectedRoute />}>

              <Route path="/techProfile" element={ <TechProfilePage/> }/>

              <Route path="/comunityProblemsTechs" element={ <PageProblemsTechs/> }/>

              <Route path="/tasks" element={ <TasksPage /> } />

              <Route path="/add-task" element={ <TaskFormPage /> } />

              <Route path="/tasks/:id" element={ <TaskFormPage /> } />

              <Route path="/profile" element={ <ProfilePage /> } />

              <Route path="/payloads" element={ <PayLoads /> } />
              
              <Route path="/toQuote" element={ <Quote /> } />

              <Route path="/toPaymentQuote" element={ <UserPayments /> } />

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