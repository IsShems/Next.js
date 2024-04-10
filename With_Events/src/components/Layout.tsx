import Link from "next/link";
import { ReactNode } from "react";
import { inter } from "@/fonts";
import { CustomNav } from "./CustomNav";
import { CustomUl } from "./CustomUl";
import { CustomDiv } from "./CustomDiv";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <CustomDiv>
      <CustomNav>
        <CustomUl className={inter.className}>
          <li>
            <Link href="/home">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contacts">Contacts</Link>
          </li>
          <li>
            <Link href="/cars">Cars</Link>
          </li>
          <li>
            <Link href="/events">Events</Link>
          </li>
        </CustomUl>
      </CustomNav>
      {children}
    </CustomDiv>
  );
}
