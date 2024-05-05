"use client";
import { UserData } from "@/types/UserData";
import React, { useEffect, useState } from "react";
import style from "../@downcontainers/@downcontainers.module.css";
import { PrimaryButton } from "@/components/CustomButtons";
import Link from "next/link";

export default function Downcontainers() {
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
      <div className={style.box3}>
        <h2 className={`${style.number} ${style.insidebox3}`}>
          Budget History
        </h2>
      </div>
    </div>
  );
}
