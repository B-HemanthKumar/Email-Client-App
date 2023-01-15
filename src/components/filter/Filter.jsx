import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { setSelectedEmail } from "../../redux-store/slice/emailSlice";
import "./filter.css";

export default function Filter() {
  const dispatch = useDispatch();
  const onChangePath = () => {
    dispatch(setSelectedEmail(null));
  };

  return (
    <div className="filter">
      <span className="filter"> FilterBy: </span>
      <NavLink
        to="/unread-mails"
        className={({ isActive }) => (isActive ? "opt" : "")}
        onClick={() => onChangePath()}
      >
        Unread
      </NavLink>
      <NavLink
        to="/readed-mails"
        className={({ isActive }) => (isActive ? "opt" : "")}
        onClick={() => onChangePath()}
      >
        Read
      </NavLink>
      <NavLink
        to="/favorite-mails"
        className={({ isActive }) => (isActive ? "opt" : "")}
        onClick={() => onChangePath()}
      >
        Favorites
      </NavLink>
    </div>
  );
}
