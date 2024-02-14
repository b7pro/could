"use client"
import Link from "next/link";
const NotFoundPage = () => {
    return ( 
        <>
            <h1> page Not found</h1>
            <h1>404</h1>
            <Link href={"/"}>go to home</Link>
        </>
     );
}
 
export default NotFoundPage;