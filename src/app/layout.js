import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";

export const metadata = {
  title: "P O W E R S P O T",
  description: "Charging Station finding app for evs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="dark">
        <NextTopLoader color="#1a56db" height={2} showSpinner={false} />
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
