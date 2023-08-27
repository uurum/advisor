import Image from "next/image";
import logo from "@/assets/images/logo.png";
import styles from "./Header.module.scss";
import Link from "next/link";

function Header() {
  return (
    <div className="flex justify-center bg-white">
      <header className="  w-3/5 ">
        <div className="max-w-6xl">

          <div className="flex items-center  text-white bg-purple-800 justify-between p-4">
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

          <div className="flex p-8 bg-white items-center">
            <Image src={logo} alt="logo" />
            <nav className="flex items-center gap-10 ml-10">
              <Link href="/contact">Contact</Link>
              <Link href="/financial">Financial</Link>
              <Link href="/contact">İletişim</Link>
              <Link href="/about">Hakkında</Link>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
