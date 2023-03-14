import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../redux/features/authReducer";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.theme);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.length >= 6 && password.length >= 6) {
      dispatch(setUser({ username, password }));
      toast(`Hoşgeldiniz ${username}`, {
        style: {
          borderRadius: "10px",
          background: theme ? "#fff" : "#484747",
          color: theme ? "#484747" : "#fff",
          fontSize: ".8rem",
        },
      });
      setUsername("");
      setPassword("");
      navigate("/");
    } else if (!username && !password) {
      toast("Lütfen Bilgileri Eksiksiz Doldurun", {
        style: {
          borderRadius: "10px",
          background: "#6f0202",
          color: "#fff",
          fontSize: ".8rem",
        },
      });
    } else if (username.length < 6) {
      toast("Kullanıcı Adı En Az 6 Karakter Olmalı", {
        style: {
          borderRadius: "10px",
          background: "#6f0202",
          color: "#fff",
          fontSize: ".8rem",
        },
      });
    } else if (password.length < 6) {
      toast("Parola En Az 6 Karakter Olmalı", {
        style: {
          borderRadius: "10px",
          background: "#6f0202",
          color: "#fff",
          fontSize: ".8rem",
        },
      });
    }
  };

  return (
    <div className="container">
      <div className="text-center my-5">
        <i className="fas fa-solid fa-user-secret fa-4x"></i>
      </div>

      <form onSubmit={handleSubmit}>
        <input
          className="form-control"
          type="text"
          placeholder="Kullanıcı Adı"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="form-control"
          type="password"
          placeholder="Parola"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {theme ? (
          <button type="submit" className="btn btn-outline-light mt-2 w-100">
            Gönder
          </button>
        ) : (
          <button type="submit" className="btn btn-dark mt-2 w-100">
            Gönder
          </button>
        )}
      </form>
    </div>
  );
};

export default Login;
