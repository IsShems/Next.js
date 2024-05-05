"use client";
import { useDashboardContext } from "@/contexts/actualdashboardContext";
import { Memo } from "@/types/Memo";
import { UserData } from "@/types/UserData";
import { paymentVoucher } from "@/types/paymentVoucher";
import { ReactNode, useEffect, useState } from "react";
import style from "../actualdashboard/page.module.css";
import { PhotoIcon } from "@/icons/PhotoIcon";
import { format, isToday } from "date-fns";
import Image from "next/image";
import YourChartComponent from "../../components/DonutChart";
import { getSession } from "next-auth/react";

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
  const [memosData, setMemosData] = useState<Memo[]>([]);
  const [usersData, setUsersData] = useState<UserData[]>([]);
  const [PaymentVoucherData, setPaymentVoucherData] = useState<
    paymentVoucher[]
  >([]);
  const actualdashboardContext = useDashboardContext();

  useEffect(() => {
    const fetchData = async () => {
      const memos = await actualdashboardContext.fetchMemos();
      console.log(memos);

      setMemosData(memos);

      const users = await actualdashboardContext.fetchStaffList();
      console.log(users);

      setUsersData(users);

      const paymentvouchers =
        await actualdashboardContext.fetchPaymentVouchers();
      console.log(paymentvouchers);

      setPaymentVoucherData(paymentvouchers);
    };
    fetchData();
  }, [actualdashboardContext]);

  return (
    <div className={style.container}>
      <div className={style.header}>
        <div>
          <h2 className={style.input}>Welcome, {user ? user.name : "Guest"}</h2>
          <p className={style.input}>{formattedDate}</p>
        </div>
        <div className={style.iconsContainer}>
          <PhotoIcon user={user} />
        </div>
      </div>
      <div className={style.charts}>
        <div className={style.flexContainer}>
          <div className={style.box1}>
            <div className={style.insidebox1}>
              <h1 className={style.number}>250</h1>
              <p>Total number of stuff</p>
              <br />
              <small>
                <span className={style.green}>↑</span> 12 more than last quarter
              </small>
            </div>
            <div className={`${style.pic} ${style.lightorange}`}>
              <Image
                src="/icons/dash_orange.png"
                width={45}
                height={35}
                alt=""
              />
            </div>
          </div>
          <div className={style.box1}>
            <div className={style.insidebox1}>
              <h1 className={style.number}>100</h1>
              <p>Total application</p>
              <br />
              <small>
                <span className={style.red}>↓</span> 0.2% lower than last
                quarter
              </small>
            </div>
            <div className={`${style.pic} ${style.lightblue}`}>
              <Image src="/icons/dash_blue.png" width={45} height={35} alt="" />
            </div>
          </div>
          <div className={style.box1}>
            <div className={style.insidebox1}>
              <h1 className={style.number}>10</h1>
              <p>Total projects</p>
              <br />
              <small>
                <span className={style.green}>↑</span> 2% more than last quarter
              </small>
            </div>
            <div className={`${style.pic} ${style.lightpurple}`}>
              <Image
                src="/icons/dash_purple.png"
                width={45}
                height={35}
                alt=""
              />
            </div>
          </div>
          <div className={style.box1}>
            <div className={style.insidebox1}>
              <h1 className={style.number}>10</h1>
              <p>Total departments</p>
              <br />
            </div>
            <div className={`${style.pic} ${style.lightgreen}`}>
              <Image
                src="/icons/dash_green.png"
                width={45}
                height={35}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className={style.flexContainer}>
          <div className={style.box2}>
            <h1 className={style.titleinbox2}>Memo</h1>
            <div className={style.black}>
              <b>
                <div className={`${style.margintitlebox2}`}>
                  <p>S/N</p>
                  <p>Memo Title</p>
                  <p>Sent From</p>
                  <p>Sent To</p>
                  <p>Status</p>
                </div>
              </b>
              {memosData.map((memo) => (
                <div className={style.marginbox2} key={memo.id}>
                  <hr />
                  <div className={style.flextitle}>
                    <p>0{memo.id}</p>
                    <p>{memo.MemoTitle}</p>
                    <p>{memo.from}</p>
                    <p>{memo.to}</p>
                    <p
                      style={{
                        color:
                          memo.Status === "Pending"
                            ? "orange"
                            : memo.Status === "Approved"
                            ? "green"
                            : "red",
                      }}
                    >
                      {memo.Status}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={style.box2}>
            <h1 className={style.titleinbox2}>Staff List</h1>
            <div className={style.black}>
              <b>
                <div className={`${style.margintitlebox2}`}>
                  <p>S/N</p>
                  <p>Staff Name</p>
                  <p>Staff Role</p>
                  <p>Designation</p>
                </div>
              </b>
              {usersData.map((users) => (
                <div className={style.marginbox2} key={users.id}>
                  <hr />
                  <div className={style.flextitle}>
                    <p>0{users.id}</p>
                    <p>
                      {users.firstName} {users.lastName}
                    </p>
                    <p>{users.role}</p>
                    <p>{users.Designation}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={style.flexContainer}>
          <div className={style.box2}>
            <h1 className={style.titleinbox2}>Payment Vouchers</h1>
            <div className={style.black}>
              <b>
                <div className={`${style.margintitlebox2}`}>
                  <p>S/N</p>
                  <p>Subject</p>
                  <p>Date</p>
                  <p>Status</p>
                </div>
              </b>
              {PaymentVoucherData.map((paymentVoucher) => (
                <div className={style.marginbox2} key={paymentVoucher.id}>
                  <hr />
                  <div className={style.flextitle}>
                    <p>0{paymentVoucher.id}</p>
                    <p>{paymentVoucher.Subject}</p>
                    <p>{paymentVoucher.Date}</p>
                    <p
                      style={{
                        color:
                          paymentVoucher.Status === "Pending"
                            ? "orange"
                            : paymentVoucher.Status === "Approved"
                            ? "green"
                            : "red",
                      }}
                    >
                      {paymentVoucher.Status}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={style.box2}>
            <h1 className={style.titleinbox2}>Staff Application Card</h1>
            <div className={style.flextitle}>
              <div>
                <h3 className={style.titleinbox2}>500 Total applications</h3>
                <div className={style.flex}>
                  <div
                    className={`${style.boxfordonutchart} ${style.pending}`}
                  ></div>
                  <h3 className={`${style.black} ${style.marginnum}`}>80</h3>
                  <p className={`${style.black} ${style.marginnum}`}>Pending</p>
                </div>
                <div className={style.flex}>
                  <div
                    className={`${style.boxfordonutchart} ${style.approved}`}
                  ></div>
                  <h3 className={`${style.black} ${style.marginnum}`}>370</h3>
                  <p className={`${style.black} ${style.marginnum}`}>
                    Approved
                  </p>
                </div>
                <div className={style.flex}>
                  <div
                    className={`${style.boxfordonutchart} ${style.rejected}`}
                  ></div>
                  <h3 className={`${style.black} ${style.marginnum}`}>50</h3>
                  <p className={`${style.black} ${style.marginnum}`}>
                    Rejected
                  </p>
                </div>
              </div>
              <div className={style.paddingright}>
                <YourChartComponent />
              </div>
            </div>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}

export async function getServerSideProps({ params }: any) {
  const session = await getSession(params);

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {
      user: session.user,
    },
  };
}
