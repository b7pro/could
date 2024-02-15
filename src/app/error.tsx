"use client";
import Link from "next/link";

const ErrorPage = () => {
    return ( 
        <>
            <h1>Error page</h1>
            <Link href={"/"}>go to home</Link>
        </>
     );
}
 
export default ErrorPage;