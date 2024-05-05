"use client";
import React, { useState } from "react";
import style from "./PhotoIcon.module.css";
import { getSession } from "next-auth/react";

interface Props {
  className?: string | null;
  user: {
    name: string;
    designation: string; 
  } | null; 
}


export const PhotoIcon = ({user}: Props) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible((prev) => !prev);
  };

  return (
    <div className={style.photoIcon}>
      <div className={style.info}>
        <div className={style.profileInfo}>
          <img
            className={style.profileImage}
            src="https://images.freeimages.com/fic/images/icons/2711/free_icons_for_windows8_metro/512/guest.png"
            alt=""
          />
          <div className={style.profileText}>
            <p>{user ? user.name : "Guest"}</p>
            <small>{user ? user.designation : "HR Office"}</small>
          </div>
        </div>
        <div className={style.dropdownContainer}>
          <button className={style.dropdownButton} onClick={toggleDropdown}>
            ▼
          </button>
          {dropdownVisible && (
            <div className={style.dropdownContent}>
              <a href="#">Profile</a>
              <a href="#">Settings</a>
              <a href="#">Log Out</a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
