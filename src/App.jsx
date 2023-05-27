import { Route, Routes } from "react-router-dom";
import HomeLayout from "./pages/layouts/HomeLayout";
import PrivateRoute from "./pages/routes/PrivateRoute";
import Login from "./pages/authentication/Login";
import Register from "./pages/authentication/Register";
import JoinClassroom from "./pages/JoinClassroom/JoinClassroom";
import CreateClassroom from "./pages/CreateClassroom/CreateClassroom";
import Home from "./pages/home/Home";
import MainLayout from "./pages/layouts/MainLayout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PrivateRoute><HomeLayout></HomeLayout></PrivateRoute>}>
          <Route index element={<Home></Home>}></Route>
          <Route path="joinClassroom" element={<JoinClassroom></JoinClassroom>}></Route>
          <Route path="createClassroom" element={<CreateClassroom></CreateClassroom>}></Route>
        </Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/classroom" element={<MainLayout></MainLayout>}></Route>
      </Routes>
    </>
  );
}

export default App;
