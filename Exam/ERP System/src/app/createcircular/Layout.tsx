"use client";
import { useState, useEffect } from "react";
import style from "../createcircular/page.module.css";
import { PhotoIcon } from "@/icons/PhotoIcon";
import { format } from "date-fns";
import { PrimaryButton } from "@/components/CustomButtons";
import Image from "next/image";
import Link from "next/link";
import { useCircularsContext } from "@/contexts/circularsContext";
import { Circular } from "@/types/Circular";


interface Props {
  children: React.ReactNode;
  user: {
    name: string;
    designation: string;
  } | null;
}

export default function Layout({ children, user }: Props) {
  const currentDate = new Date();
  const formattedDate = format(currentDate, "'Today is' eeee, do MMMM yyyy");

  const circularContext = useCircularsContext();
  const [circularData, setCircularData] = useState<Circular>({
    id: 1,
    title: "",
    from: "",
    to: "",
    date: "",
    type: "",
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [activePage, setActivePage] = useState("");

  useEffect(() => {
    const storedPage = sessionStorage.getItem("activePage");
    if (storedPage) {
      setActivePage(storedPage);
    }
    const fetchData = async () => {
      const circulars = await circularContext.fetchCirculars();
      console.log(circulars);

    };
    fetchData();
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

  const handleCreateAndOpenModal = async () => {
    openModal();
    if (
      circularData.title &&
      circularData.from &&
      circularData.to &&
      circularData.date &&
      circularData.type
    ) {
      try {
        const response = await fetch(
          "http://localhost:3000/circulars/api/circulars",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ newCircular: circularData }),
          }
        );
        const newCircular = await response.json();
      } catch (error) {
        console.error("Error adding circular:", error);
      }
    } else {
      alert("Fields cannot be empty");
    }
  };

  return (
    <div className={style.container}>
      <div className={style.header}>
        <div>
          <h2 className={style.input}>Welcome, ...</h2>
          <p className={style.input}>{formattedDate}</p>
        </div>
        <div className={style.iconsContainer}>
        <PhotoIcon user={user} />
        </div>
      </div>
      <div>
        <Link href={`/circulars`} onClick={() => setActive("/circulars")}>
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
            <PrimaryButton onClick={handleCreateAndOpenModal}>
              Create Circular
            </PrimaryButton>
          </div>
        </div>
      </div>
      {children}

      {modalVisible && (
        <div className={style.overlay}>
          <div className={style.modalContent}>
            <Image src="/icons/success.png" width={80} height={80} alt="" />
            <h4 className={style.title}>Congratilations</h4>
            <p>Your circular has been sent successfully.</p>
            <Link href={`/circulars`} onClick={() => setActive("/circulars")}>
              <PrimaryButton onClick={closeModal}>OK</PrimaryButton>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
