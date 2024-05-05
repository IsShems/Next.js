"use client";
import { ReactNode, useState, useEffect } from "react";
import style from "../officebudget/page.module.css";
import { PhotoIcon } from "@/icons/PhotoIcon";
import { format, isToday } from "date-fns";
import Image from "next/image";
import { PrimaryButton } from "@/components/CustomButtons";
import Link from "next/link";
import { useBudgetsContext } from "@/contexts/budgetContext";
import { Budget } from "@/types/Budget";

interface Props {
  children: ReactNode;
  statistics: ReactNode;
  charts: ReactNode;
    user: {
      name: string;
      designation: string;
    } | null;
}

export default function Layout({ children, statistics, charts, user }: Props) {
  const [activePage, setActivePage] = useState("");
  const [BudgetData, setBudgetData] = useState<Budget[]>([]);
  const BudgetContext = useBudgetsContext();

  useEffect(() => {
    const fetchData = async () => {
      const budgets = await BudgetContext.fetchBudgets();
      console.log(budgets);

      setBudgetData(budgets);
    };
    fetchData();

    const storedPage = sessionStorage.getItem("activePage");
    if (storedPage) {
      setActivePage(storedPage);
    }
  }, [BudgetContext]);


  const setActive = (href: string) => {
    setActivePage(href);
    sessionStorage.setItem("activePage", href);
  };

  const getVarianceColor = (variance: string) => {
    if (variance.includes("-")) {
      return style.red;
    } else if (variance.includes("+")) {
      return style.green;
    } else {
      return "";
    }
  };
  
  
  return (
    <div className={style.container}>
      <div className={style.header}>
        <div>
          <div className={style.flextitle}>
          <Image
                src="/icons/budget/Budget.png"
                width={45}
                height={35}
                alt=""
              />
            <h2 className={style.number}>Office Budget</h2>
          </div>
          <p className={style.input}>View, create and send budget request</p>
        </div>
        <div className={style.iconsContainer}>
        <PhotoIcon user={user} />
        </div>
      </div>
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
          <div className={style.box3}>
            <h3 className={`${style.number} ${style.insidebox2}`}>
              Budget History
            </h3>
            <div>
              <b>
                <div className={`${style.margintitlebox2} ${style.black}`}>
                  <p>S/N</p>
                  <p>Budget No.</p>
                  <p>Budget Description</p>
                  <p>Budgeted Amount (₦)</p>
                  <p>Actual Amount (₦)</p>
                  <p>Variance (₦)</p>
                  <p>Date</p>
                </div>
              </b>
              <br />
              <div className={style.grey}>
                {BudgetData.map((budgets) => (
                  <div className={style.marginbox2} key={budgets.id}>
                    <div className={style.flex}>
                      <p>0{budgets.id}</p>
                      <p>{budgets.budgetNo}</p>
                      <p>{budgets.budgetdescription}</p>
                      <p>{budgets.actualAmount}</p>
                      <p>{budgets.budgetedAmount}</p>
                      <p className={getVarianceColor(budgets.variance)}>{budgets.variance}</p>
                      <p>{budgets.date}</p>
                    </div>
                    <hr />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}
