"use client";
import { ReactNode, useState, useEffect } from "react";
import style from "../createbudget/page.module.css";
import { PhotoIcon } from "@/icons/PhotoIcon";
import { format } from "date-fns";
import { PrimaryButton } from "@/components/CustomButtons";
import Image from "next/image";
import Link from "next/link";

interface Props {
  children: ReactNode;
  statistics: ReactNode;
  charts: ReactNode;
}

export default function Layout({ children, statistics, charts }: Props) {
  const currentDate = new Date();
  const formattedDate = format(currentDate, "'Today is' eeee, do MMMM yyyy");

  const [searchTerm, setSearchTerm] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
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

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <div className={style.container}>
      <div className={style.header}>
        <div>
          <h2 className={style.input}>Welcome, ...</h2>
          <p className={style.input}>{formattedDate}</p>
        </div>
        <div className={style.iconsContainer}>
          <PhotoIcon />
        </div>
      </div>
      <div>
        <Link href={`/officebudget`} onClick={() => setActive("/officebudget")}>
          <p className={style.back}>◄ Back</p>
        </Link>
      </div>
      <div className={style.charts}>
        <div className={style.box}>
          <h3 className={style.title}>Create Circular</h3>
          <div className={style.flexContainer}>
            <div className={style.insidebox1}>
              <small>Circular Title</small>
              <input
                className={style.search}
                type="text"
                placeholder="Enter circular title"
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>
            <div className={style.insidebox1}>
              <small>Sent from</small>
              <input
                className={style.search}
                type="text"
                placeholder="Enter search word"
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>
            <div className={style.insidebox1}>
              <small>Sent to</small>
              <input
                className={style.search}
                type="text"
                placeholder="Enter search word"
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>
          </div>
          <div className={style.flexContainer}>
            <div className={style.insidebox1}>
              <small>Date</small>
              <input
                className={style.search}
                type="text"
                placeholder="Enter search word"
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>
            <div className={style.insidebox1}>
              <small>Circular message</small>
              <input
                className={style.message}
                type="text"
                placeholder="Enter search word"
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>
          </div>
          <div className={`${style.insidebox1} ${style.buttonsize}`}>
            <PrimaryButton onClick={openModal}>Create Budget</PrimaryButton>
          </div>
        </div>
        <div className={style.box2}>

        </div>
      </div>
      {children}

      {modalVisible && (
        <div className={style.overlay}>
          <div className={style.modalContent}>
            <Image src="/icons/success.png" width={80} height={80} alt="" />
            <h4 className={style.title}>Congratilations</h4>
            <p>Your budget has been submitted successfully.</p>
            <Link href={`/circulars`} onClick={() => setActive("/circulars")}>
              <PrimaryButton onClick={closeModal}>OK</PrimaryButton>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
