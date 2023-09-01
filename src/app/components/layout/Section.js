import React from "react";
import { Button } from "primereact/button";
import Link from "next/link";



export default function Section(props) {



  return (
    <div
      className="flex justify-center max-md:hidden"
      style={{ backgroundColor: "#e9e9e9" }}
    >
      <div className=" flex  justify-between align-middle py-10  w-full max-w-6xl">
        <div className="flex float-left">
          <h2 className="mb-4 mr-4 text-4xl">{props.header} </h2>

          <ul className="flex mt-8">
            <li>
            <Link
                  href="/home"
                >
                  Home
                </Link>
            </li>
            <li>Contact Us</li>

          </ul>
        </div>

        <Button style={{backgroundColor:"green"}}  rounded>
          <i className="pi pi-phone m-2 "></i>
          Contact Us
        </Button>
      </div>
    </div>
  );
}
