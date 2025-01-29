import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import toast from "react-hot-toast";
import SearchInput from "../Form/SearchInput";
import useCategory from "../../hooks/useCategory";
import { useCart } from "../../context/Cart";
import { Badge } from "antd";
import "../../styles/header.css";

const Header = () => {
  const { auth, setAuth } = useAuth();
  const { cart } = useCart();
  const categories = useCategory();

  const handleLogout = () => {
    setAuth({ ...auth, user: null, token: "" });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="brand">
          🛒 Ecommerce App
        </Link>

        <button className="menu-toggle" aria-label="Toggle navigation">
          <span className="toggle-icon"></span>
        </button>

        <div className="nav-menu">
          <SearchInput className="nav-search" />

          <ul className="nav-list">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>

            <li className="nav-item dropdown">
              <button className="dropdown-toggle">Categories</button>
              <div className="dropdown-menu">
                <Link to="/categories" className="dropdown-item">
                  All Categories
                </Link>
                {categories?.map((c) => (
                  <Link
                    key={c._id}
                    to={`/category/${c.slug}`}
                    className="dropdown-item"
                  >
                    {c.name}
                  </Link>
                ))}
              </div>
            </li>

            {!auth?.user ? (
              <>
                <li className="nav-item">
                  <NavLink to="/register" className="nav-link">
                    Register
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/login" className="nav-link">
                    Login
                  </NavLink>
                </li>
              </>
            ) : (
              <li className="nav-item dropdown">
                <button className="dropdown-toggle">{auth.user.name}</button>
                <div className="dropdown-menu">
                  <NavLink
                    to={`/dashboard/${auth.user.role === 1 ? "admin" : "user"}`}
                    className="dropdown-item"
                  >
                    Dashboard
                  </NavLink>
                  <NavLink
                    to="/login"
                    onClick={handleLogout}
                    className="dropdown-item"
                  >
                    Logout
                  </NavLink>
                </div>
              </li>
            )}

            <li className="nav-item">
              <Badge count={cart?.length} showZero>
                <NavLink to="/cart" className="nav-link">
                  Cart
                </NavLink>
              </Badge>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
