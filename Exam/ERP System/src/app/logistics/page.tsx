"use client";
import { ReactNode, useState, useEffect } from "react";
import style from "../logistics/page.module.css";
import { PhotoIcon } from "@/icons/PhotoIcon";
import { format, isToday } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { PrimaryButton } from "@/components/CustomButtons";
import { useLogisticContext } from "@/contexts/logisticsContext";
import { Logistic } from "@/types/Logistics";

interface Props {
  children: React.ReactNode;
  user: {
    name: string;
    designation: string;
  } | null;
}

export default function Layout({ children, user }: Props) {
  const [activePage, setActivePage] = useState("");
  const [LogisticData, setLogisticData] = useState<Logistic[]>([]);
  const logisticContext = useLogisticContext();

  useEffect(() => {
    const fetchData = async () => {
      const logistics = await logisticContext.fetchLogistics();
      console.log(logistics);

      setLogisticData(logistics);
    };
    fetchData();

    const storedPage = sessionStorage.getItem("activePage");
    if (storedPage) {
      setActivePage(storedPage);
    }
  }, [logisticContext]);


  const setActive = (href: string) => {
    setActivePage(href);
    sessionStorage.setItem("activePage", href);
  };
  return (
    <div className={style.container}>
      <div className={style.header}>
        <div>
          <div className={style.flextitle}>
            <Image
              src="/icons/logistics/logistic_logo.png"
              width={35}
              height={34}
              alt=""
            />
            <h2 className={style.number}>Logistics</h2>
          </div>
          <p className={style.input}>Make and send logistics request.</p>
        </div>
        <div className={style.iconsContainer}>
        <PhotoIcon user={user} />
        </div>
      </div>
      <div className={style.charts}>
        <div className={style.flexContainer}>
          <div className={style.box1}>
            <div className={style.insidebox1}>
              <h1 className={style.number}>350</h1>
              <p>Total request made</p>
              <br />
              <small>
                <span className={style.green}>↑</span> 50 more than last year
              </small>
            </div>
            <div className={`${style.pic} ${style.lightblue}`}>
              <Image
                src="/icons/logistics/logistic_blue.png"
                width={50}
                height={40}
                alt=""
              />
            </div>
          </div>
          <div className={style.box1}>
            <div className={style.insidebox1}>
              <h1 className={style.number}>5,000,000</h1>
              <p>Total cost incurred</p>
              <br />
            </div>
            <div
              className={`${style.pic} ${style.paddingleft} ${style.lightpurple}`}
            >
              <Image
                src="/icons/logistics/logistic_purple.png"
                width={32}
                height={33}
                alt=""
              />
            </div>
          </div>
          <div className={style.box1}>
            <div className={style.insidebox1}>
              <h1 className={style.number}>70</h1>
              <p>Pending request</p>
              <br />
            </div>
            <div
              className={`${style.pic} ${style.paddingleft} ${style.lightorange}`}
            >
              <Image
                src="/icons/logistics/logistic_orange.png"
                width={32}
                height={33}
                alt=""
              />
            </div>
          </div>
          <div className={style.box1}>
            <div className={style.insidebox1}>
              <h1 className={style.number}>280</h1>
              <p>Approval request</p>
              <br />
              <small>
                <span className={style.red}>↓</span> 2% more than last year
              </small>
            </div>
            <div
              className={`${style.pic} ${style.paddingleft} ${style.lightgreen}`}
            >
              <Image
                src="/icons/logistics/logistic_green.png"
                width={32}
                height={33}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className={style.flexContainer}>
          <div className={style.box2}>
            <div className={style.insidebox2}>
              <h2 className={style.number}>Logistics Request</h2>
            </div>
            <div className={style.buttonmargin}>
              <Link
                href={`/createbudget`}
                onClick={() => setActive("/createbudget")}
              >
                <PrimaryButton>Make logistics Request</PrimaryButton>
              </Link>
            </div>
          </div>
        </div>
        <div className={style.flexContainer}>
          <div className={style.box3}>
            <h3 className={`${style.number} ${style.insidebox2}`}>
              All Logistics Request
            </h3>
            <div>
              <b>
                <div className={`${style.margintitlebox2} ${style.black}`}>
                  <p>S/N</p>
                  <p>Title</p>
                  <p>Purpose</p>
                  <p>Amount</p>
                  <p>Requested by</p>
                  <p>Sent to</p>
                  <p>Date</p>
                  <p>Status</p>
                  <p>Action</p>
                </div>
              </b>
              <br />
              <div className={style.grey}>
                {LogisticData.map((logistics) => (
                  <div className={style.marginbox2} key={logistics.id}>
                    <div className={style.flex}>
                      <p>0{logistics.id}</p>
                      <p>{logistics.title}</p>
                      <p>{logistics.purpose}</p>
                      <p>{logistics.amount}</p>
                      <p>{logistics.requestedby}</p>
                      <p>{logistics.date}</p>
                      <p>{logistics.date}</p>
                      <p>{logistics.status}</p>

                      <p className={style.blue}>View more </p>
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
