"use client";
import { ReactNode, useState, useEffect } from "react";
import style from "../staff/page.module.css";
import { PhotoIcon } from "@/icons/PhotoIcon";
import { PrimaryButton } from "@/components/CustomButtons";
import Link from "next/link";
import Image from "next/image";
import { useDashboardContext } from "@/contexts/actualdashboardContext";
import { UserData } from "@/types/UserData";

interface Props {
  children: ReactNode;
  user: {
    name: string;
    designation: string;
  } | null;
}

export default function Layout({ children, user }: Props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [activePage, setActivePage] = useState("");
  const [usersData, setUsersData] = useState<UserData[]>([]);
  const actualdashboardContext = useDashboardContext();

  useEffect(() => {
    const fetchData = async () => {
      const users = await actualdashboardContext.fetchStaffList();
      console.log(users);

      setUsersData(users);
    };
    fetchData();

    const storedPage = sessionStorage.getItem("activePage");
    if (storedPage) {
      setActivePage(storedPage);
    }
  }, [actualdashboardContext]);

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
          <div className={style.allstaff}>
            <Image src="/icons/staff.png" width={28} height={24} alt="" />
            <h2 className={style.number}>All Staff</h2>
          </div>
          <p className={style.input}>View, search for and add new staff</p>
        </div>
        <div className={style.iconsContainer}>
        <PhotoIcon user={user} />
        </div>
      </div>
      <div className={style.charts}>
        <div className={style.box1}>
          <div className={style.insidebox1}>
            <p>Quick search a stuff</p>
            <input
              className={style.search}
              type="text"
              placeholder="Enter search word"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
          <div className={style.insidebox1}>
            <h1>250</h1>
            <p>Total staff</p>
          </div>
          <div className={style.insidebox1}>
            <p>Filter staff</p>
            <div className={style.dropdown}>
              <button className={style.dropdownButton} onClick={toggleDropdown}>
                All staff ▼
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
              href={`/staffcreate`}
              onClick={() => setActive("/staffcreate")}
            >
              <PrimaryButton>Add New Staff</PrimaryButton>
            </Link>
          </div>
        </div>
        <div className={style.flexContainer}>
          <div className={style.box2}>
            <h3 className={style.title}>All Staff</h3>
            <div>
              <b>
                <div className={`${style.margintitlebox2} ${style.black}`}>
                  <p>S/N</p>
                  <p>Staff First Name</p>
                  <p>Staff Last Name</p>
                  <p>Gender</p>
                  <p>Staff ID</p>
                  <p>Phone Number</p>
                  <p>Role</p>
                  <p>Designation</p>
                  <p>Action</p>
                </div>
              </b>
              <br/>
              <div className={style.grey}>
                {usersData.map((users) => (
                  <div className={style.marginbox2} key={users.id}>
                    <div className={style.flextitle}>
                      <p>0{users.id}</p>
                      <p>{users.firstName}</p>
                      <p>{users.lastName}</p>
                      <p>{users.gender}</p>
                      <p>{users.staffId}</p>
                      <p>{users.phoneNumber1}</p>
                      <p>{users.role}</p>
                      <p>{users.Designation}</p>
                     
                      <Link
                        href={`/staffedit`}
                        onClick={() => setActive("/staffedit")}
                      >
                        <p className={style.blue}>View more </p>
                      </Link>
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
