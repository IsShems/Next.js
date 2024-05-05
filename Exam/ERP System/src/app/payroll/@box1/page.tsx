"use client";
import { ReactNode, useState, useEffect } from "react";
import style from "../@box1/box1.module.css";
import Image from "next/image";

interface Props {
  children: ReactNode;
  statistics: ReactNode;
  charts: ReactNode;
}

export default function Layout({ children, statistics, charts }: Props) {
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
      <div className={style.charts}>
        <div className={style.flexContainer}>
          <div className={style.box1}>
            <div className={style.insidebox1}>
              <h1 className={style.number}>₦‎23,000,000</h1>
              <p>Total annual budget</p>
              <br />
              <small>
                <span className={style.green}>↑</span> 5% more than last year
              </small>
            </div>
            <div className={`${style.pic} ${style.lightblue}`}>
              <Image
                src="/icons/budget/Budget.png"
                width={50}
                height={40}
                alt=""
              />
            </div>
          </div>
          
          <div className={style.box1}>
            <div className={style.insidebox1}>
              <h1 className={style.number}>48%</h1>
              <p>Budget % used</p>
              <br />
            </div>
            <div className={`${style.pic} ${style.paddingleft} ${style.lightgreen}`}>
              <Image
                src="/icons/budget/green_budget.png"
                width={32}
                height={33}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className={style.flexContainer}>
        <div className={style.box1}>
            <div className={style.insidebox1}>
              <h1 className={style.number}>₦‎10,000,000</h1>
              <p>Amount used, YTD</p>
              <br />
            </div>
            <div className={`${style.pic} ${style.paddingleft} ${style.lightorange}`}>
              <Image src="/icons/budget/orange_budget.png" width={32}
                height={33} alt="" />
            </div>
          </div>
          <div className={style.box1}>
            <div className={style.insidebox1}>
              <h1 className={style.number}>₦‎13,000,000</h1>
              <p>Total budget balance</p>
              <br />
            </div>
            <div className={`${style.pic} ${style.paddingleft} ${style.lightpurple}`}>
              <Image
                src="/icons/budget/purple_budget.png"
                width={32}
                height={33}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}
