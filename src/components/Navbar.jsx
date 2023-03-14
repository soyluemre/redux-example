import React from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearUser } from "../redux/features/authReducer";
import { setDarkTheme } from "../redux/features/themeReducer";

const Navbar = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.theme);
  const { user } = useSelector((state) => state.auth);

  const handleChangeTheme = () => {
    dispatch(setDarkTheme(!theme));
  };

  const handleLogout = () => {
    dispatch(clearUser());
    toast("Çıkış Yapıldı", {
      style: {
        borderRadius: "10px",
        background: theme ? "#fff" : "#484747",
        color: theme ? "#484747" : "#fff",
        fontSize: ".8rem",
      },
    });
  };

  return (
    <div className="border-bottom  d-flex align-items-center justify-content-end mb-5 p-4 gap-3">
      {theme ? (
        <button onClick={handleChangeTheme} className="btn btn-light">
          <i className="fas fa-duotone fa-moon"></i>
        </button>
      ) : (
        <button onClick={handleChangeTheme} className="btn btn-dark text-white">
          <i className="fas fa-regular fa-lightbulb"></i>
        </button>
      )}
      {user && (
        <Link
          onClick={handleLogout}
          className="nav-link"
          title="Çıkış Yap"
          to="/login"
        >
          <button className={theme ? "btn btn-light" : "btn btn-dark"}>
            <i className="fas fa-regular fa-right-from-bracket"></i>
          </button>
        </Link>
      )}
    </div>
  );
};

export default Navbar;
