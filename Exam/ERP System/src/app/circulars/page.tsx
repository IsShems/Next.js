"use client";
import { ReactNode, useState, useEffect } from "react";
import style from "../circulars/page.module.css";
import { PhotoIcon } from "@/icons/PhotoIcon";
import { PrimaryButton } from "@/components/CustomButtons";
import { useCircularsContext } from "@/contexts/circularsContext";
import { Circular } from "@/types/Circular";
import Link from "next/link";
import Image from "next/image";

interface Props {
  children: React.ReactNode;
  user: {
    name: string;
    designation: string;
  } | null;
}

export default function Layout({ children, user }: Props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [activePage, setActivePage] = useState("");
  const [CircularData, setCircularData] = useState<Circular[]>([]);
  const circularContext = useCircularsContext();

  useEffect(() => {
    const fetchData = async () => {
      const circulars = await circularContext.fetchCirculars();
      console.log(circulars);

      setCircularData(circulars);
    };
    fetchData();

    const storedPage = sessionStorage.getItem("activePage");
    if (storedPage) {
      setActivePage(storedPage);
    }
  }, [circularContext]);

  const setActive = (href: string) => {
    setActivePage(href);
    sessionStorage.setItem("activePage", href);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const toggleDropdown = () => {
    setDropdownVisible((prev) => !prev);
  };

  return (
    <div className={style.container}>
      <div className={style.header}>
        <div>
          <div className={style.flex}>
            <Image
              src="/icons/circular_logo.png"
              width={22}
              height={24}
              alt=""
            />
            <h2 className={style.number}>Circulars</h2>
          </div>
          <p className={style.input}>Search for and view all circulars</p>
        </div>
        <div className={style.iconsContainer}>
        <PhotoIcon user={user} />
        </div>
      </div>
      <div className={style.charts}>
        <div className={style.box1}>
          <div className={style.insidebox1}>
            <p>Quick search a circular</p>
            <input
              className={style.search}
              type="text"
              placeholder="Enter search word"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
          <div className={style.insidebox1}>
            <h1>150</h1>
            <p>Total circular</p>
          </div>
          <div className={style.insidebox1}>
            <p>Filter circulars</p>
            <div className={style.dropdown}>
              <button className={style.dropdownButton} onClick={toggleDropdown}>
                All memos ▼
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
          <div className={`${style.insidebox1} ${style.buttonsize}`}>
            <Link
              href={`/createcircular`}
              onClick={() => setActive("/createcircular")}
            >
              <PrimaryButton>Create Circular</PrimaryButton>
            </Link>
          </div>
        </div>
        <div className={style.flexContainer}>
          <div className={style.box2}>
            <h3 className={style.title}>Create Circular</h3>
            <div>
              <b>
                <div className={`${style.margintitlebox2} ${style.black}`}>
                  <p>S/N</p>
                  <p>Circular Title</p>
                  <p>Sent From</p>
                  <p>Sent To</p>
                  <p>Date</p>
                  <p>Circular Type</p>
                  <p>Action</p>
                </div>  
              </b>
              <br />
              <div className={style.grey}>
                {CircularData.map((circulars) => (
                  <div className={style.marginbox2} key={circulars.id}>
                    <div className={style.flextitle}>
                      <p>0{circulars.id}</p>
                      <p>{circulars.title}</p>
                      <p>{circulars.from}</p>
                      <p>{circulars.to}</p>
                      <p>{circulars.date}</p>

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
