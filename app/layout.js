import { Inter } from "next/font/google";
import "@/assets/styles/globals.css"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Test from "@/components/Test";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PropertyPulse| Find The Best Property in Your Area",
  description: "Find Your Dream House",
  keyword: "rentals, find rental homes"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>
        <Navbar/>

      <div className="pt-20"/> 
        
        {children}
        

        <Footer/>
        
        </body>
    </html>
  );
}
