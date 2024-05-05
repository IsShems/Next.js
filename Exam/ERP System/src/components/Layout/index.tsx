import { ReactNode } from "react";
import SideBar from "../SideBar";
import style from '../Layout/Layout.module.css'
interface Props {
    children: ReactNode
}

export default function Layout({ children }: Props) {
    return (
        <div className={style.container}>
            <SideBar />
            <div className={style.content}>
                {children}
            </div>
        </div>
    )
}