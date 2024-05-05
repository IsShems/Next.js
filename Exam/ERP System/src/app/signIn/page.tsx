"use client";
import SideBar from "@/components/SideBar";
import styles from "./page.module.css";
import Image from "next/image";
import { OutlinedButton, PrimaryButton } from "@/components/CustomButtons";
import { useSession, signIn, SessionProvider } from "next-auth/react";
import { useRouter } from "next/router";
import { ReactNode, useEffect, useState } from "react";

// interface Props {
//   session: ReactNode;
// }

export default function SignIn() {
  const { data: session, status } = useSession();
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/actualdashboard");
    }
  }, [status, router]);

  const handleSignIn = () => {
    signIn("google");
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <SessionProvider session={session}>
      <div className={styles.flexContainer}>
        <div className={styles.white}>
          <div className={styles.flexContainerwithspace}>
            <Image src="/icons/logo.png" width={80} height={80} alt="" />
            <OutlinedButton>Sign Up</OutlinedButton>
          </div>
        </div>
        <Image src="/icons/login.png" width={820} height={900} alt="" />
      </div>
      <div>
        <input
          className={styles.search}
          type="text"
          placeholder="Enter search word"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <input
          className={styles.search}
          type="text"
          placeholder="Enter search word"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <PrimaryButton onClick={handleSignIn}>Sign In</PrimaryButton>
      </div>
    </SessionProvider>
  );
}
