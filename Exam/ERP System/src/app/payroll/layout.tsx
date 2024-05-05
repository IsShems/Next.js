import { ReactNode } from "react";
import style from "../dashboard/layout.module.css";
import { PhotoIcon } from "@/icons/PhotoIcon";
import { format, isToday } from "date-fns"; 
import Image from "next/image";

interface Props {
  children: ReactNode;
  statistics: ReactNode;
  charts: ReactNode;
  box1: ReactNode;
  downcontainers: ReactNode;
    user: {
      name: string;
      designation: string;
    } | null;
}

export default function Layout({ children, user, statistics, charts, box1, downcontainers }: Props) {
  const currentDate = new Date();

  const formattedDate = format(currentDate, "'Today is' eeee, do MMMM yyyy");

  return (
    <div className={style.container}>
       <div className={style.header}>
        <div>
        <div className={style.flextitle}>
          <Image
                src="/icons/payroll/payroll_blue.png"
                width={25}
                height={30}
                alt=""
              />
            <h2 className={style.number}>Payroll</h2>
          </div>
           <p className={style.input}>Generate and send payroll to account.</p>
        </div>
        <div className={style.iconsContainer}>
        <PhotoIcon user={user} />
        </div>
      </div>
      <div className={style.charts}>
        <div>{box1}</div>
        <div>{statistics}</div>
        
      </div>
      <div>{charts}</div>
      <div>{downcontainers}</div>
      {children}
    </div>
  );
}
