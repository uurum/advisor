"use client";

import "./globals.css";
import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";

export default function Layout({ children }) {
  return (
    <html>
      <body>
      <Header />
      <main>{children}</main>
      <Footer />
      </body>
    </html>
  );
}
