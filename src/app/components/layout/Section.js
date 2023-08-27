import React from "react";
import { Button } from "primereact/button";
import { usePathname } from 'next/navigation'


export default function Section() {

  const pathname = usePathname();


  return (
    <div
      className="flex justify-center "
      style={{ backgroundColor: "#e9e9e9" }}
    >
      <div className=" flex  justify-between align-middle py-10  w-full max-w-6xl">
        <div className="flex float-left">
          <h2 className="mb-4 mr-4 text-4xl">{pathname} </h2>

          <ul className="flex mt-8">
            <li>
              <a href="http://advisor.brighthemes.biz/demo/">Home</a>
            </li>
            <li>Contact Us</li>

          </ul>
        </div>

        <Button severity="success" rounded>
          <i className="pi pi-phone m-2 "></i>
          Contact Us
        </Button>
      </div>
    </div>
  );
}
