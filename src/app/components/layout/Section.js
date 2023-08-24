import React from "react";
import { Button } from "primereact/button";

export default function Section() {
  return (
    <div className="flex justify-center">
      <div
        className=" flex  justify-around align-middle p-10  w-full "
        style={{ backgroundColor: "#e9e9e9" }}
      >
        <div className="flex float-left">
          <h2 className="mb-4 mr-4 text-4xl">Contact Us </h2>

          <ul className="flex mt-8">
            <li>
              <a href="http://advisor.brighthemes.biz/demo/">Home</a>
            </li>
            <li>/Contact Us</li>
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
