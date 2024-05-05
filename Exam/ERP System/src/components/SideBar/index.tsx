"use client";
import style from "../SideBar/SideBar.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ActivityIcon } from "@/icons/ActivityIcon";
import Image from "next/image";

export default function SideBar() {
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

  return (
    <div className={style.container}>
      <div className={style.logo}>
        <Image src="/icons/logo.png" width={80} height={80} alt="" />
      </div>
      <ul className={style.iconsContainer}>
      <li>
          <Link
            href={`/actualdashboard`}
            onClick={() => setActive("/actualdashboard")}
          >
            <p className={style.page}>Dashboard</p>
          </Link>
        </li>
        <li>
          <Link
            href={`/staff`}
            onClick={() => setActive("/staff")}
          >
            <p className={style.page}>Staff</p>
          </Link>
        </li>
        <li>
          <Link
            href={`/user/dashboard`}
            onClick={() => setActive("/user/dashboard")}
          >
            <p className={style.page}>Payroll</p>
          </Link>
        </li>
        <li>
          <Link href={`/circulars`} onClick={() => setActive("/circulars")}>
            <p className={style.page}>Circulars</p>
          </Link>
        </li>
        <li>
          <Link href={`/logistics`} onClick={() => setActive("/logistics")}>
            <p className={style.page}>Logistics</p>
          </Link>
        </li>
        <li>
          <Link
            href={`/officebudget`}
            onClick={() => setActive("/officebudget")}
          >
            <p className={style.page}>Office Budget</p>
          </Link>
        </li>
      </ul>
    </div>
  );
}
