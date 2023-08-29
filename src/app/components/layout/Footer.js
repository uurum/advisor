import React from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { useForm } from "react-hook-form";
import "primeicons/primeicons.css";
import Image from "next/image";
import footerLogo from "@/assets/images/footerLogo.png";

export default function Footer() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="flex justify-center bg-gray-100">
      <div className="grid grid-cols-3 max-w-5xl max-md:grid-cols-1">
        <div className="col-span-3 flex">
          <div className=" p-5">
            <Image src={footerLogo} width={400} alt="Footer Logo" />
          </div>
          <div className=" p-5 ">
            <p>
              Lorem ipsum dolor sit amet, consectetur adi pisi cing elit, sed do
              eiusmod tempor Neque porro quisquam est, qui dolorem ipsum quia
              dolor sit amet, consectetur, adipis civelit sed quia non qui
              dolorem or phone +11 987 654 3210 ipsum quia dolor sit amet,
              consectetur.
            </p>
          </div>
        </div>

        <div className="col-span-2 p-4 bg-white ">
          <div className="flex text-gray-500">
            <i className="pi pi-phone m-4" style={{ fontSize: "2rem" }}></i>

            <div className="flex flex-col">
              <h2 className="text-xl"> +1 900 234 567 </h2>
              <p>support@avisor-theme.com</p>
            </div>

            <i className="pi pi-phone m-4" style={{ fontSize: "2rem" }}></i>

            <div className="flex flex-col">
              <h2 className="text-xl"> Manhatta Hall</h2>
              <p>Advisor Ltd 1258, Melbourne, australia</p>
            </div>
          </div>
        </div>

        <div
          className=" row-span-3 p-4 max-md:col-span-3"
          style={{ backgroundColor: "#e9e9e9" }}
        >
          <h4 className="p-5 text-2xl">Newsletter</h4>

          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col ">
            <InputText
              placeholder="Your Names"
              type="text"
              {...register("name", { required: true })}
            />
            {errors.name && <p>İsim alanı zorunludur.</p>}

            <InputText
              placeholder="Email Address"
              type="email"
              {...register("email", { required: true })}
            />
            {errors.email && <p>email alanı zorunludur.</p>}

            <Button
              className="w-1/2"
              label="Send Message"
              onClick={handleSubmit}
              type="submit"
              severity="success"
            />
          </form>

          <ul className="flex justify-center ">
            <li className="p-1   rounded-full hover:bg-blue-800 border-4">
              <a href="mailto:support@avisor-theme.com">
                <i
                  className="pi pi-facebook m-2 "
                  style={{ color: "black", fontSize: "1rem" }}
                ></i>
              </a>
            </li>
            <li className="p-1   rounded-full hover:bg-blue-500 border-4">
              <a href="mailto:support@avisor-theme.com">
                <i
                  className="pi pi-twitter m-2"
                  style={{ color: "slateblue", fontSize: "1rem" }}
                ></i>
              </a>
            </li>
            <li className="p-1   rounded-full hover:bg-blue-600 border-4">
              <a href="mailto:support@avisor-theme.com">
                <i
                  className="pi pi-google m-2 hover:bg-slate-500 "
                  style={{ color: "slateblue", fontSize: "1rem" }}
                ></i>
              </a>
            </li>
            <li className="p-1   rounded-full hover:bg-blue-600 border-4">
              <a href="mailto:support@avisor-theme.com">
                <i
                  className="pi pi-linkedin m-2"
                  style={{ color: "slateblue", fontSize: "1rem" }}
                ></i>
              </a>
            </li>
          </ul>
        </div>

        <div className="p-4 flex">
          <ul className="list-disc	w-6/12">
            <li>
              <a> Home</a>
            </li>
            <li>
              <a> Home</a>
            </li>
            <li>
              <a> Home</a>
            </li>
            <li>
              <a> Home</a>
            </li>
            <li>
              <a> Home</a>
            </li>
            <li>
              <a> Home</a>
            </li>
          </ul>

          <ul className="list-disc	">
            <li>
              <a> Home</a>
            </li>
            <li>
              <a> Home</a>
            </li>
            <li>
              <a> Home</a>
            </li>
            <li>
              <a> Home</a>
            </li>
            <li>
              <a> Home</a>
            </li>
            <li>
              <a> Home</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
