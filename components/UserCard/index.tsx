import { UserData } from "@/types/UserData";
import style from './UserCard.module.css'; // Предположим, что у вас есть отдельный файл стилей для компонента

interface Props {
    userInfo: UserData;
}

export default function UserCard({ userInfo }: Props) {
    return (
        <div className={style.userCard}>
            {/* <input type="checkbox" className={style.checkbox} />
            <p className={style.userInfo}>{userInfo.id}</p>
            <p className={style.userInfo}>{userInfo.name} {userInfo.surname}</p>
            <p className={style.userInfo}>{userInfo.size}</p>
            <p className={style.userInfo}>{userInfo.status}</p>
            <p className={style.userInfo}>{userInfo.time}</p> */}
        </div>
    );
}
