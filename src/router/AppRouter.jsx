import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import Login from "../pages/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrivateRouter from "./PrivateRouter";
import { useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";

const AppRouter = () => {
  const { theme } = useSelector((state) => state.theme);

  return (
    <div
      style={{ height: "100vh" }}
      className={theme ? "bg-dark text-white" : "bg-light text-dark"}
    >
      <Router>
        <Toaster position="top-left" />
        <Navbar />
        <Routes>
          <Route path="/" element={<PrivateRouter />}>
            <Route path="" element={<Home />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
};

export default AppRouter;
