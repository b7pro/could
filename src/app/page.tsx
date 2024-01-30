import Link from "next/link";
import Header from "./components/header/header";

export default function Home() {
  return (
    <>
    
    <h1>home page</h1>
    <Link href={"/about"}>about</Link>
    <Header />
    </>
  );
}
