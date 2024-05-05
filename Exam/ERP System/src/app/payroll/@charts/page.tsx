"use client";
import { UserData } from "@/types/UserData";
import React, { useEffect, useState } from "react";
import style from "../@charts/@charts.module.css";
import { PrimaryButton } from "@/components/CustomButtons";
import Link from "next/link";

export default function Charts() {
  const [usersInfo, setUsersInfo] = useState<UserData[]>([]);
  const [activePage, setActivePage] = useState("");

  useEffect(() => {
    const storedPage = sessionStorage.getItem("activePage");
    if (storedPage) {
      setActivePage(storedPage);
    }
  }, []);

  const setActive = (href: string) => {
    setActivePage(href);
    sessionStorage.setItem("activePage", href);
  }; 


  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("/user/dashboard/api");

      let usersInfo = await data.json();
      setUsersInfo(usersInfo);
    };

    fetchData();
  }, []);

  return (
    <div className={style.container}>
      {/* {usersInfo.map((userInfo) => (
        <div key={userInfo.id}>
          <UserCard userInfo={userInfo} />
        </div>
      ))} */}
      <div className={style.flexContainer}>
          <div className={style.box2}>
            <div className={style.insidebox2}>
              <h2 className={style.number}>Create a Budget</h2>
            </div>
            <div className={style.buttonmargin}>
              <Link 
                href={`/createbudget`}
                onClick={() => setActive("/createbudget")}
              >
                <PrimaryButton>Create Budget</PrimaryButton>
              </Link>
            </div>
          </div>
        </div>
    </div>
  );
}
