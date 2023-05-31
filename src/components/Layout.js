import { Container, TableContainer } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <>
      <Header title="Carlos Cienfuegos">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </Header>
    
        <main>{children}</main>
     
      <Footer />
    </>
  );
}