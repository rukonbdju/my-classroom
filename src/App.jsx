import { Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Registration from "./pages/registration/Registration";
import HomeLayout from "./pages/layouts/HomeLayout";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<HomeLayout/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Registration/>}></Route>
      </Routes>
    </>
  );
}

export default App;
