import Image from "next/image";
import logo from "@/assets/images/logo.png";
import styles from "./Header.module.scss";
import Link from "next/link";

function Header() {
  return (
    <header className={styles.header + " flex flex-col"}>
      <div className="flex items-center justify-between p-4">
        <span className={styles.head + " whitespace-nowrap px-8"}>
          We have over 15 years of experience
        </span>
        <div className="flex items-center justify-around w-full">
          <Link href="" className="flex gap-2 items-center">
            <i className="pi pi-phone !text-2xl"></i>
            506 123 45 67
          </Link>
          <Link href="" className="flex gap-2 items-center">
            <i className="pi pi-map-marker"></i>
            Kocaeli
          </Link>
          <Link href="" className="flex gap-2 items-center">
            <i className="pi pi-stopwatch"></i>
            08:00 - 17:00
          </Link>
        </div>
      </div>
      <div className="flex items-center">
        <Image src={logo} alt="logo" />
        <nav className="flex items-center gap-6">
            <Link href="/contact">
                İletişim
            </Link>
            <Link href="/contact">
                Hakkımızda
            </Link>
            <Link href="/contact">
                İletişim
            </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
