import styles from "./header.module.css"
import Link from "next/link"
import Navbar from "./navbar";
export default function Header() {
    return (
      <>
        <header className={styles.header}>
          <Navbar/>
          <div className={styles.right}>
            <Link href={"/login"}>Login</Link>
            <Link href={"/register"}>Register</Link>
          </div>
        </header>
      </>
    )
  }
  