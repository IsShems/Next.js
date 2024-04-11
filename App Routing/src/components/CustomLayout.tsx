'use client'

import Link from "next/link"
import { ReactNode } from "react"
import { CustomDiv } from "./CustomDiv";
import { CustomNav } from "./CustomNav";
import { CustomUl } from "./CustomUl";
import { usePathname } from "next/navigation";
import { inter } from "@/fonts";

interface Props {
    children: ReactNode
}


export default function CustomLayout({ children }: Props) {

    const pathname = usePathname()

    const setActive = (href: string) => {
        if (pathname === href) {
            return 'active'
        }
        else {

            return ''
        }
    }

    return (
        <CustomDiv>
            <CustomNav>
                <CustomUl className={inter.className}>
                <li className={setActive('/home')}>
                        <Link href="/home">Home</Link>
                    </li>
                    <li className={setActive('/events')}>
                        <Link href="/events">Events</Link>
                    </li>
                </CustomUl>
            </CustomNav>
            {children}
        </CustomDiv>
    )
}