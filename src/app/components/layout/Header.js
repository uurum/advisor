import Image from "next/image";
import logo from "@/assets/images/logo.png";
import styles from "./Header.module.scss";
import Link from "next/link";

function Header() {
  return (
    <header className="flex justify-center bg-white ">
      <div className="max-w-6xl ">
        <div className="flex items-center text-white bg-purple-800 justify-between p-4 max-md:flex-col">
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

        <div className="flex p-8 bg-white items-center max-md:flex-col">
          <Image src={logo} alt="logo" />
          <nav className="flex items-center gap-10 ml-10 max-md:flex-col">
            <div class="relative inline-block text-left group group-hover:block">
              <a
                type="button"
                class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50"
              >
                Home
              </a>

              <div class="absolute hidden right-0  w-56 bg-white border border-gray-300 divide-y divide-gray-100 rounded-md shadow-lg group-hover:block">
                <Link
                  href="/financial"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Financial
                </Link>
                <Link
                  href="/financial"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Financial
                </Link>
                <Link
                  href="/financial"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Financial
                </Link>
              </div>
            </div>

            <Link href="/contact">Contact</Link>
            <Link href="/financial">Financial</Link>
            <Link href="/contact">İletişim</Link>
            <Link href="/about">Hakkında</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
